class Grid {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.cells = [];
	}

	generate() {
		for (let x = 0; x < this.cols; x++) {
			let col = [];
			for (let y = 0; y < this.cols; y++) {
				col.push(new Cell(x, y, w));
			}
			this.cells.push(col);
		}
	}

	show() {
		for (let col of this.cells) {
			for (let cell of col) {
				cell.show();
			}
		}
	}

	getCell(x, y) {
		return this.cells[x][y];
	}
}
