// functions to support the parabola drawing

// jquery document.ready function.

$(function() {
    $("#go").click(clickHandler);
    canvas = document.getElementById("parabolaCanvas");
    ctx = canvas.getContext("2d");
    offsetX = canvas.width / 2; // Make conceptual 0,0 the center
    offsetY = canvas.height / 2;
    minX = -150; // -offsetX;
    maxX = 150; // offsetX;
    drawLine(0, offsetY, canvas.width, offsetY);
    drawLine(offsetX, 0, offsetX, canvas.height);	
});

// global variables
var canvas;
var ctx;
var minX;
var maxX;
var offsetX;
var offsetY;

// function to start the parabola drawing on the button click
function clickHandler() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(0, offsetY, canvas.width, offsetY);
    drawLine(offsetX, 0, offsetX, canvas.height);		
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

// draw grid lines
function drawLine(startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.fillStyle = '#0000FF';
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

// draw parabola points from an [x,y] array
function drawPoint(data) {
    var x = offsetX + data[0];
    var y = offsetY - data[1];
    // only draw the point if it is on the screen.
    if (y >= 0 && y < (offsetY * 2)) {
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(x, y, 3, 3);
    }
}
