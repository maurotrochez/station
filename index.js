$(document).ready(function () {
    $.get("http://localhost:3000/show",
        function (data, status) {
            //alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            drawTable(data);
            $('#MeasuresTable').dataTable();
        });
});


function drawRow(rowData) {
    //alert(rowData);
    var row = $("<tr />");
    //var variable = (rowData.variable == "5814bd3dbbfe7fad47a1bed1") ? "Temperatura" : ((rowData.variable == "5814bd82bbfe7fad47a1bed2") ? "Humedad" : "");
    var variable = (rowData.variable == "58182650329623bff0cd8e85") ? "Temperatura" : ((rowData.variable == "5818265e329623bff0cd8e86") ? "Humedad" : "");
    $("#MeasuresTable").append(row);
    row.append($("<td>" + rowData.date + "</td>"));
    row.append($("<td>" + variable + "</td>"));
    row.append($("<td>" + rowData.val + "</td>"));
}

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}
