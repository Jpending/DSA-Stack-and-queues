'use strict';

function peek (queue) {
  if (!queue.first) return null;
  return queue.first.value;
}

function isEmpty (queue) {
  return (queue.first === null);
}

function display (queue) {
  let currNode = queue.first;
  if (currNode === null) console.log('empty queue');
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function ophidinBank (queue) {
  while (queue.first){
    let person = queue.dequeue();
    let random = Math.random();
    if (random < .25) {
      queue.enqueue(person);
      console.log(`${person} paperwork isn't quite right, and moved back to the end of the queue`)
    } else {
      console.log(`${person} served`);

    }
  }
  console.log(`Served everybody`)
}

module.exports = { peek, isEmpty, display, ophidinBank };