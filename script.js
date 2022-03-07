const tela = document.getElementById("tela");
const context = tela.getContext("2d");



let circulo = {
	x: 306,
	y: 210,
	raio: 100,

	inicio: 0,
	fim: 0,
}

function drawCircle(circle) {
	context.beginPath();
	context.rect(0, 0, 500, 500);
	context.fillStyle = "brown";
	context.fill();


	context.beginPath();
	context.strokeStyle = "salmon";
	context.fillStyle = "orange";

	context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);

	context.lineWidth = 20;
	context.fill();
	context.stroke();
}

setInterval(function(){
	if (circulo.fim < 2 * Math.PI) {
		circulo.fim += 0.3;
		circulo.x += -5;
	}

	drawCircle(circulo);

}, 50);