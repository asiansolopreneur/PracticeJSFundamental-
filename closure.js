/*
JavaScript has 3 types of scope:
1. Block scope { Before ES6 (2015), JavaScript had only Global Scope and Function Scope. } 

# : Let and Const.
These two keywords provide Block Scope in JavaScript.
# Variables declared inside a { } block cannot be accessed from outside the block:

2. Function scope

3. Global scope
# A variable declared outside a function, becomes GLOBAL

## In JavaScript, objects and functions are also variables.

/// Hoisting 

1. JavaScript only hoists declarations, not initializations.

*/

{
    let x = 2;
    const  y = 10;
    
}

{
    var x = 2;
    
}

// Variables defined inside a function are not accessible (visible) from outside the function.

function myFunction() {
    var carName = "Volvo";   // Function Scope
    //console.log(carName)
}
myFunction()
//console.log(carName)