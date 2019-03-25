/**
 * 波兰式
 */
let isOperation = /^[\(\)+\-\*\/]$/;

function polishNotation(expression) {
  let saveNotationStack = []
  let operationStack = []

  operationStack.push('#')

  let expressionLength = expression.length
  let cursor = 0
  let lastNumber = null
  let opPriorities = { '+': 1, '-': 1, '*': 2, '/': 2 }
  while (cursor < expressionLength) {
    let char = expression[cursor];
    if (char.match(isOperation)) {
      if (lastNumber !== null) {
        saveNotationStack.push(lastNumber)
        lastNumber = null
      }
      switch (char) {
        case "(":
          operationStack.push(char);
          break;
        case ")":
          {
            let topOperation = operationStack.pop();

            while (topOperation !== '(') {
              saveNotationStack.push(topOperation)
              topOperation = operationStack.pop()
            }
            break;
          }
        case "+":
        case "-":
        case "*":
        case "/":
          {
            let topOperation = operationStack.pop();

            if (topOperation !== "(") {
              while (
                (["(", "#"].indexOf(topOperation) === -1) &&
                opPriorities[topOperation] >= opPriorities[char]
              ) {
                // 遇到operationStack栈顶运算符优先级比当前字符要高，
                // 则需要将该栈顶运算符压入saveNotationStack
                saveNotationStack.push(topOperation);
                topOperation = operationStack.pop();
              }
            }
            operationStack.push(topOperation);
            operationStack.push(char);
            break;
          }
      }
    } else {
      lastNumber = lastNumber === null ? char : lastNumber + char
      if (cursor === expressionLength - 1) {
        // 如果是最后一位是数字，则将该数字压入saveNotationStack
        saveNotationStack.push(lastNumber);
      }
    }
    cursor++
  }
  // 将operationStack剩余的运算符压入saveNotationStack
  let operation
  while ((operation = operationStack.pop()) !== "#") {
    saveNotationStack.push(operation);
  }

  return saveNotationStack
}

function calculate(expression) {
  if (!expression) return

  let pn = polishNotation(expression)
  console.log(pn)
  let deposit = []
  let leftOperand = null
  let rightOperand = null

  let item, prefixOp = null
  while (item = pn.pop()) {
    if (item.match(isOperation)) {
      if (prefixOp !== null) {
        deposit.push(prefixOp);
        if (rightOperand !== null) {
          deposit.push(rightOperand);
          rightOperand = null;
        }
      }
      prefixOp = item; // 将prefixOp更新为最新的运算符
    } else {
      // 如果此时prefixOp为空，说明pn中只剩下一个值，也就是最终的计算结果
      if (prefixOp === null) {
        console.log('hello')
        return Number(item);
      }
      if (rightOperand === null) {
        rightOperand = item;
        continue
      }
      leftOperand = item;
      let result, depositItem
      switch (prefixOp) {
        case "+":
          result = Number(leftOperand) + Number(rightOperand);
          break
        case "-":
          result = leftOperand - rightOperand;
          break
        case "*":
          result = leftOperand * rightOperand;
          break
        case "/":
          result = leftOperand / rightOperand;
          break
      }
      pn.push(String(result))
      // prefixOp保存的运算符和右操作数消费之后需要将这些变量置为null
      rightOperand = null
      prefixOp = null
      // 进行一次计算之后需要将deposit中保存的值重新放回pn
      while (depositItem = deposit.pop()) {
        pn.push(depositItem)
      }
    }
  }
}


console.log('(1+2)*3+4*(6-17)', calculate('(1+2)*3+4*(6-17)'));
console.log("3*(1+2)*3+4*6", calculate("3*(1+2)*3+4*6"));


