import React from 'react';
import echarts from 'echarts';

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例',
              textStyle:{color: 'rgba(0, 255,0, 0.3)'},
              left:'center'
            },

    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 8, 10, 10, 15]
    }]
});
  }
  render () {
    return(
      <div id="main" style={{width:"100%",height:'auto',maxWidth:"600px"}}>

      </div>
    )
  }
}

export default Work;
