$(function() {
    $("#go").click(clickHandler);
    canvas = document.getElementById("parabolaCanvas");
    ctx = canvas.getContext("2d");
    offsetX = canvas.width / 2;
    offsetY = canvas.height / 2;
    minX = -offsetX;
    maxX = offsetX;
});

var canvas;
var ctx;
var minX;
var maxX;
var offsetX;
var offsetY;


function clickHandler() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = minX; i < maxX; i++) {
        $.ajax({
            url: "/Home/ReturnY",
            data: {
                x: i,
                a: $("#a").val(),
                b: $("#b").val(),
                c: $("#c").val(),
            },
            success: drawPoint
        });
    }
}

function drawPoint(data) {
  //  alert(data);
    var x = offsetX + data[0];
    var y = offsetY + data[1];
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(x, y, 3, 3);
}


