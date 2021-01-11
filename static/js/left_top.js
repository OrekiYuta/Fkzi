var left_top = echart5.init(document.getElementById("l1"),"white");

var left_top_option = {
    title: {
        text: '全国疫情趋势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type:'line',
            lineStyle:{
                color:"#7171C6"
            }
        }
    },
    legend: {
        top:'7%',
        data: ['今日确诊', '目前确诊', '累计确诊', '累计治愈', '累计死亡']
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        // 设置为true,解决轴溢出
        boundaryGap: true,
        data: []
    },
    yAxis: {
        // type: 'value',
        type: 'log',
    },
    series: [
        {
            name: '今日确诊',
            type: 'bar',
            //修改 stack 每个不一样，Y轴就不会叠加
            stack: '今日确诊',
            barWidth : 10,
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 10
                        }
                    }
                }
            }

        },
        {
            name: '目前确诊',
            type: 'bar',
            stack: '目前确诊',
            barWidth : 10,
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'black',
                            fontSize: 10
                        }
                    }
                }
            }
        },
        {
            name: '累计确诊',
            type: 'line',
            stack: '累计确诊',
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'black',
                            fontSize: 10
                        }
                    }
                }
            }
        },
        {
            name: '累计死亡',
            type: 'line',
            stack: '累计死亡',
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'black',
                            fontSize: 10
                        }
                    }
                }
            }
        },
        {
            name: '累计治愈',
            type: 'line',
            stack: '累计治愈',
            data: [],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                            color: 'black',
                            fontSize: 10
                        }
                    }
                }
            }
        }
    ]
};

// left_top.setOption(left_top_option);