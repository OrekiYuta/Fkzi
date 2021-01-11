var right_bottom = echarts.init(document.getElementById('r2'));

  // var right_bottom_data = [
  //           {name: "龙头镇", value: "111"},
  //           {name: "大埔镇", value: "222"},
  //       ];
var right_bottom_option = {
    title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        show: false
    },
    series: [{
        name: '',
        type: 'wordCloud',
        sizeRange: [10,30],//文字范围
        //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
        rotationRange: [-45, 90],
        rotationStep: 45,
        textRotation: [0, 45, 90, -45],
        //形状
        shape: 'triangle-forward',
        textStyle: {
            normal: {
                color: function() {//文字颜色的随机色
                    return 'rgb(' + [
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250)
                    ].join(',') + ')';
                }
            },
            //悬停上去的颜色设置
            emphasis: {
                fontSize: 30,
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: []
    }]
};

//使用4.0版本echarts才支持词云,这里可以把echarts-4.9.0里面的echarts全部替换为echarts4了,区分开和5.0版本
//目前我整体用4.0,右上的饼图和左上的折线图用5.0

//使用制定的配置项和数据显示图表
right_bottom.setOption(right_bottom_option);