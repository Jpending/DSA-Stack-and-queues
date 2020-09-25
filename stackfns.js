'use strict';

const Stack = require('./stack')

function peek(stack){
  if(!stack.top) return null;
  return stack.top.value;
}

function isEmpty(stack){
  return(stack.top === null);
}

function display(stack){
  let currNode = stack.top;
  if(currNode === node) console.log('empty stack');
  while(currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function is_palindrome(string) {
  string - string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  if(string.length <= 1) return true;
  const firstHalfEndIndex = Math.floor((string.length-2)/2);
  const secondHalfStartIndex = Math.ceil((string.length/2));

  const charStack = new Stack();

  for(let i=0; i<= firstHalfEndIndex; i++){
    charStack.push(string[i]);
  }

  for(let i=secondHalfStartIndex;i<string.length;i++){
    if(string[i] !== charStack.pop()) return false;
  }
  return true;
}

// compare front half of string to back half of string
// ignore the character in middle if string has odd number of chars
// iterate through first half of string and push chars to stack
// iterate through second half of string and compare top char in stack
// to the next char of the word
// if at any point stackChar !== stringChar, return false
// else return true.


function ParenthesisCheck(string){
  //iterate through string
  //push "(" parenthesis (only parenthesis) to stack when found
  //pop stack when ")" found
  //if at end of string, stack has something, we have unclosed parenthesis
  //if we pop empty stack while iterating, we're missing open paren

  if(!string.length) return null;
  const parenStack = new Stack();
  for(let i=0; i < string.length; i++){
    if(string[i] === '(') {
      parenStack.push('(');
    }
    if(string[i] === ')') {
      if(isEmpty(parenStack)){
        console.log('you are missing a "("');
      }
      parenStack.pop();
    }
  }
  if(!(isEmpty(parenStack)) {
    console.log('you are missing a ")"');
    return false;
  }
  return true;
}

function sortStack(stack) {
  if(stack.top === null || stack.top.next === null) return stack;
  //iterate through stack once, find minValue and maxValue
  //push maxValue to newStack.top
  //iterate through stack, find next largest number
  //this is less then newStack.top
  //after one pass, we push current largestValue to newStack
  //runs till newStack.top === minValue

  const newStack = new Stack();
  let minValue = stack.top.value;
  let maxValue = stakc.top.value;
  let currNode = stack.top;
  while (currNode.next !== null) {
    if(currNode.value > maxValue) maxValue = currNode.value;
    if(currNode.value < minValue) minValue = currNode.value;
  }
  if(currNode.value > maxValue) maxValue = currNode.value;
  if(currNode.value < minValue) minValue = currNode.value;

  newStack.push(maxValue);

  while(newStack.top.value !== minValue){
    let currNode = stack.top;
    let currMax = minValue;

    while(currNode.next !== null) {
      if(currNode.value > currMax && currNode.value < newStack.top.value){
        currNode = currNode.value;
      }
      currNode = currNode.next;
    }
    if(currNode.value > currMax && currNode.value < newStack.top.value){
      currMax = currNode.value;
    }
    newStack.push(currMax);
  }
  return newStack;
}

module.exports = { peek, isEmpty, display, is_palindrome, ParenthesisCheck, sortStack};