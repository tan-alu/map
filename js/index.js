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
    legend: {
      data: ['2011年', '2012年']
    },
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
      inverse: true,
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
      inverse: true,
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
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })

})();
// 折线图
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.line .echart'))
  var yearData = [{
    year: '2020',
    data: [
      [24, 400, 30, 324, 35, 134],
      [78, 234, 54, 564, 70, 89]
    ]
  }, {
    year: '2021',
    data: [
      [253, 40, 40, 324, 35, 134],
      [98, 244, 24, 154, 70, 90]
    ]
  }]
  // 指定配置
  option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: "#4c9bfd"
      },
      right: "10%"
    },
    grid: {
      left: '3%',
      top: "20%",
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: '#012f4a', //边框颜色

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        show: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: yearData[0].data[0],
        // 折线变圆滑
        smooth: true
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: yearData[1].data[1],
        // 折线变圆滑
        smooth: true

      }
    ]
  };
  myChart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 点击切换效果
  $(".line h2").on("click", "a", function () {
    // alert(1)
    // console.log($(this).index())
    // 点击a之后，根据当前a的索引号，找到对应的相关对象
    console.log(yearData[$(this).index()])
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option)
  });
})();
// 右侧折线图
(function () {
  // 初始化
  var myChart = echarts.init(document.querySelector('.line1 .echart'))
  // 配置项
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: '#fff'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      top: "30",
      right: '10',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        areaStyle: {
          color: new echarts.graphic.
          LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: 'rgba(1,132,213,.4)' // 0% 处的颜色
            }, {
              offset: 0.8,
              color: 'rgba(1,132,213,.1)' // 100% 处的颜色
            }],
            false // 缺省为 false
          ),
          shadowColor: 'rgba(221,220,107,.1)'
        },
        // 设置拐点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 8,
        showSymbol: false,
        // 拐点边框
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221,220,107,.1)',
          borderWidth: 12
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: '#0184d5',
          width: 2
        }
      },
      {
        name: '联盟广告',
        type: 'line',
        // 填充区域
        areaStyle: {
          color: new echarts.graphic.
          LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: 'rgba(0,216,135,.4)' // 0% 处的颜色
            }, {
              offset: 0.8,
              color: 'rgba(0,216,135,.1)' // 100% 处的颜色
            }],
            false // 缺省为 false
          ),
          shadowColor: 'rgba(0,0,0,.1)'
        },
        // 设置拐点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 5,
        showSymbol: false,
        // 拐点边框
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221,220,107,.1)',
          borderWidth: 12
        },
        data: [220, 182, 191, 234, 290, 330, 310],
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: 'green',
          width: 2
        }
      }
    ]
  };

  // 配置项给对象
  myChart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector('.pie .echart'))
  option = {
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      // 修改小图标
      itemWidth: 10,
      itemHeight: 10,
      // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      textStyle: {
        color: '#fff',
        fontSize: "12"
      }
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线是否显示
      labelLine: {
        show: false
      },
      data: [{
          value: 335,
          name: '直接访问'
        },
        {
          value: 310,
          name: '邮件营销'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 135,
          name: '视频广告'
        },
        {
          value: 548,
          name: '搜索引擎'
        }
      ]
    }]
  };
  myChart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 饼形图2
(function () {
  // 初始化
  var myChart = echarts.init(document.querySelector('.pie1 .echart'))
  option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: '12'
      }
    },
    series: [{
      name: '地区分布',
      type: 'pie',
      radius: [10, 60],
      center: ['50%', '40%'],
      roseType: 'radius',
      // 图形文字标签
      label: {
        fontSize: 10
      },
      labelLine: {
        length: 6,
        length2: 8
      },
      data: [{
          value: 10,
          name: 'rose1'
        },
        {
          value: 5,
          name: 'rose2'
        },
        {
          value: 15,
          name: 'rose3'
        },
        {
          value: 25,
          name: 'rose4'
        },
        {
          value: 20,
          name: 'rose5'
        },
        {
          value: 35,
          name: 'rose6'
        },
        {
          value: 30,
          name: 'rose7'
        },
        {
          value: 40,
          name: 'rose8'
        }
      ]
    }]
  };

  myChart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()