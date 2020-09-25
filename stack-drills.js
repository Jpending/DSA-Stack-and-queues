'use strict';

const Stack = require('./stack');
const { peek, isEmpty, display, is_palendrome, parenthesisCheck, sortStack} = require('./stackfns');

function main() {
  const starTrek = new Stack();

  console.log(isEmpty(starTrek));

  console.log('######');

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  display(starTrek);

  starTrek.pop();

  console.log('######');

  display(starTrek);

  console.log('######');

  console.log(isEmpty(starTrek));

  console.log(peek(starTrek));
}

function palindromeTest() {
  console.log(is_palendrome('dad'));
  console.log(is_palendrome('1001'));
  console.log(is_palendrome('A man, a plan, a canal: Panama'));
  console.log(is_palendrome('The quick brown fox jumps over the lazy dog'));
}

function Parentest() {
  console.log(parenthesisCheck('This is a test(dont tell anyone!'));
  console.log(parenthesisCheck('This is a test(dont tell anyone!))'));
  console.log(parenthesisCheck('This is a test((dont tell anyone!)'));
}

function sortTest(){
  const testStack = new Stack();
  testStack.push(3);
  testStack.push(7);
  testStack.push(4);
  testStack.push(5);
  testStack.push(8);

  const sorted = sortStack(testStack);
  display(sorted);
}