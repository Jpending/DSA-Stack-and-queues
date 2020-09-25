'use strict';
const Queue = require('./queue');

class dancePartners {
  constructor () {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  queueDancer(string) {
    const gender = string [0];
    const name = string.split(' ')[1];

    if (gender === 'F') this.femaleQ.enqueue(name);
    if (gender === 'M') this.maleQ.enqueue(name);

    if (this.femaleQ.first && this.maleQ.first) {
      const fDancer = this.femaleQ.dequeue();
      const mDancer = this.maleQ.dequeue();
      console.log(`Female dancer is ${fDancer}, and the male dancer is ${mDancer}`);
    }

    if (this.femaleQ.first) {
      //count & display waiting female dancers
      let count = 1;
      let currNode = this.femaleQ.first;

      while (currNode.next !== null) {
        count ++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dancers waiting to dance.`);
    }

    if (this.maleQ.first) {
      //count & display waiting male dancers
      let count = 1;
      let currNode = this.maleQ.first;

      while (currNode.next !== null) {
        count ++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}

module.exports = dancePartners;