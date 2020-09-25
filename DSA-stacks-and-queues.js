'user strict'
//stack LIFO structure. last in, first out. o(1) time.

class _Node{
  constructor(data,next){
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() { 
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
    top of the stack */
    if(this.top === null) {
      this.top = new _Node(data,null);
      return this.top;
    }
    /* If the stack already has something, 
    then create a new node,
    add data to the new node, and
    have the pointer point to the top */
    const node = new _Node(data,this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
    the pointer to the next item and that next item becomes the
    top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

//Queue structure FIFO, first in first out. 

class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
// adding an item to the end of a queue o(1) complexity
  enqueue(data) {
    const node = new _Node(data);
    
    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
//removing an item from start of queue. o(1) complexity
  dequeue(){
    //if queue is empty there is nothing to return
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is last item in queue
    if(node === this.last){
      this.last = null;
    }
    return node.value
  }
}