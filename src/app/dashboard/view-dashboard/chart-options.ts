import { getStyle, hexToRgba } from '@coreui/utils';
const brandSuccess = getStyle('--success') || '#4dbd74';
const brandInfo = getStyle('--info') || '#20a8d8';
const brandInfoBg = hexToRgba('#20a8d8', 10);
const brandDanger = getStyle('--danger') || '#f86c6b';
import { customTooltips } from '@coreui/chartjs/dist/js/coreui-chartjs.js';
import { isThisISOWeek } from 'date-fns';

export const chartConfig = {
    options: {
      tooltips: {
        enabled: false,
        custom: customTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return {
              backgroundColor:
                chart.data.datasets[tooltipItem.datasetIndex].borderColor,
            };
          },
        },
      },
      animation: {
        duration: 0,
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function (value: any) {
                return value
              },
            },
            // type: 'time',
            // time: {
            //     unit: 'month'
            // }
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(25 / 5),
              max: 25,
            },
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
      legend: {
        display: true,
      },
    },
    colors: [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandSuccess
        backgroundColor: 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
      },
    ]
  };