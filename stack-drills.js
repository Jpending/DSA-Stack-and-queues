'use strict';

const Stack = require('./stack');
const { peek, isEmpty, display, is_palindrome, parenthesisCheck, sortStack} = require('./stackfns');

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
main();
function palindromeTest() {
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('The quick brown fox jumps over the lazy dog'));
}
palindromeTest();
function parentest() {
  console.log(parenthesisCheck('This is a test(dont tell anyone!'));
  console.log(parenthesisCheck('This is a test(dont tell anyone!))'));
  console.log(parenthesisCheck('This is a test((dont tell anyone!)'));
}
parentest();
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
sortTest();