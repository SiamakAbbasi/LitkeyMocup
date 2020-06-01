
/****************************************
   *       Basic Table                   *
   ****************************************/
$('#zero_config').DataTable();
/****************************************
   *       Basic Table                   *
   ****************************************/
var $body = $("body");
$(document).ready(function myfunction() {
    var data = {
        labels: ["Age", "Frequence", "Count", "Error Count"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [45, 40, 35, 40]
    },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [42, 38, 29, 35]
    }
        ]
    };
    var data1 = {
        labels: ["Age", "Frequence", "Count", "Error Count"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [45, 40, 35, 40]
    },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [42, 38, 29, 35]
            }
        ]
    };
    var options = {
        tooltips: {
            mode: 'label'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    var ctx = document.getElementById('myChart');
    var ctx1 = document.getElementById('myChart1');
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
 
     var myRadarChart = new Chart(ctx1, {
        type: 'radar',
        data: data1,
        options: options
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