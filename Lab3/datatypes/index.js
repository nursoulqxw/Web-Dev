//5.1
/**
 *  primitive:
   1) Is a value of a primitive type.
   2) There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


 *  An object:
   1) Is capable of storing multiple values as properties.
   2) Can be created with {}, for instance: {name: "John", age: 30}. 
   There are other kinds of objects in JavaScript: functions, for example, are objects.
*/

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!

//5.2

/**
 * Types of numbers:
 * 1)Regular numbers(-(2^53 - 1) < x < (2^53-1))
 * 2)BigInt numbers more than reg num
 */




let billion = 1000000000;
let billion1 = 1_000_000_000; // also can write like this
let billion2 = 1e9;

let micro = 0.000001;
let micro1 = 1e-6;


/**
 * parseInt(str, base) parses the string str into an integer in numeral system with given base,
 * 2 ≤ base ≤ 36.
 * num.toString(base) converts a number to a string in the numeral system with the given base.
 */

let num = 255;
alert( num.toString(16) );  // ff hex
alert( num.toString(2) );   // 11111111 bin


let num2 = 12.34;
alert( num2.toFixed(1) ); // "12.3"


/**
 * 1)isNaN(value) converts its argument to a number and then tests it for being NaN
 * 2)Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
 * 3)isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
 * 4)Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
 */

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true


// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite("15") ); // true

//5.3

let str = `Hello`;
alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

let str3 = "stringify";
alert( str3.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.substring(2, 6) ); // "ring"
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters


function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); 

//5.4
let fruits = ["Apple", "Orange", "Plum"];

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

alert( fruits.pop() );
fruits.push("Pear");
alert( fruits.shift() ); // Extracts the first element of the array and returns it:
fruits.unshift('Apple');// add to beginning

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


//5.5


/**
 * The arr.splice method is a swiss army knife for arrays.
 *  It can do everything: insert, remove and replace elements.
 */

// remove 3 first elements and replace them with another
let arr2 = ["I", "study", "JavaScript", "right", "now"];
arr2.splice(0, 3, "Let's", "dance");
alert( arr2 ) // now ["Let's", "dance", "right", "now"]

let arr3 = [1, 2];

// create an array from: arr and [3,4]
alert( arr3.concat([3, 4]) ); // 1,2,3,4


let arr4 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr4.concat(arrayLike) ); // 1,2,something,else

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // John

  let someUsers = users.filter(item => item.id < 3);

  /**
   *  - map(func) – creates a new array from results of calling func for every element.
      - sort(func) – sorts the array in-place, then returns it.
      - reverse() – reverses the array in-place, then returns it.
      - split/join – convert a string to array and back.
      - reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
      - Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
   */

//5.6
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current =  this.from;
        return this;
    },
    
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num); 
}


let str2 = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str2);

//5.7
/**
 * Objects are used for storing keyed collections.
 * Arrays are used for storing ordered collections.
 * 
 * ------
 * Map is a collection of keyed data items, just like an Object. 
 * But the main difference is that Map allows keys of any type.
 */


let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

/**
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);


for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}


for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}


for (let entry of recipeMap) { 
    alert(entry); // cucumber,500 .. 
}


/**
 * A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
 */

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };


set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

function unique(arr) {
    return Array.from(new Set(arr));

}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
alert( unique(values) );


//5.8
/**
 * The first difference between Map and WeakMap is that keys must be objects, not primitive values:
*/

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

weakMap.set("test", "Whoops"); // Error


/**
 * WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
 */

let visitedSet = new WeakSet();

let john1 = { name: "John" };
let pete2 = { name: "Pete" };
let mary3 = { name: "Mary" };

visitedSet.add(john1); 
visitedSet.add(pete2); 
visitedSet.add(john1); 

// visitedSet has 2 users now

alert(visitedSet.has(john1)); // true

alert(visitedSet.has(mary3)); // false


//Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

//5.9
/**
 * For plain objects, the following methods are available:

  - Object.keys(obj) – returns an array of keys.
  - Object.values(obj) – returns an array of values.
  - Object.entries(obj) – returns an array of [key, value] pairs.
 */

let user7 = {
    name: "John",
    age: 30
};

for (let value of Object.values(user7)) {
    alert(value); // John,  30
}


function count(obj) {
    return Object.keys(obj).length;
}
alert( count(user) );


//5.10
/**
 * Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
 * Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.
 */

let arr5 = ["John", "Smith"]


let [firstName, surname] = arr5;
alert(firstName); // John
alert(surname);  // Smith

for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}



let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2\

// default values
let [name = "Guest", lastname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(lastname); // Anonymous (default used)



let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
  
 
let {
    size: { 
      width,
      height
    },
    items: [item1, item2], 
    title = "Menu" 
} = options;
  
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

//5.11

let now = new Date();
alert( now ); // shows current date/time

new Date(2011, 0, 1); // 1 Jan 2011, 00:00:00
alert( date.getHours() );


let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016


function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}


let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)



function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
}

let date2 = new Date(2014, 0, 3); 
alert( getWeekDay(date2) ); // FR



function getSecondsToTomorrow() {
    let now = new Date();
  
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

//5.12
/**
 * The JSON (JavaScript Object Notation) is a general format to represent values and objects
 * JSON.stringify to convert objects into JSON.
 * JSON.parse to convert JSON back into an object.

*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // string
alert(json);



let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user9 = JSON.parse(userData);

alert( user9.friends[1] ); // 1



let str4 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str4, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() );