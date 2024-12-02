export const star_1 = (input: string): number => {
    const parsedInput = input.split('\n').map((x) =>
        x.split(' ').map((y) => parseInt(y))
    );
    const { successfullReports } = parseReactorReports(parsedInput);
    return successfullReports.length;
};

export const star_2 = (input: string): number => {
    const parsedInput = input.split('\n').map((x) =>
        x.split(' ').map((y) => parseInt(y))
    );
    const { successfullReports, failedReports } = parseReactorReports(
        parsedInput,
    );
    const { successfullReports: secondRunReports } = parseReactorReports(
        failedReports,
    );
    return secondRunReports.length + successfullReports.length;
};

function parseReactorReports(
    input: number[][],
): { successfullReports: number[][]; failedReports: number[][] } {
    const successfullReports: number[][] = [];
    const unsuccessfulReports: number[][] = [];

    input.forEach((line) => {
        const report: number[] = [];
        const direction = line[0] < line[1] ? 1 : -1;
        findAnomalies(line, report, direction);
        if (
            report.length === line.length
        ) {
            successfullReports.push(report);
        } else if(report.length === (line.length -1)) {
            unsuccessfulReports.push(report);
        }
    });
    return {
        successfullReports: successfullReports,
        failedReports: unsuccessfulReports,
    };
}

function findAnomalies(x: number[], safeReport: number[], direction: number) {
    x.forEach((num, numIndex) => {
        const isSafe = determineSafe(num, direction, x[numIndex + 1])
        if(isSafe){
            safeReport.push(num);
        }
    });
}

const determineSafe = (currentNumber: number, direction: number, nextNumber?: number): boolean => {
    if (!nextNumber) {
        return true
    }

    if (direction === 1 && currentNumber > nextNumber) {
        return false
    }

    if (direction === -1 && currentNumber < nextNumber) {
        return false
    }

    if (currentNumber === nextNumber) {
        return false;
    }

    if (Math.abs(currentNumber - nextNumber) <= 3) {
        return true
    }

    return false
}