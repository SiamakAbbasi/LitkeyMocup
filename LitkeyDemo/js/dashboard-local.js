
/****************************************
   *       Basic Table                   *
   ****************************************/
$('#zero_config').DataTable();
/****************************************
   *       Basic Table                   *
   ****************************************/
var $body = $("body");
$(document).ready(function myfunction() {

    var ctx1 = document.getElementById('myChart1');
    var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Word1', 'Word2','Word3','Word4','Word5'],
            datasets: [{
                label: 'Count of errors',
                data: [10,8,4,2,1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'

                ],

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Errorlevel1", "Errorlevel2", "error Level3", "Error level4"],
            datasets: [{
                label: '# of Nationality',
                data: [12, 9, 3, 8, 2],
                backgroundColor: [
                    'rgba(255, 99, 132 )',
                    'rgba(54, 162, 235 )',
                    'rgba(255, 206, 86 )',
                    'rgba(75, 192, 192 )',
                    'rgba(126, 255, 60 )',
                    'rgba(153, 102, 25 )'

                ],

            }]
        }

    });

    var ctx1select = document.getElementById('select-myChart1');
    var myChart1select = new Chart(ctx1select, {
        type: 'bar',
        data: {
            labels: ['German', 'Other Country'],
            datasets: [{
                label: '# of Nationality',
                data: [42, 51 ,34,23,11,12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'

                ],

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctxselect = document.getElementById('select-myChart');
    var myChartselect = new Chart(ctxselect, {
        type: 'doughnut',
        data: {
            labels: ["7 ", "8-9 ", "10-11", "11-13"],
            datasets: [{
                label: '# of Nationality',
                data: [12, 9, 3, 8, 2],
                backgroundColor: [
                    'rgba(255, 99, 132 )',
                    'rgba(54, 162, 235 )',
                    'rgba(255, 206, 86 )',
                    'rgba(75, 192, 192 )',
                    'rgba(126, 255, 60 )',
                    'rgba(153, 102, 25 )'

                ],

            }]
        }

    });

    var MONTHS = ['text1-jan', 'text2-Feb', 'text3.Mar', 'text4.Apr', 'text5.May', 'text6.June', 'text7.July'];

    new Chart(document.getElementById("select-line-chart"), {
        type: 'line',
        data: {
            labels: MONTHS,
            datasets: [{
                data: [35, 15, 10, 16, 17, 31, 11, 15, 12, 24],
                label: "Other Country",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [18, 15, 21, 17, 17, 21, 18, 45, 12, 14],
                label: "German",
                borderColor: "#ff6384",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Progress of Frequency of errors'
            }
        }
    });
    new Chart(document.getElementById("select-errareachart"), {
        type: 'horizontalBar',
        data: {
            labels: MONTHS,
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#3ecacd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8eaea2"],
                    data: [8, 15, 10, 16, 17, 31, 11, 15, 12, 24],

                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Chart base on errors of students'
            }
        }
    });


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: MONTHS,
            datasets: [  {
                data: [107, 104, 103, 89, 95, 78, 89, 56, 41, 46],
                label: "num .Errors",
                borderColor: "#ff6384",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Progress of Frequency of this word in all text'
            }
        }
    });
    new Chart(document.getElementById("errareachart"), {
        type: 'horizontalBar',
        data: {
            labels: MONTHS,
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ff6384"],
                    data: [86, 91, 106, 106, 107, 91, 85, 85, 52, 124],

                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Chart base on age of students'
            }
        }
    });
});

function myfunction() {
}
$(".doexpand").on('click', function myfunction() {
    var $this = $(this).closest('td').next();
    var $table = $('.tbldetails').clone();
    if (!$this.hasClass('expand')) {

        $this.append($table);
    } else {
        var $tbl = $this.find('.tbldetails');
        $tbl.toggleClass('hide');
        $tbl.remove();
    }
    $this.toggleClass('expand');

    $table.toggleClass('hide');

    //$('.expand::after').toggle();
})

$("#basetype").on('change', function () {
    if (this.value == 1) {
        $("#pnltypeshow").fadeOut();
        $("#pnltokenshow").fadeIn();
    } else {
        $("#pnltokenshow").fadeOut();
        $("#pnltypeshow").fadeIn();
    }
    //$('.scale-changeble').toggleClass('col-md-6')
});

$(document).on({
    ajaxStart: function () { $body.addClass("loading"); },
    ajaxStop: function () { $body.removeClass("loading"); }
});