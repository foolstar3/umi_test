import React from 'react';
import {connect} from 'umi'
import * as echarts from 'echarts';
// import getData from '@/services/getData'
import { render } from '@umijs/deps/compiled/mustache';

@connect(({chart})=>({
  option: chart.option
}))

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      option: {}
    }
    const {dispatch} = this.props
    dispatch({
        type: 'chart/getData',
        payload: 'hello',
        callback: (res) => {
          if (res) {
            console.log(this.props);// 请求完成后返回的结果
          }
        }
      })
    
    }
  

  componentDidMount() {
    // const chartDom = document.getElementById('content')
    // const myChart = echarts.init(chartDom)
    // const option = this.props.option
    // option && myChart.setOption(option)
  }
  componentDidUpdate(prevProps,prevState) {
    console.log(prevProps,prevState,this.props.option);
    const chartDom = document.getElementById('content')
    const myChart = echarts.init(chartDom)
    const option = this.props.option
    option && myChart.setOption(option)
  }
  render() {
    return (
      <div>
        indexpage
        <div id="content" style={{width: '600px',height:'400px'}}></div>
      </div>
    );
  }
  
}

// export default connect(({chart})=>({
//   option: chart.option
// }))(IndexPage)