class MaxHeap {
  constructor(array) {
    this.array = array;
    this.heapSize = array.length
  }
  parentIndex(index) {
    return index === 0 ? null : Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    let leftIndex = index * 2 + 1;
    return leftIndex >= this.heapSize ? null : leftIndex;
  }
  rightChildIndex(index) {
    let rightIndex = (index + 1) * 2;
    return rightIndex >= this.heapSize ? null : rightIndex;
  }
  subTreeMaxHeap(subTreeRootIndex) {
    let leftIndex = this.leftChildIndex(subTreeRootIndex)
    let rightIndex = this.rightChildIndex(subTreeRootIndex);
    let rootValue = this.array[subTreeRootIndex];

    let nodeValues = [rootValue]
    if (leftIndex !== null) nodeValues.push(this.array[leftIndex])
    if (rightIndex !== null) nodeValues.push(this.array[rightIndex])

    if (nodeValues.length > 1) {
      let max = Math.max(...nodeValues)
      if (max !== rootValue) {
        let exchangeIndex = (max === this.array[leftIndex]) ? leftIndex : rightIndex
        this.array[subTreeRootIndex] = max
        this.array[exchangeIndex] = rootValue
        this.subTreeMaxHeap(exchangeIndex)
      }
    }
  }
  buildMaxHeap() {
    let index = this.parentIndex(this.heapSize - 1)
    while (index >= 0) {
      this.subTreeMaxHeap(index--)
    }
  }
  sort() {
    while (this.heapSize > 1) {
      this.buildMaxHeap()
      let rootValue = this.array[0]
      this.array[0] = this.array[this.heapSize - 1];
      this.array[this.heapSize - 1] = rootValue
      this.heapSize -= 1
    }
    return this.array
  }
}

module.exports = MaxHeap