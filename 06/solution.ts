const drawMap = (
    map: string[][],
    currentGuardPosition: GuardPosition,
    obstacles: { x: number; y: number }[],
    visited: { x: number; y: number }[] = [],
): void => {
    const mapCopy = map.map((line) => line.slice());
    mapCopy[currentGuardPosition.y][currentGuardPosition.x] =
        currentGuardPosition.direction;
    obstacles.forEach((obstacle) => {
        mapCopy[obstacle.y][obstacle.x] = '#';
    });
    visited.forEach((pos) => {
        mapCopy[pos.y][pos.x] = '\x1b[33mX\x1b[0m'; // Yellow color for great contrast against gray
    });
    mapCopy.forEach((line) => {
        console.log(line.join(''));
    });
};

type Guard = 'v' | '^' | '<' | '>';
type GuardPosition = { x: number; y: number; direction: Guard };

const rotateGuard = (guard: Guard): Guard => {
    switch (guard) {
        case 'v':
            return '<';
        case '^':
            return '>';
        case '<':
            return '^';
        case '>':
            return 'v';
    }
};

const guardToDirection = (guard: Guard): { dx: number; dy: number } => {
    switch (guard) {
        case 'v':
            return { dx: 0, dy: 1 };
        case '^':
            return { dx: 0, dy: -1 };
        case '<':
            return { dx: -1, dy: 0 };
        case '>':
            return { dx: 1, dy: 0 };
    }
};

const predictGuardMovement = (
    currentGuardPosition: GuardPosition,
    obstacles: { x: number; y: number }[],
): GuardPosition => {
    const direction = guardToDirection(currentGuardPosition.direction);
    const nextPosition = {
        x: currentGuardPosition.x + direction.dx,
        y: currentGuardPosition.y + direction.dy,
    };
    if (
        obstacles.some((o) => o.x === nextPosition.x && o.y === nextPosition.y)
    ) {
        const newDirection = guardToDirection(
            rotateGuard(currentGuardPosition.direction),
        );
        return {
            x: currentGuardPosition.x + newDirection.dx,
            y: currentGuardPosition.y + newDirection.dy,
            direction: rotateGuard(currentGuardPosition.direction),
        };
    } else {
        return {
            x: nextPosition.x,
            y: nextPosition.y,
            direction: currentGuardPosition.direction,
        };
    }
};

export const star_1 = (input: string): number => {
    console.profile();
    const parsedInput = input.split('\n');
    const mapProperties = {
        width: parsedInput[0].length,
        height: parsedInput.length,
    };
    const distinctPositions: { x: number; y: number }[] = [];
    const obstacles: { x: number; y: number }[] = [];
    const guard = ['v', '^', '<', '>'];
    const obstacle = '#';
    let currentGuardPosition: GuardPosition = { x: 0, y: 0, direction: 'v' };
    parsedInput.forEach((line, index) => {
        if (guard.some((g) => line.includes(g))) {
            const _direction = guard.find((g) => line.includes(g)) as Guard;
            currentGuardPosition = {
                direction: _direction,
                x: line.indexOf(_direction),
                y: index,
            };
        }
        if (line.includes(obstacle)) {
            let obstacleIndex = line.indexOf(obstacle);
            while (obstacleIndex !== -1) {
                obstacles.push({
                    x: obstacleIndex,
                    y: index,
                });
                obstacleIndex = line.indexOf(obstacle, obstacleIndex + 1);
            }
        }
    });
    while (
        currentGuardPosition.x >= 0 &&
        currentGuardPosition.x < mapProperties.width &&
        currentGuardPosition.y >= 0 &&
        currentGuardPosition.y < mapProperties.height
    ) {
        if (
            !distinctPositions.some((pos) =>
                pos.x === currentGuardPosition.x &&
                pos.y === currentGuardPosition.y
            )
        ) {
            distinctPositions.push({
                x: currentGuardPosition.x,
                y: currentGuardPosition.y,
            });
        }
        currentGuardPosition = predictGuardMovement(
            currentGuardPosition,
            obstacles,
        );
    }
    console.log(distinctPositions.length);
    return distinctPositions.length;
};



export const star_2 = (input: string): number => {
    return 1;
};
