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
    const safeReports: number[][] = [];
    const unsuccessfulReports: number[][] = [];

    input.forEach((x) => {
        const report: number[] = [];
        const direction = x[0] < x[1] ? 1 : -1;
        findAnomalies(x, report, direction);
        if (
            report.length === x.length
        ) {
            safeReports.push(report);
        } else {
            unsuccessfulReports.push(report);
        }
    });
    return {
        successfullReports: safeReports,
        failedReports: unsuccessfulReports,
    };
}

function findAnomalies(x: number[], safeReport: number[], direction: number) {
    x.forEach((num, numIndex) => {
        if (numIndex === x.length - 1) {
            safeReport.push(num);
            return;
        }

        if (direction === 1 && num > x[numIndex + 1]) {
            return;
        }
        if (direction === -1 && num < x[numIndex + 1]) {
            return;
        }

        if (num === x[numIndex + 1]) {
            return;
        }

        if (Math.abs(num - x[numIndex + 1]) <= 3) {
            safeReport.push(num);
            return;
        }
    });
}
