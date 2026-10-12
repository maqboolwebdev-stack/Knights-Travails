export function knightMoves(start, end) {
  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [[start, [start]]];

  const visited = new Set();
  visited.add(start.toString());

  // BFS loop
  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [currX, currY] = current;

    if (currX === end[0] && currY === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((square) => {
        console.log(`[${square[0]},${square[1]}]`);
      });
      return path;
    }

    for (const [dx, dy] of possibleMoves) {
      const nextX = currX + dx;
      const nextY = currY + dy;
      const nextSquare = [nextX, nextY];
      const nextSquareStr = nextSquare.toString();

      if (isValid(nextX, nextY) && !visited.has(nextSquareStr)) {
        visited.add(nextSquareStr);
        queue.push([nextSquare, [...path, nextSquare]]);
      }
    }
  }
}
