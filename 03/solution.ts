const exectureCommands = (input: string[]): number => {
    //[ "mul(2,4)", "don't()", "mul(5,5)", "mul(11,8)", "do()", "mul(8,5)" ]
    let sum = 0;
    let skip: boolean | undefined = undefined;
    input.forEach((command) => {
        const [commandName, ...args] = command.split(/[(),]/);
        if (commandName === 'do') {
            skip = false;
        }
        if (commandName === "don't") {
            skip = true;
        }
        if (commandName === 'mul') {
            if (skip) {
                return;
            }
            const [a, b] = args.map(Number);
            sum += a * b;
        }
    });
    return sum;
};

export const star_1 = (input: string): number => {
    const linesOfCommands = input.split('\n');
    const regex = /mul\(\d+,\d+\)/g;
    const matches = linesOfCommands.map((line) => line.match(regex)).flat()
        .filter((match): match is string => match !== null);

    return exectureCommands(matches);
};

export const star_2 = (input: string): number => {
    const linesOfCommands = input.split('\n');
    const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
    const matches = linesOfCommands.map((line) => line.match(regex)).flat().filter((match): match is string => match !== null);
        
    return exectureCommands(matches);
};
