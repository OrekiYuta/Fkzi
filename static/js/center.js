var center = echarts.init(document.getElementById("m2"),"white");

// var mydata = [{'name':'上海',"value":328},{'name':'云南',"value":3228}]

var center_option = {
    title:{
        text:'',
        subtext: '',
        x:'left'
    },
    tooltip:{
        trigger:'item'
    },

    visualMap:{
        show:true,
        x:'left',
        y:'bottom',
        textStyle:{
            fontSize: 10,
            color: "#000"
        },
        splitList:[{ start: 1, end: 9} ,
            { start: 10, end: 99} ,
            { start: 100, end: 999} ,
            { start: 1000, end: 9999} ,
            { start: 10000}],
        color: ['#8A3310','#C64918','#E55B25','#F2AD92','#F9DCD1']
    },
    series: [{
        name:'累计确诊人数',
        type: 'map',
        map: 'china',
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: .5,
                borderColor: '#009fe8',
                areaColor: '#ffefd5'
            },
            emphasis:{
                borderWidth: .5,
                borderColor: '#4b0082',
                // areaColor: '#fff'
                areaColor: '#feff14'

            }
        },
        label:{
            normal: {
                show: true,
                fontSize: 10,

            },
            emphasis:{
                show: true,
                fontSize: 10,
                areaColor: '#feff14'
            }
        },

        data: []
    }]
};

// center.setOption(center_option)