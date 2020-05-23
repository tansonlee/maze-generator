const w = 20;
let rows;
let cols;

let grid = [];

function setup() {
	createCanvas(400, 400);
	rows = width / w;
	cols = height / w;

	for (let y = 0; y < cols; y++) {
		for (let x = 0; x < rows; x++) {
			grid.push(new Cell(x, y));
		}
	}
}

function draw() {
	background(51);
}
