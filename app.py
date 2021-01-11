import utils
import decimal
from flask import Flask
from flask import jsonify
from flask import render_template
from jieba.analyse import extract_tags

app = Flask(__name__)


@app.route('/', methods=["get", "post"])
def hello_world():
    return render_template("index.html")


@app.route("/getTime")
def get_time():
    return utils.get_time()


@app.route("/getDailyData")
def get_daily_data():
    data = utils.get_daily_data()

    return jsonify({"today_confirm": data[0],
                    "total_nowConfirm": data[1],
                    "total_confirm": data[2],
                    "total_dead": data[3],
                    "total_deadRate": data[4],
                    "total_heal": data[5],
                    "total_healRate": data[6]})


@app.route("/getAreaData")
def get_area_data():
    areaData = []
    for city in utils.get_area_data():
        # print(city)
        areaData.append({"name": city[0], "value": int(city[1])})

    return jsonify({"data": areaData})


@app.route("/getGeneralTrend")
def get_generalTrend_data():
    gT_data = utils.get_GeneralTrend_data()
    today_confirm, total_nowConfirm, total_confirm = [], [], []
    total_dead, total_heal, setDataTime = [], [], []

    # print(gT_data)

    for a, b, c, d, e, f in gT_data:
        today_confirm.append(a)
        total_nowConfirm.append(b)
        total_confirm.append(c)
        total_dead.append(d)
        total_heal.append(e)
        setDataTime.append(f.strftime("%m-%d"))

    # reverse() 没有返回值
    today_confirm.reverse()
    total_nowConfirm.reverse()
    total_confirm.reverse()
    total_dead.reverse()
    total_heal.reverse()
    setDataTime.reverse()

    return jsonify({"today_confirm": today_confirm,
                    "total_nowConfirm": total_nowConfirm,
                    "total_confirm": total_confirm,
                    "total_dead": total_dead,
                    "total_heal": total_heal,
                    "setDataTime": setDataTime})


@app.route("/getTodayNewConfrim")
def get_todayNewConfrim_data():
    tNC_data = utils.get_todayNewConfrim_data()
    province_city, city_today_confirm_ = [], []
    setDateTime = ""
    for i in tNC_data:
        province_city.append(i[0])
        city_today_confirm_.append(i[1])
        setDateTime = i[2].strftime("%Y/%m/%d")

    return jsonify({"setDateTime": setDateTime,
                    "city_today_confirm_": city_today_confirm_,
                    "province_city": province_city})


@app.route("/getConfrimUntilNow")
def get_confrimUntilNow_data():
    cUN_data = utils.get_confrimUntilNow()
    provinces = []
    setDateTime = ""
    provinceConfrim = []
    for i in cUN_data:
        provinces.append(i[0])
        setDateTime = i[2].strftime("%Y/%m/%d")
        pC = int(decimal.Decimal(i[1]).quantize(decimal.Decimal('0')))  # 把 Decimal 转换成可用于 json 序列化的 int 类型
        provinceConfrim.append({"name": i[0], "value": pC})

    return jsonify({"provinces": provinces,
                    "provinceConfrim": provinceConfrim,
                    "setDateTime": setDateTime})


@app.route("/getHotPoint")
def get_hotPoint_data():
    hP_data = utils.get_hotPoint()
    keywords = []
    setDataTime = ""
    for i in hP_data:
        content = i[0]
        # print(content)
        # kw = jieba.cut(content)
        keyword_weight = extract_tags(content, topK=20, withWeight=True)
        setDataTime = i[1].strftime("%Y/%m/%d")
        # print(kw)
        for j in keyword_weight:
            if not j[0].isdigit():  # 如果是数字就不加入数组
                # print(j[1])
                weight = 20 * round(j[1], 1)
                # 小数乘法会出现丢失精度问题，如下
                # 0.8086547120149999
                # 8.100000000000001
                # print(weight)
                keywords.append({"name": j[0], "value": str(weight)})

    # print(keywords)
    return jsonify({"keywords": keywords,
                    "setDataTime": setDataTime})


if __name__ == '__main__':
    # app.run()
    app.run(host="0.0.0.0")
