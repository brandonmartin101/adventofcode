import { puzzleInput, puzzleDemo } from './inputs/1.ts';
const data = puzzleInput.split('\n');

let cTotal: number = 0;
data.forEach((dRaw) => {
	let dParsed1 = dRaw;
	while (true) {
		const words: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		if (dParsed1.search(/one|two|three|four|five|six|seven|eight|nine/g) === -1) break;

		let firstWord: string = '';
		let minIndex: number = dParsed1.length;

		for (const word of words) {
			const index: number = dParsed1.indexOf(word);
			if (index !== -1 && index < minIndex) {
				minIndex = index;
				firstWord = word;
			}
		}
		dParsed1 = dParsed1.replace(firstWord, (words.indexOf(firstWord) + 1).toString());
	}
	let dParsed2 = dParsed1.replace(/[^\d]/g, '');
	if (dParsed2.length > 0) cTotal += parseInt(dParsed2[0] + dParsed2[dParsed2.length - 1]);
});
console.log(cTotal);
