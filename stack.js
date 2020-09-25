'use strict';
class _Node{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    this.top = new _Node(data, this.top)
  }

  pop() {
    const topNode = this.top;
    if(topNode === null) return;
    this.top = topNode.next;
    return topNode.value;
  }
}

module.exports = Stack;