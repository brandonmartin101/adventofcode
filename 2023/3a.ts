import { puzzleInput, puzzleDemo } from './inputs/3.ts';
// const data = puzzleDemo.split('\n');
const data = puzzleInput.split('\n');

const getValidNumbers = () => {
	let numbersList: number[] = [];
	let numbersSum = 0;
	let partNumberVerified = false;
	let numberTemp = '';
	for (let row = 0; row < data.length; row++) {
		for (let col = 0; col < data[row].length; col++) {
			if (!isNaN(parseInt(data[row][col]))) {
				numberTemp += data[row][col];
				if (!partNumberVerified) {
					if (
						isSymbol(data[row - 1][col]) ||
						isSymbol(data[row + 1][col]) ||
						isSymbol(data[row][col - 1]) ||
						isSymbol(data[row][col + 1]) ||
						isSymbol(data[row - 1][col - 1]) ||
						isSymbol(data[row - 1][col + 1]) ||
						isSymbol(data[row + 1][col - 1]) ||
						isSymbol(data[row + 1][col + 1])
					) {
						partNumberVerified = true;
					}
				}
			}
			if (isNaN(parseInt(data[row][col])) && numberTemp !== '') {
				if (partNumberVerified) {
					console.log(numberTemp, 'valid');
					numbersList.push(parseInt(numberTemp));
					numbersSum += parseInt(numberTemp);
				} else {
					console.log(numberTemp, 'not valid');
				}
				numberTemp = '';
				partNumberVerified = false;
			}
		}
	}
	return [numbersList, numbersSum];
};

const isSymbol = (char: string) => {
	if (char === undefined) return false;
	return !char.match(/[0-9.]/);
};

console.log(getValidNumbers());
