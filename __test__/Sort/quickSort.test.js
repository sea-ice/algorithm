let quickSort = require('../../Sort/quickSort')

describe("quick sort an array", () => {
  test("sort []", () => {
    expect(quickSort([])).toEqual([]);
  });

  test("sort [2, 3, 2]", () => {
    expect(quickSort([2, 3, 2])).toEqual([2, 2, 3]);
  });

  test("sort [2, 1, 3, 3]", () => {
    expect(quickSort([2, 1, 3, 3])).toEqual([1, 2, 3, 3]);
  });

  test("sort [2, 4, 2, 3, 5, 8, 1]", () => {
    expect(quickSort([2, 4, 2, 3, 5, 8, 1])).toEqual([1, 2, 2, 3, 4, 5, 8]);
  });
});