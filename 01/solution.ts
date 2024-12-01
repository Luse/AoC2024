import { slidingWindows } from '@std/collections/sliding-windows';
import { withoutAll } from '@std/collections/without-all';
import { sumOf } from '@std/collections/sum-of';
import { zip } from "@std/collections/zip";

const parseInput = (input: string): number[] => {
    return input.split(' ').map((x) => parseInt(x.replace('\n', ''), 10))
        .filter(
            (x) => !isNaN(x),
        );
};

const compareArrays = (arr1: number[], arr2: number[]): number => {
    const zipped = zip(arr1, arr2);

    const difference = zipped.map(([a, b]) => Math.abs(a - b));
    return sumOf(difference, (x) => x);
};

const findSimilarityScores = (arr1: number[], arr2: number[]): number[] => {
    const similarityScores: number[] = [];
    for (const item of arr1) {
        const similaryScore = Math.abs(
            withoutAll(arr2, [item]).length - arr2.length,
        );
        similarityScores.push(item * similaryScore);
    }
    return similarityScores;
};

export const star_1 = (input: string): number => {
    const lineOne: number[] = [];
    const lineTwo: number[] = [];
    for (const line of input.split('\n')) {
        lineOne.push(parseInput(line)[0]);
        lineTwo.push(parseInput(line)[1]);
    }
    const sortedLineOne = lineOne.sort((a, b) => a - b);
    const sortedLineTwo = lineTwo.sort((a, b) => a - b);

    return compareArrays(sortedLineOne, sortedLineTwo);
};

export const star_2 = (input: string): number => {
    const lineOne: number[] = [];
    const lineTwo: number[] = [];
    for (const line of input.split('\n')) {
        lineOne.push(parseInput(line)[0]);
        lineTwo.push(parseInput(line)[1]);
    }

    return sumOf(findSimilarityScores(lineOne, lineTwo), (x) => x);
};
