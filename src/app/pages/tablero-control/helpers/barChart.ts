import { Options } from 'highcharts';

export const barChart: Options = {
  title: {
    text: 'Presupuesto MAYO 2023'
},

xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
        rangeDescription: 'Range: 1 to 10'
    }
},

yAxis: {
    type: 'logarithmic',
    minorTickInterval: 0.1,
    accessibility: {
        rangeDescription: 'Range: 0.1 to 1000'
    }
},

tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
},

credits: {
  enabled: false,
},

series: [{
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
} as any]
};
