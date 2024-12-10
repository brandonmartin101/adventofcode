import { puzzleInput, puzzleDemo } from './inputs/2.ts';
// const data = puzzleDemo.split('\n');
const data = puzzleInput.split('\n');
const gamesWithSteps = data.map((d) => d.split(':'));

const available = {
	red: 12,
	green: 13,
	blue: 14,
};

let sumOfIds = 0;
gamesWithSteps.forEach((game) => {
	const matchResult = game[0].match(/\d+/) ?? 0;
	const id = parseInt(matchResult[0]);
	const draws = game[1].split(';');
	let gameValid = true;
	for (let draw of draws) {
		const colorGroup = draw.split(',');
		for (let color of colorGroup) {
			const colorNumber = parseInt(color);
			const colorName = color.replace(/\d+/g, '').trim();
			if (colorNumber > available[colorName]) gameValid = false;
		}
	}
	if (gameValid) sumOfIds += id;
});

console.log(sumOfIds);
