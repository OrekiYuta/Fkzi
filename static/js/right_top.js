var right_top = echart5.init(document.getElementById("r1"));

var right_top_option = {
    title: {
        text: '目前各省市累计确诊比例',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        // type:'scroll',
        orient: 'horizontal',
        // orient: 'vertical',
        x:'right',
        top:'9%',
        data: []
    },
    // grid:{
    //     bottom: '0%',
    // },
    series: [
        {
            name: '累计确诊人数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            startAngle:320, //起始角度
            data: [],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
