var chart_1 = document.getElementById('Chart_1').getContext('2d');
chart_1.canvas.width = 600
chart_1.canvas.height = 400

var myChart_1 = new Chart(chart_1, {
    type: 'bar',
    data: {
        labels: ['London', 'Paris', 'Kiev', 'Berlin', 'Tokyo'],
        datasets: [{
            label: 'Number of deals by cities',
            data: [84, 52, 98, 75, 117],
            backgroundColor: ['#921b37c9', '#20b059c9', '#01afedc9', '#ffde00c9', '#fe6a00c9'],
            borderWidth: 2,
            hoverBorderWidth: 5
        }]
    },

    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#333',
                    fontSize: 17
                }
            }],

            xAxes: [{
                barPercentage: 0.7,
                ticks: {
                    fontColor: '#333',
                    fontStyle: 'bold',
                    fontSize: 15
                }
            }]
        },

        legend: {
            onClick: blockedLegend,
            labels: {
                boxWidth: 0,
                fontColor: '#333',
                fontStyle: 'bold',
                fontSize: 18,
            }
        }
    }
})

function blockedLegend() {
    return false
}

var chart_2 = document.getElementById('Chart_2').getContext('2d');
chart_2.canvas.width = 600
chart_2.canvas.height = 400

var myChart_2 = new Chart(chart_2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Chairs',
            data: ['156', '246', '294', '179'],
            borderColor: ['#4bc0c0'],
            fill: false,
            pointBorderColor: '#921b37c9',
            pointBorderWidth: 4
        }, {
            label: 'Tables',
            data: ['306', '106', '157', '252'],
            borderColor: ['#c0504d'],
            fill: false,
            pointBorderColor: '#921b37c9',
            pointBorderWidth: 4
        }, {
            label: 'Shelves',
            data: ['56', '306', '124', '85'],
            borderColor: ['#385499'],
            fill: false,
            pointBorderColor: '#921b37c9',
            pointBorderWidth: 4
        }]
    },

    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#333',
                    fontSize: 17
                }
            }],

            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#333',
                    fontSize: 17
                }
            }],
        },
        legend: {
            labels: {
                fontColor: '#333',
                fontSize: 17,
            }
        }
    }
})