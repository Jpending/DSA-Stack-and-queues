'use strict';

const StackQueue = require('./queueStack');
const {peek,isEmpty,display} = require('./queueFns')

const Q = new StackQueue();
Q.enqueue('item');
Q.enqueue('item2');
Q.enqueue('item3');

display(Q);

console.log('######');

Q.dequeue();
Q.enqueue('item4');

display(Q);