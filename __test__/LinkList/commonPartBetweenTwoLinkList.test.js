const commonPartBetweenTwoLinkList = require("../../LinkList/commonPartBetweenTwoLinkList");

describe("common parts between two linkList", () => {
  test("common parts between [] and [1, 2]", () => {
    expect(commonPartBetweenTwoLinkList([], [1, 2])).toEqual([]);
  });

  test("common parts between [2, 2, 3] and [3, 4, 5]", () => {
    expect(commonPartBetweenTwoLinkList([2, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  test("common parts between [1, 2, 3, 3] and [2, 3, 3, 4, 5]", () => {
    expect(commonPartBetweenTwoLinkList([1, 2, 3, 3], [2, 3, 3, 4, 5])).toEqual([2, 3, 3]);
  });

  test("common parts between [5, 5, 5] and [5, 6, 7]", () => {
    expect(commonPartBetweenTwoLinkList([5, 5, 5], [5, 6, 7])).toEqual([5]);
  });
});
