'use strict';
const Stack = require('./stack');

class stackQueue extends Stack {
  constructor () {
    super();
    this.first = this.top;
    this.last = null;
  }

  enqueue (item) {
    //if the stack is empty, just add the item and adjust the pointers
    if (this.first === null) {
      this.push(item);
      this.last = this.top;
    } else {
      //we have stuff in the stack already and need to:
      //1. invert the stack into tempStack
      const tempStack = new Stack();
      while (this.top) {
        tempStack.push(this.pop());
      }
      //2. add the item to the top of tempStack
      tempStack.push(item);
      //3. invert tempStack back into this
      while (tempStack.top) {
        this.push(tempStack.pop());
      }
      //4. fix this.first and this.last pointers
      let currNode = this.top;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      this.last = currNode;
    }
    this.first = this.top;
  }

  dequeue () {
    this.pop();
    this.first = this.top;
  }
}

module.exports = stackQueue;