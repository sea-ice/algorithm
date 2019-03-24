let MaxHeap = require("../../Sort/heapSort");

describe("sort an array with heap", () => {
  test("sort []", () => {
    expect((new MaxHeap([])).sort()).toEqual([]);
  });

  test("sort [2, 3, 2]", () => {
    expect((new MaxHeap([2, 3, 2])).sort()).toEqual([2, 2, 3]);
  });

  test("sort [2, 1, 3, 3]", () => {
    expect((new MaxHeap([2, 1, 3, 3])).sort()).toEqual([1, 2, 3, 3]);
  });

  test("sort [2, 4, 2, 3, 5, 8, 1]", () => {
    expect((new MaxHeap([2, 4, 2, 3, 5, 8, 1])).sort()).toEqual([1, 2, 2, 3, 4, 5, 8]);
  });
});
