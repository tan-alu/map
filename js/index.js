// 立即执行函数 防止变量污染，减少命名冲突 里面额变量都是局部变量
// 柱状图模块
(function () {
  // 实例化对象
  var mayChart = echarts.init(document.querySelector('.bar .echart'))
  option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图标大小
    grid: {
      left: '0%',
      right: '0%',
      bottom: '4%',
      top: '10px',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['dia', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: "12"
      },
      // 不显示x坐标轴的样式
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: "12"
      },
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };
  // 配置项给实例对象
  mayChart.setOption(option);
})();