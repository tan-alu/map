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
      data: ['电商', '教育', '旅游', '医疗', '社交', '金融', '游戏'],
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
      axisLine: {
        // show: true
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        },
        // 分割线的颜色
        splitLine: {
          lineStyle: {
            color: []
          }
        }
      }
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 配置项给实例对象
  mayChart.setOption(option);
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    mayChart.resize();
  })
})();
// 柱形图-技能掌握
(function () {
  var myColor = ['#q089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .echart'))
  // 配置信息
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // legend: {
    //   data: ['2011年', '2012年']
    // },
    grid: {
      left: '22%',
      bottom: '10%',
      top: "10%",
    },
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['巴西', '印尼', '美国', '印度', '中国'],
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff"
      }
    }, {
      // type: 'category',
      data: ['702', '350', '610', '350', '701'],
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff"
      }
    }],
    series: [{
        name: '2011年',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 柱子为圆角
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params)
            // dataIndex是当前柱子的索引号
            return myColor[params.dataIndex]
          }
        },
        barWidth: 10,
        // 柱子之间的距离
        barCategoryGap: 50,
        label: {
          show: true,
          position: 'inside',
          formatter: "{c}%"
        }
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 10,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  myChart.setOption(option);

})();