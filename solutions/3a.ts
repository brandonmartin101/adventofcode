import { puzzleInput, puzzleDemo } from '../inputs/3.ts';
const data = puzzleInput.split('\n');

//* find position of all non-period symbols
type Symbol = { row: number; col: number; symbol: string };
let symbols: Symbol[] = [];

for (let row = 0; row < data.length; row++) {
	for (let col = 0; col < data[row].length; col++) {
		if (isNaN(parseInt(data[row][col])) && data[row][col] !== '.') {
			// console.log('symbol found', data[row][col], col);
			symbols.push({
				row: row,
				col: col,
				symbol: data[row][col],
			});
		}
	}
}

//* find numbers and their positions next to symbols
type PartNumbers = [row: number, colStart: number, colEnd: number, number: number];
let partNumbers: PartNumbers[] = [];
const addValidNumber = (row: number, col: number) => {
	// console.log(row, col, data[row][col]);
	let colStart = col;
	while (true) {
		if (data[row][colStart - 1] !== '.' && !isNaN(parseInt(data[row][colStart]))) {
			colStart--;
		} else {
			break;
		}
		if (colStart < 1) break;
	}
	let colEnd = col;
	while (true) {
		if (data[row][colEnd] !== '.' && !isNaN(parseInt(data[row][colEnd]))) {
			colEnd++;
		} else {
			break;
		}
		if (colEnd > data[row].length) break;
	}
	partNumbers.push([row, colStart, colEnd, parseInt(data[row].substring(colStart, colEnd))]);
};

for (let symbol of symbols) {
	// console.log(symbol.row, symbol.col, symbol.symbol);
	if (data[symbol.row - 1][symbol.col - 1] !== '.') addValidNumber(symbol.row - 1, symbol.col - 1);
	if (data[symbol.row - 1][symbol.col] !== '.') addValidNumber(symbol.row - 1, symbol.col);
	if (data[symbol.row - 1][symbol.col + 1] !== '.') addValidNumber(symbol.row - 1, symbol.col + 1);
	if (data[symbol.row][symbol.col - 1] !== '.') addValidNumber(symbol.row, symbol.col - 1);
	if (data[symbol.row][symbol.col + 1] !== '.') addValidNumber(symbol.row, symbol.col + 1);
	if (data[symbol.row + 1][symbol.col - 1] !== '.') addValidNumber(symbol.row + 1, symbol.col - 1);
	if (data[symbol.row + 1][symbol.col] !== '.') addValidNumber(symbol.row + 1, symbol.col);
	if (data[symbol.row + 1][symbol.col + 1] !== '.') addValidNumber(symbol.row + 1, symbol.col + 1);
}
// console.log(partNumbers);

// remove duplicates
partNumbers = partNumbers.filter((partNumber, index, self) => self.findIndex((t) => t[3] === partNumber[3]) === index);
console.log(partNumbers);

// sum the numbers (check for duplicates)
let sum = 0;
for (let partNumber of partNumbers) {
	sum += partNumber[3];
}
console.log(sum);
