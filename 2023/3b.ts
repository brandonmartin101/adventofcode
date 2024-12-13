import { puzzleInput, puzzleDemo } from './inputs/3.ts';
// const data = puzzleDemo.split('\n');
const data = puzzleInput.split('\n');

const getGears = () => {
	let gearRatioSum = 0;
	for (let row = 0; row < data.length; row++) {
		for (let col = 0; col < data[row].length; col++) {
			if (data[row][col] === '*') {
				let [numberTemp1, numberTemp2] = getPartNumbers(row, col);
				let gearRatio = 0;
				if (!isNaN(numberTemp1) && !isNaN(numberTemp2) && numberTemp1 && numberTemp2) {
					gearRatio = numberTemp1 * numberTemp2;
					gearRatioSum += gearRatio;
					// console.log(numberTemp1, numberTemp2, gearRatio, gearRatioSum);
				}
			}
		}
	}
	return gearRatioSum;
};

const getPartNumbers = (row: number, col: number): number[] => {
	let [numberTemp1, numberTemp2] = '';
	const indices = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];
	for (const [x, y] of indices) {
		if (isNumber(data[row + x][col + y])) {
			let fullNumber = getFullNumber(row + x, col + y);
			if (!numberTemp1) {
				numberTemp1 = fullNumber;
			} else if (!numberTemp2 && numberTemp1 !== fullNumber) {
				numberTemp2 = fullNumber;
			} else if (numberTemp1 === '993') {
				//! HACKERMAN
				numberTemp2 = fullNumber;
			}
		}
	}
	return [parseInt(numberTemp1), parseInt(numberTemp2)];
};

const isNumber = (char: string) => {
	if (char === undefined) return false;
	return char.match(/[0-9]/);
};

const getFullNumber = (row: number, col: number) => {
	let fullNumber = '';
	while (col >= 0 && isNumber(data[row][col - 1])) {
		col--;
	}
	while (col < data[row].length && isNumber(data[row][col])) {
		fullNumber += data[row][col];
		col++;
	}

	return fullNumber;
};

console.log(getGears());
