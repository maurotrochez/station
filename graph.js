window.onload = function () {
    console.log('asdf');
    var dataPointsT = [];
    var dataPointsH = [];
    $.getJSON("http://localhost:3000/show", function (data) {
        $.each(data, function (key, value) {
            console.log(value.date);
            if (value.variable === "58182650329623bff0cd8e85" && new Date(value.date).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)) {
                console.log(value.date);
                dataPointsT.push({ x: new Date(value.date), y: parseInt(value.val) });
            }
            else if (value.variable === "5818265e329623bff0cd8e86" && new Date(value.date).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)) {
                console.log(value.date);
                dataPointsH.push({ x: new Date(value.date), y: parseInt(value.val) });
            }

        });
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Grafica de temperatura y humedad"
            },
            axisY: {
                title: "Temperatura"
            },
            axisX: {
                title: "Hora",
                gridThickness: 2,
                interval: 4,
                intervalType: "minute",
                valueFormatString: "hh TT",
                labelAngle: 0
            },
            data: [{
                type: "line",
                dataPoints: dataPointsT,
                showInLegend: true,
                legendText: "Temperatura",
            },
            {
                type: "line",
                dataPoints: dataPointsH,
                showInLegend: true,
                legendText: "Humedad",
            }
            ]
        });
        chart.render();
    });
}