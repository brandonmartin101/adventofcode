import { puzzleInput, puzzleDemo } from './inputs/2.ts';
// const data = puzzleDemo.split('\n');
const data = puzzleInput.split('\n');
const games = data.map((d) => d.split(':'));

let sumOfPowers = 0;
games.forEach((game) => {
	const draws = game[1].split(';');
	let maximums = {
		red: 0,
		green: 0,
		blue: 0,
	};
	for (let draw of draws) {
		const colorGroup = draw.split(',');
		for (let color of colorGroup) {
			const colorNumber = parseInt(color);
			const colorName = color.replace(/\d+/g, '').trim();
			maximums[colorName] = Math.max(maximums[colorName], colorNumber);
		}
	}
	const sumOfGame = maximums.red * maximums.green * maximums.blue;
	sumOfPowers += sumOfGame;
});

console.log(sumOfPowers);
