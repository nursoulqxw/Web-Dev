//4.1
let user = {     // an object
    name: "John",  
    age: 30,
    "likes birds": true        
};

delete user.age;

//For multiword properties, the dot access doesn’t work:
user["likes birds"] = false;


function makeUser(name, age) {
    return {
      name: name,
      age: age
    };
}

let user2 = makeUser("John", 30);
alert(user2.name); // John

let user3 = { name: "John", age: 30 };

alert( "age" in user );



let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property

alert( "test" in obj ); // true, the property does exist!

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    alert( key );  // name, age, isAdmin
    alert( user[key] ); // John, 30, true
}


//4.2
let user = { name: "John" };
let admin = user; 

admin.name = 'Pete';

alert(user.name); // 'Pete'


let user5 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user5, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user5.canView); // true
alert(user5.canEdit); // true


let clone = Object.assign({}, user5);


let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone2 = structuredClone(user);

alert( user.sizes === clone2.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone2.sizes.width); // 50, not related

//4.3
/**
 * The main concept of memory management in JavaScript is reachability.
 * “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
 * The main things to know:
- Garbage collection is performed automatically. We cannot force or prevent it.
- Objects are retained in memory while they are reachable.
- Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.

 */

//4.4
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(this.name);
    }
};

user.sayHi(); // John

//4.5
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");


function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  
}

alert( new BigUser().name );  // Godzilla


function User2(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
}

let john = new User2("John");

john.sayHi(); 

//4.6

/**
 * The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
 *
 * -works as value.prop, if value exists,
 * -otherwise (when value is undefined/null) it returns undefined.
 */

let user = {};

alert( user?.address?.street ); // undefined (no error)



let key = "firstName";

let user1 = {
  firstName: "John"
};

let user6 = null;

alert( user1?.[key] ); // John
alert( user6?.[key] ); // undefined

//. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so

//4.7

let id = Symbol("id");
/**
 * A “symbol” represents a unique identifier.
 */

alert(id.toString()); // Symbol(id)
alert(id.description); // id


let user = {
  name: "John",
  [id]: 123 // not "id": 123
};


// get symbol by name
let sym = Symbol.for("name");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

/**
 * Symbols are always different values, even if they have the same name. 
 * If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. 
 * Multiple calls of Symbol.for with the same key return exactly the same symbol.
 */


//4.8 Object to primitive conversion


/**
 * 1)There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. 
 * There exist only numeric and string conversions.
   2)The numeric conversion happens when we subtract objects or apply mathematical functions. 
   For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, 
   and the result of date1 - date2 is the time difference between two dates.
   3)As for the string conversion – it usually happens when 
   we output an object with alert(obj) and in similar contexts.
 */

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
  

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**
 * The toString method returns a string "[object Object]".
 * The valueOf method returns the object itself.
 */