

var cv = document.getElementById("canvas");

var ctx = cv.getContext("2d");

var circle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
};
//debugger;
ctx.lineWidth = 4;
ctx.strokeStyle = "Red";
circle(100, 100, 10);
ctx.strokeStyle = "Orange";
circle(100, 100, 20);
ctx.strokeStyle = "Yellow";
circle(100, 100, 30);
ctx.strokeStyle = "Green";
circle(100, 100, 40);
ctx.strokeStyle = "Blue";
circle(100, 100, 50);
ctx.strokeStyle = "Purple";
circle(100, 100, 60);