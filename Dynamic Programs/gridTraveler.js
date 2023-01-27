/**
 * Problem:
 * Say that you are traveler on a 2D grid.
 * You begin in the tap-left corner and yor goal is to travel to the bottom-right corner.
 * You may only move down or right.
 */

/**
 * 
 * @param {Number} r 
 * @param {Number} c 
 * @returns how many ways to travel the grid
 */

const gridTraveler = (r, c, memo = {}) => {
  const sortableKeyArray = [r, c].sort((a, b) => a - b);
  const key = sortableKeyArray[0] + ',' + sortableKeyArray[1];
  if (memo[key]) return memo[key];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  memo[key] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220