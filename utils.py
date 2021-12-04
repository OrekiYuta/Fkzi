import sys
import time
# import mariadb
import pymysql


def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年", "月", "日")


def db_connect(dbType):
    if dbType == "mariadb":
        try:
            conn = mariadb.connect(
                user="root",
                password="raspberry",
                host="192.168.137.47",
                port=3306,
                database="virus"
            )
            cursor = conn.cursor()
            return conn, cursor

        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            sys.exit(1)
    elif dbType == "mysql":
        try:
            conn = pymysql.connect(
                password="#####",
                host="@###",
                port=3902,
                database="eas"
            )
            cursor = conn.cursor()
            return conn, cursor

        except pymysql.Error as e:
            print(f"Error connecting to pymysql Platform: {e}")
            sys.exit(1)

    else:
        print("please input mariadb or mysql")


def db_close(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()


def query(sql, *args):
    """
    :param sql:
    :param args
    :return 返回查询结果 ((),())
    """
    conn, cursor = db_connect("mysql")
    cursor.execute(sql, args)
    res = cursor.fetchall()
    db_close(conn, cursor)

    return res


def get_daily_data():
    sql = "select today_confirm,total_nowConfirm," \
          "total_confirm,total_dead,total_deadRate," \
          "total_heal,total_healRate from daily_data " \
          "where setDataTime=(select setDataTime from daily_data " \
          "order by setDataTime desc limit 1)"
    res = query(sql)
    return res[0]


# 地图整体数据
def get_area_data():
    sql = "select province_name_,sum(city_total_confirm_) " \
          "from tencent_virus_data where lastUpdateTime=(" \
          "select lastUpdateTime from tencent_virus_data " \
          "order by lastUpdateTime desc limit 1) " \
          "group by province_name_"
    res = query(sql)
    return res


# 总趋势最近十天
def get_GeneralTrend_data():
    sql = "select today_confirm,total_nowConfirm,total_confirm," \
          "total_dead,total_heal,setDataTime from daily_data " \
          "order by  id desc limit 10"
    res = query(sql)
    return res


# get_GeneralTrend_data()[1:] # 从第二条数据开始取

# 今日有新增确诊的省市
def get_todayNewConfrim_data():
    sql = "select CONCAT(province_name_,'-',city_name_) as province_city," \
          "city_today_confirm_,lastUpdateTime from tencent_virus_data " \
          "where city_today_confirm_ >0 and lastUpdateTime=(" \
          "select lastUpdateTime from tencent_virus_data " \
          "ORDER BY lastUpdateTime desc limit 1 )"

    res = query(sql)
    return res


# 目前各省市累计确诊数
def get_confirmUntilNow():
    sql = "select province_name_,sum(city_total_confirm_),lastUpdateTime " \
          "from tencent_virus_data where lastUpdateTime = ( " \
          "select lastUpdateTime from tencent_virus_data " \
          "order by lastUpdateTime desc limit 1) " \
          "group by province_name_,lastUpdateTime"

    res = query(sql)
    return res


# 获取最新50条热搜数据
def get_hotPoint():
    sql = "select content,setDataTime from  hotpoint order by id desc limit 50"
    res = query(sql)
    return res


# 统计所有采集数据量
def get_total_data_count():
    d = "select count(*) from daily_data"
    t = "select count(1) from tencent_virus_data"
    h = "select count(0) from hotpoint"
    r_d = query(d)
    r_t = query(t)
    r_h = query(h)
    return r_d,r_t,r_h
