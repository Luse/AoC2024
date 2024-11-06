import { star_1, star_2 } from './solution.ts';
import { readInput } from './utils.ts';

console.log('⭐ Solution to the first star ⭐: ', star_1(await readInput('input.txt')));
console.log('⭐⭐ Solution to the second star ⭐⭐: ', star_2(await readInput('input.txt')));