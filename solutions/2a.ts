import { puzzleInput, puzzleDemo } from '../inputs/2.ts';
const data = puzzleDemo.split('\n');
const gamesWithSteps = data.map((d) => d.split(':'));
const stepsOnly = gamesWithSteps.map((d) => d[1].split(';'));

// console.log(data);
// console.log(gamesWithSteps);
// console.log(stepsOnly);

const available = {
	red: 12,
	green: 13,
	blue: 14,
};

gamesWithSteps.forEach((game) => {
	console.log(game);
	const draws = game[1].split(';');
	console.log(draws);
	for (let draw of draws) {
		console.log(draw);
	}
});
