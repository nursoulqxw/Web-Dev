'use strict'
//3.1
function hello(name) {
  let phrase = `Hello, ${name}!`;
//   debugger;
  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
}


for (let i = 0; i < 5; i++) {
    console.log("value,", i);
}


// 3.2  
function pow(x,n){
    let result = 1;

    for(let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

let x = prompt("x?", '')
let n = prompt("n?", '');

if(n <= 0){
    alert(`Power ${n} is not supported,
     please enter an integer number greater than zero`);
} else {
    alert( pow(x,n) );
}


//3.3
//good comments

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    //...
}


//3.4 ninja code
/*
Make the code as short as possible. Show how smart you are.

Let subtle language features guide you.

If the team rules forbid the use of one-letter and vague names – shorten them, make abbreviations.

While choosing a name try to use the most abstract word. Like obj, data, value, item, elem and so on.

*/

//3.5

/*
When testing a code by manual re-runs, it’s easy to miss something.
Automated testing means that tests are written separately, in addition to the code. They run our functions in various ways and compare results with the expected.

BDD(Behavior Driven Development) is three things in one: tests AND documentation AND examples.

*/


describe("pow", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
});

/*
In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.

The spec can be used in three ways:

- As Tests – they guarantee that the code works correctly.
- As Docs – the titles of describe and it tell what the function does.
- As Examples – the tests are actually working examples showing how a function can be used.


Automatic testing helps to avoid these problems!
a well-tested code has better architecture.
*/


//3.6
/* 
A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

*/