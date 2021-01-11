function getTime() {
    $.ajax({
        url:"getTime",
        timeout:10000,
        success:function (data) {
              $("#time").html(data)
        },
        error:function (x) {

        }
    })
}

function getDailyData(){
    $.ajax({
        url: "/getDailyData",
        success:function (data) {
            $("#today_confirm").text(data.today_confirm);
            $("#total_nowConfirm").text(data.total_nowConfirm);
            $("#total_deadRate").text(data.total_deadRate);
            $("#total_healRate").text(data.total_healRate);
            $("#total_confirm").text(data.total_confirm);
            $("#total_dead").text(data.total_dead);
            $("#total_heal").text(data.total_heal);
        },
        error:function (x) {

        }
    })
}

function getAreaData(){
    $.ajax({
        url: "/getAreaData",
        success:function (data) {
            center_option.series[0].data=data.data;
            center.setOption(center_option);
        },
        error:function (x) {
        }
    })

}

function get_leftTop_data(){
      $.ajax({
        url: "/getGeneralTrend",
        success:function (data) {
            left_top_option.xAxis.data = data.setDataTime;
            left_top_option.series[0].data = data.today_confirm;
            left_top_option.series[1].data = data.total_nowConfirm;
            left_top_option.series[2].data = data.total_confirm;
            left_top_option.series[3].data = data.total_dead;
            left_top_option.series[4].data = data.total_heal;

            left_top.setOption(left_top_option)
        },
        error:function (x) {
        }
    })
}

function get_leftBottom_data(){
      $.ajax({
        url: "/getTodayNewConfrim",
        success:function (data) {
            left_bottom_option.yAxis[0].data = data.province_city;
            left_bottom_option.series[0].data = data.city_today_confirm_;
            left_bottom_option.title.text = "今日有新增确诊的省市  "+data.setDateTime;
            left_bottom.setOption(left_bottom_option)
        },
        error:function (x) {
        }
    })
}

function get_rightTop_data(){
      $.ajax({
        url: "/getConfrimUntilNow",
        success:function (data) {
            right_top_option.legend.data = data.provinces;
            right_top_option.series[0].data = data.provinceConfrim;
            right_top_option.title.subtext = "截至"+data.setDateTime;
            right_top.setOption(right_top_option)
        },
        error:function (x) {
        }
    })
}

function get_rightBottom_data(){
      $.ajax({
        url: "/getHotPoint",
        success:function (data) {
            right_bottom_option.series[0].data = data.keywords;
            right_bottom_option.title.text= "今日热点关键词  "+ data.setDataTime;
            right_bottom.setOption(right_bottom_option)
        },
        error:function (x) {
        }
    })
}
getDailyData()
getAreaData()
get_leftTop_data()
get_rightTop_data()
get_leftBottom_data()
get_rightBottom_data()


setInterval(getTime,1000)
//1个小时更新一次页面数据
setInterval(getDailyData,3600000)
setInterval(get_leftTop_data,3600000)
setInterval(get_rightTop_data,3600000)
setInterval(get_leftBottom_data,3600000)
setInterval(get_rightBottom_data,3600000)

