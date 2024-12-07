const appendOperator = (
	a: string,
	duration: number,
	possibleFunctions: string[],
	lista: string[],
) => {
	const _duration = duration - 1;
	if (_duration <= 0) {
		lista.push(a);
		return lista;
	}
	possibleFunctions.forEach((func) => {
		appendOperator(a + func, _duration, possibleFunctions, lista);
	});
};

const testCalculation = (
	sum: number,
	calculation: string[],
): boolean => {
	const possibleFunctions = ['+', '*'];
	const lista: string[] = [];
	let flag = false;
	const neccecaryFunctions = calculation.length - 1;
	appendOperator('', calculation.length, possibleFunctions, lista);
	lista.forEach((calc) => {
		const funcs = calc.split('');
		let finalCalc = '';
		calculation.forEach((num, index) => {
			finalCalc += num;
			if (index < neccecaryFunctions) {
				finalCalc += funcs[index];
			}
			
		});
		const leftToRightEval = funcs.reduce((acc, func, index) => {
			if (func === '+') {
				return acc + parseInt(calculation[index + 1]);
			} else if (func === '*') {
				return acc * parseInt(calculation[index + 1]);
			}
			return acc;
		}, parseInt(calculation[0]));
		if (leftToRightEval === sum) {
			flag = true;
		}
	});

	return flag;
};

export const star_1 = (input: string): number => {
	const parsedInput = input.split('\n').map((line) => {
		const [sum, calculation] = line.split(': ').map((num) =>
			num.split(' ').map((num) => parseInt(num))
		);
		return { sum: sum[0], calculation };
	});
	let goodResults = 0;
	parsedInput.forEach((line) => {
		const a = line.calculation.map((x) => x.toString());
		const result = testCalculation(line.sum, a);
		if (result) {
			console.log('line', line);
			goodResults += line.sum;
		}
	});
	console.log('goodResults', goodResults);
	return goodResults;
};

export const star_2 = (input: string): number => {
	return 2;
};
