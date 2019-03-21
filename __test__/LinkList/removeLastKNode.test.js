let { removeLastKNodeInOneWayList } = require('../../LinkList/removeLastKNode')
let { getLinkListNodes } = require("../../LinkList/utils");

describe("remove last k node in linkList", () => {
  test("remove last 3 node in [1, 2]", () => {
    expect(
      getLinkListNodes(removeLastKNodeInOneWayList([1, 2], 3))
    ).toEqual([1, 2]);
  });

  test("remove last 3 node in [3, 4, 5]", () => {
    expect(
      getLinkListNodes(removeLastKNodeInOneWayList([3, 4, 5], 3))
    ).toEqual([4, 5]);
  });

  test("remove last 3 node in [1, 2, 3, 3]", () => {
    expect(
      getLinkListNodes(removeLastKNodeInOneWayList([1, 2, 3, 3], 3))
    ).toEqual([1, 3, 3]);
  });

  test("remove last 1 node in [1, 3, 4]", () => {
    expect(
      getLinkListNodes(removeLastKNodeInOneWayList([1, 3, 4], 1))
    ).toEqual([1, 3]);
  });
});