const w = 50;
let rows;
let cols;
let grid;
let visited = 1;
let maxVisited;
let current;
let stack = [];
let listVisited = [];

function setup() {
	createCanvas(800, 600);
	rows = floor(height / w);
	cols = floor(width / w);
	maxVisited = rows * cols;

	grid = new Grid(rows, cols);
	grid.generate();

	current = grid.getCell(0, 0);
	stack.push(current);
	current.visited = true;
	listVisited.push(current);
	frameRate(60);
}

function draw() {
	background(57, 91, 80);

	let next = current.getNeighbor(grid);
	if (next) {
		breakBarrier(current, next);
		current = next;
		stack.push(current);
		current.visited = true;
		listVisited.push(current);
		visited++;
	} else {
		next = stack.pop();
		current = next;
	}

	// colour the visited cells
	for (let cell of listVisited) {
		cell.fillSpecial(color(197, 209, 235));
	}

	// colour the current cell
	current.fillSpecial(color(255, 127, 80));
	grid.show();

	// end when maze is generated and current returns to (0, 0)
	if (visited == maxVisited) {
		current.fillSpecial(color(255, 127, 80));
		grid.show();
		if (current == grid.getCell(0, 0)) {
			noLoop();
			console.log("FINSHED!!");
			fill(255, 0, 0);
			noStroke();
			textSize(12);
			textStyle(BOLD);
			textAlign(CENTER, CENTER);
			text("START", w / 2, w / 2);
			text("FINISH", width - w / 2, height - w / 2);
		}
	}
}

function breakBarrier(c1, c2) {
	xDiff = c1.x - c2.x;
	yDiff = c1.y - c2.y;
	if (yDiff == 1) {
		// c1 below c2
		c1.walls.top = false;
		c2.walls.bottom = false;
	} else if (yDiff == -1) {
		// c2 below c1
		c2.walls.top = false;
		c1.walls.bottom = false;
	} else if (xDiff == 1) {
		//c1 to the right of c2
		c1.walls.left = false;
		c2.walls.right = false;
	} else if (xDiff == -1) {
		//c2 to the right of c1
		c2.walls.left = false;
		c1.walls.right = false;
	}
}
