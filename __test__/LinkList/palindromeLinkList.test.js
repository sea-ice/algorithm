let isPalindromeLinkList = require("../../LinkList/palindromeLinkList");
let { getLinkListNodes } = require("../../LinkList/utils");

describe("test a linkList is palindrome or not", () => {
  test("[1, 2] is not palindrome linkList", () => {
    const [isPalindrome, head] = isPalindromeLinkList([1, 2]);
    expect(isPalindrome).toBe(false);
    // expect(getLinkListNodes(head)).toEqual([1, 2]);
  });

  test("[3, 4, 3] is a palindrome linkList", () => {
    const [isPalindrome, head] = isPalindromeLinkList([3, 4, 3]);
    expect(isPalindrome).toBe(true);
    // expect(getLinkListNodes(head)).toEqual([3, 4, 3]);
  });

  test("[1, 2, 2, 3] is not palindrome linkList", () => {
    const [isPalindrome, head] = isPalindromeLinkList([1, 2, 2, 3]);
    expect(isPalindrome).toBe(false);
    // expect(getLinkListNodes(head)).toEqual([1, 2, 2, 3]);
  });

  test("[1, 3, 3, 1] is a palindrome linkList", () => {
    const [isPalindrome, head] = isPalindromeLinkList([1, 3, 3, 1]);
    expect(isPalindrome).toBe(true);
    // expect(getLinkListNodes(head)).toEqual([1, 3, 3, 1]);
  });
});