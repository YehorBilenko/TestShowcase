var c = document.getElementById("canvas");
var cursor = document.getElementById("cursor");
var ctx = c.getContext("2d");

function resize() {
  var box = c.getBoundingClientRect();
  c.width = box.width;
  c.height = box.height;
}
var w = window.innerWidth;
var h = window.innerHeight;

var light = {
  x: w / 2,
  y: h / 2
}

var flyingObjectColor = "#EDF1F5"
var shadowColor = "#2C2B2B"
var lightColorStep0 = "#FFBF27"
var lightColorStep1 = "#FFBF27"

function drawLight() {
  ctx.beginPath();
  ctx.arc(light.x, light.y, 550, 0, 2 * Math.PI);
  var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
  gradient.addColorStop(0, lightColorStep0);
  gradient.addColorStop(1, lightColorStep1);
  ctx.fillStyle = gradient;
  ctx.fill();
}

function Box() {
  this.half_size = 20;

  this.x = Math.floor((Math.random() * c.width) + 1);
  this.y = Math.floor((Math.random() * c.height) + 1);
  this.r = Math.random() * Math.PI;

  this.shadow_length = 2000;

  this.points = Math.floor((Math.random() * 6) + 5);

  this.color = flyingObjectColor;
  this.getDots = function () {

  var full = (Math.PI * 4) / this.points;

  var points = [];

  for (var i = 0; i < this.points; i++) {
    points.push({
      x: this.x + this.half_size * Math.sin(this.r + full * i + 1),
      y: this.y + this.half_size * Math.cos(this.r + full * i + 1)
    });
  };

    return points;
  }

  this.rotate = function () {
    var speed = (30 - this.half_size) / 20;
    this.r += speed * 0.002;

    this.x += speed;
    this.y += speed;
  }
  this.draw = function () {
    var dots = this.getDots();

    ctx.beginPath();
    ctx.moveTo(dots[0].x, dots[0].y);
    for (var i = 1; i < dots.length; i++) {
      ctx.lineTo(dots[i].x, dots[i].y);
    };

    ctx.fillStyle = this.color;
    ctx.fill();

    if (this.y - this.half_size > c.height) {
      this.y -= c.height + 100;
    }
    if (this.x - this.half_size > c.width) {
      this.x -= c.width + 100;
    }
  }

  this.drawShadow = function () {
    var dots = this.getDots();
    var angles = [];
    var points = [];

    for (dot in dots) {
      var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
      var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
      var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
      angles.push(angle);
      points.push({
        endX: endX,
        endY: endY,
        startX: dots[dot].x,
        startY: dots[dot].y
      });
    };

    for (var i = points.length - 1; i >= 0; i--) {
      var n = i == this.points - 1 ? 0 : i + 1;
      ctx.beginPath();
      ctx.moveTo(points[i].startX, points[i].startY);
      ctx.lineTo(points[n].startX, points[n].startY);
      ctx.lineTo(points[n].endX, points[n].endY);
      ctx.lineTo(points[i].endX, points[i].endY);
      ctx.fillStyle = shadowColor;
      ctx.fill();
    };
  }
}

var boxes = [];
var lightPositionLerp = 2
var lastTime = Date.now();
var lightNewPos = {
  x: w / 2,
  y: h / 2
}

function lerp(start, end, t) {
  t = Math.min(t, 1)
  return start * (1 - t) + end * t;
}

function draw() {

  var dt = (Date.now() - lastTime) / 1000
  lastTime = Date.now()
  light.x = lerp(light.x, lightNewPos.x, dt * lightPositionLerp)
  light.y = lerp(light.y, lightNewPos.y, dt * lightPositionLerp)

  ctx.clearRect(0, 0, c.width, c.height);
  drawLight();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].rotate();
    boxes[i].drawShadow();
  };
  for (var i = 0; i < boxes.length; i++) {
    collisionDetection(i)
    boxes[i].draw();
  };
  requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 14) {
  boxes.push(new Box());
}

window.onresize = resize;

cursor.onmousemove = function (e) {
  lightNewPos.x = e.x;
  lightNewPos.y = e.y;
}

function collisionDetection(b) {
  for (var i = boxes.length - 1; i >= 0; i--) {
    if (i != b) {
      var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
      var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
      var d = Math.sqrt(dx * dx + dy * dy);
      if (d < boxes[b].half_size + boxes[i].half_size) {
        boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size -= 1 : 1;
        boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size -= 1 : 1;
      }
    }
  }
}
