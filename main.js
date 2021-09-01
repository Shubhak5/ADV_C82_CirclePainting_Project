canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastPosX, lastPosY;

color = "black";
lineWidth = 2;
radius = 10;
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    color = document.getElementById("inptColor").value;
    lineWidth = document.getElementById("inptLineWidth").value;
    radius = document.getElementById("inptRadius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e) {
    currentPosX = e.clientX - canvas.offsetLeft;
    currentPosY = e.clientY - canvas.offsetTop;

    if (mouseEvent = "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.arc(currentPosX, currentPosY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}