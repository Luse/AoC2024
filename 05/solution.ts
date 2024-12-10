const pagesInCorrectOrder = (
	pageOrderings: number[][],
	pageNumbers: number[],
): number[] => {
	
	return [];
};

export const star_1 = (input: string): number => {
	const separator = input.split('\n\n');
	const pageOrderings = separator[0].split('\n').map((x) => x.split(',')).map(
		(x) => x.map((y) => y.split('|')).map((y) => y.map((z) => parseInt(z))).flat()
	);
	const pageNumbers = separator[1].split('\n').map((x) => x.split(',')).map(
		(x) => x.map((y) => parseInt(y))
	);

	console.log(pageOrderings);
	console.log(pageNumbers);
	pageNumbers.forEach((pages) => {
		const correctPages = pagesInCorrectOrder(pageOrderings, pages);
		console.log(correctPages);
	});
	return 1;
};

export const star_2 = (input: string): number => {
	return 2;
};
