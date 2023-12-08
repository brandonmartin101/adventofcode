import { puzzleInput, puzzleDemo } from '../inputs/1.ts';
const data = puzzleInput.split('\n');

let cTotal: number = 0;
data.forEach((d) => {
	let dParsed = d.replace(/[^\d]/g, '');
	if (dParsed.length > 0) cTotal += parseInt(dParsed[0] + dParsed[dParsed.length - 1]);
});
console.log(cTotal);
