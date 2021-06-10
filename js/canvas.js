var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
	var box = c.getBoundingClientRect();
	c.width = box.width;
	c.height = box.height;
}

var light = {
	x: 160,
	y: 200
}//точка появления лампочки при загрузек страници 

var colors = ["#ea970b", "#1fac9b", "#d61c89"]; //масив с цветами 
//цвет летающей хуйни 

function drawLight() {
	ctx.beginPath();

    // хрень для рисования света вокруг курсора на мєто не нужно 
    ctx.arc(light.x, light.y, 800, 0, 2 * Math.PI); //первое значение это радиус градиента вокруг второе значение хуй пойми что как и
	var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
	gradient.addColorStop(0, "#3b5e98"); //градиент цвет центра 
	gradient.addColorStop(1, "#3b5e98"); //градиент цвет внешний
	ctx.fillStyle = gradient;
	ctx.fill();
    
    // хрень для рисования "лампочки" в центре нам єто не нодо
	//ctx.beginPath();
	//ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
	//gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
	//gradient.addColorStop(0, "#00FFFF"); //цвет курсора лампочки ппрямо под курсором 
	//gradient.addColorStop(1, "#D61C89"); //цвет курсора внешний вокруг курсора 
	//ctx.fillStyle = gradient;
	//ctx.fill();
}

function Box() {

	this.half_size = 20;

	this.x = Math.floor((Math.random() * c.width) + 1);
	this.y = Math.floor((Math.random() * c.height) + 1);
	this.r = Math.random() * Math.PI;

	this.shadow_length = 2000; //размер тени что логично 

	this.points = Math.floor((Math.random() * 6) + 5);

	//this.color = colors[Math.floor((Math.random() * colors.length))]; рандомные цвета хуйни 
    this.color = colors[2]; //определенній цвет 
	this.getDots = function() {

		var full = (Math.PI * 4) / this.points;// от изменения значения менятся форма хуйни  

		var points = [];

		for (var i = 0; i < this.points; i++) {
			points.push({
				x: this.x + this.half_size * Math.sin(this.r + full * i+1),
				y: this.y + this.half_size * Math.cos(this.r + full * i+1)
			});
		};

		return points;

	}
	this.rotate = function() {
        
		var speed = (30 - this.half_size) / 20; // скорость летающей хуйни // от числа в начале отнимаем половину размера хуйни а потом делим на число, 
        //в зависмости от -/+ получаемого числа меняется напрвление   

		this.r += speed * 0.002; //скорость вращения 
        
		this.x += speed; //направление движения 
		this.y += speed;
	}
	this.draw = function() {
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
	this.drawShadow = function() {
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
			var n = i == this.points-1 ? 0 : i + 1;
			ctx.beginPath();
			ctx.moveTo(points[i].startX, points[i].startY);
			ctx.lineTo(points[n].startX, points[n].startY);
			ctx.lineTo(points[n].endX, points[n].endY);
			ctx.lineTo(points[i].endX, points[i].endY);
			ctx.fillStyle = "#BE163E"; //цвет тени 
			ctx.fill();
		};
	}
}

var boxes = [];

function draw() {
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
c.onmousemove = function(e) {
	// light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
	// light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
	light.x = e.layerX;
	light.y = e.layerY;
}


function collisionDetection(b){
	for (var i = boxes.length - 1; i >= 0; i--) {
		if(i != b){	
			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
				boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
				boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}