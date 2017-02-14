import React from 'react';
import echarts from 'echarts';

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: '技能显示',
              textStyle:{color: 'rgba(0, 255,0, 0.3)'},
              left:'center'
            },

    tooltip: {},
    xAxis: {
        data: ["javascript","jQuery","Html5","ajax","react","node.js"]
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
