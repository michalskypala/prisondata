Highcharts.chart('assaultsline', {

    title: {
        text: 'Assualts on prison officers has risen in the last two years'
    },

    subtitle: {
        text: "The total reached it's peak in 2015, with 4459 assaults"
    },

    yAxis: {
        title: {
            text: 'Number of assualts'
        }
    },
    legend: {
        enabled: false,
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            },
            pointStart: 2000,
            color: '#19304a'
        }
    },

    series: [{
        name: 'Assualts',
        data: [1933, 2387, 2516, 2535, 2781, 3101, 3131, 2890, 2789, 2642, 2369, 2681, 2636, 2843, 3244, 4459]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                  enabled: false,
                }
            }
        }]
    }

});

Highcharts.chart('sexualassaultsline', {

    title: {
        text: 'Sexual assaults between prisoners has also seen a dramatic increase'
    },

    subtitle: {
        text: 'There were 3x as many last year as in 2000'
    },

    yAxis: {
        title: {
            text: 'Number of Assualts'
        }
    },
    legend: {
        enabled: false,
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            },
            pointStart: 2000,
            color: '#2b2533'
        }
    },

    series: [{
        name: 'Assualts',
        data: [82, 70, 113, 92, 103, 87, 94, 103, 92, 104, 92, 96, 88, 137, 189, 236]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                  enabled: false,
                }
            }
        }]
    }

});

Highcharts.chart('assaultsbar', {

        title: {
            text: 'At Werrington Prison, there were 0.8 assualts per prisoner'
        },

        subtitle: {
            text: 'Warren Hill has the least assaults per prisoner'
          },
        xAxis: {
            categories: ['Werrington', 'Cookham Wood', 'Wetherby', 'Feltham', 'Leicester', 'Aylesbury', 'Brinsfood', 'Woodford', 'Winchester', 'Styal']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false,
        },
        series: [{
        		type: 'bar',
            name: 'Assualts per prisoner',
            color: '#312f2d',
            data: [0.771, 0.597, 0.396, 0.248 ,0.227 ,0.18 ,0.154, 0.135, 0.122, 0.12]
        }],
    });
