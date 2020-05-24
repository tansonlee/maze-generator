class Cell {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.visited = false;
		this.walls = {
			top: true,
			right: true,
			bottom: true,
			left: true
		};
	}

	show() {
		let x = this.x * this.w;
		let y = this.y * this.w;
		let w = this.w;

		stroke(31, 47, 22);
		if (this.walls.top) {
			line(x, y, x + w, y);
		}
		if (this.walls.right) {
			line(x + w, y, x + w, y + w);
		} // right
		if (this.walls.bottom) {
			line(x + w, y + w, x, y + w);
		} // bottom
		if (this.walls.left) {
			line(x, y + w, x, y);
		} // left
	}

	getNeighbor(grid) {
		let availible = [];

		if (this.y > 0) {
			let top = grid.getCell(this.x, this.y - 1);
			if (!top.visited) {
				availible.push(top);
			}
		}
		if (this.x < cols - 1) {
			let right = grid.getCell(this.x + 1, this.y);
			if (!right.visited) {
				availible.push(right);
			}
		}
		if (this.y < rows - 1) {
			let bottom = grid.getCell(this.x, this.y + 1);
			if (!bottom.visited) {
				availible.push(bottom);
			}
		}
		if (this.x > 0) {
			let left = grid.getCell(this.x - 1, this.y);
			if (!left.visited) {
				availible.push(left);
			}
		}

		if (availible.length > 0) {
			let randIndex = floor(random() * availible.length);
			return availible[randIndex];
		}
		return null;
	}

	fillSpecial(col) {
		let x = this.x * this.w;
		let y = this.y * this.w;
		let w = this.w;
		fill(col);
		noStroke();
		rect(x, y, w, w);
	}
}
