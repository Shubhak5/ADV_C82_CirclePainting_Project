canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width;
var lastPosX, lastPosY;
color = "black";
lineWidth = 2;
radius = 10;

newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (screen.width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("inptColor").value;
    lineWidth = document.getElementById("inptLineWidth").value;
    radius = document.getElementById("inptRadius").value;

    lastPosX = e.touches[0].clientX - canvas.offsetLeft;
    lastPosY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchMove);

function my_touchMove(e) {
    currentPosX = e.touches[0].clientX - canvas.offsetLeft;
    currentPosY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.arc(currentPosX, currentPosY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    lastPosX = currentPosX;
    lastPosY = currentPosY;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}