import { Component, OnInit } from '@angular/core';

import { DynamicScriptLoaderService } from '../../dynamic-script-loader-service.service';

declare const $: any;
declare const echarts: any;

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {

    this.startScript();
  }

  async startScript() {
    await this.dynamicScriptLoader.load('echart').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {

    this.initCharts();
    this.initLineChart();

    /*************** TO DO **********************/
    $(document).on('click', '.to-do-list .form-check-label .form-check-input', function () {
      $(this).parent('label').toggleClass('line-through');
    });
    $(document).on('click', '.todo-remove', function () {
      $(this).closest("li").remove();
      return false;
    });

    $(document).on('click', '.panel .tools .fa-times', function () {
      $(this).parents(".panel").parent().remove();
    });
    $(".dial").knob({
      'min': 0,
      'max': 100,
      'thickness': 0.1
    });
    $(".knob").knob({
      draw: function () {
        if ("tron" == this.$.data("skin")) {
          this.cursorExt = .3;
          var t, i = this.arc(this.cv);
          return this.g.lineWidth = this.lineWidth, this.o.displayPrevious && (t = this.arc(this.v), this.g.beginPath(), this.g.strokeStyle = this.pColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, t.s, t.e, t.d), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, i.s, i.e, i.d), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
        }
      }
    });


  }

  //Charts
  private initCharts() {
    $('.chart.chart-bar2').sparkline(undefined, {
      type: 'bar',
      barColor: '#54B253',
      negBarColor: '#000',
      barWidth: '5px',
      height: '67px'
    });
  }

  private initLineChart() {

    /* Chart data*/
    var chartdata = [
      {
        name: 'sales',
        type: 'bar',
        data: [11, 14, 8, 16, 11, 13]
      },
      {
        name: 'profit',
        type: 'line',
        smooth: true,
        data: [10, 7, 17, 11, 15],
        symbolSize: 10,
      },
      {
        name: 'growth',
        type: 'bar',
        data: [10, 14, 10, 15, 9, 25]
      }
    ];

    /* Bar chart echartopt1*/
    var chart = document.getElementById('echart_bar_line');
    var barChart = echarts.init(chart);

    var option = {
      grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
      },
      xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      },
      tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: false,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
          label: {
            show: false,
          }
        }

      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      },
      series: chartdata,
      color: ['#9f78ff', '#fa626b', '#32cafe',]
    };

    barChart.setOption(option);

  }
}
