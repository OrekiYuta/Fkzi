var left_bottom = echarts.init(document.getElementById("l2"),"white");

var left_bottom_option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    xAxis: [
        {
            type: 'value',
        }
    ],
    dataZoom: [
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 100, //数据窗口范围的起始百分比
            end: 36
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 36
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
        }
    ]
};
