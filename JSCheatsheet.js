// Start Basic JS Concepts
var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';

tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log('Phara ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('chaina tor kache jamuna');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro besi ghurmu');
}
else {
    console.log('kothao jamuna basai thakmu ar mosa marmu');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}

if (eggPrice >= myBudget) {
    console.log('lebu diye vat khabo');
}

// Arif Basic JS Practice

var number1 =18;
var number2 = 3;
var destination = ['Dhaka', 'Barishar', 'Shatkhira', 'Habigonj']
let mypick= destination[1];
mypick='London';
destination.push('Nagao')

console.log(destination.length);

if(destination.length == 3){
console.log('Dhaka is our homeland');
}
else if(destination[1] == 'Barishar'){

    //console.log('Noyakhali Bivag chai!');
}

var MyBudget = 20;
var eggPrice = 18;


if (MyBudget == eggPrice){
    console.log('Dui sosta');
}

else if(MyBudget <= eggPrice){
    console.log('Dui hali dim den');
    }
else{
    //console.log('Dim Khamu na.');

}

for (var i = 1; i < 7; i++) {
//console.log(i)

}

// Array Simple For loop

var numbers = [12,12,30,32,19,10,87]

for ( var i= 0; i<numbers.length;i++){
var elemnts = numbers[i];
//console.log(elemnts);

};

function twoMultiply(num1, num2){
    var finalResult= num1*num2;
    return finalResult;
}

var output = twoMultiply(10,10);
console.log(output);

let myComputer = {
name : "HP",
model: 'Mustang',
year: 2017,
} 

myComputer.model="Porshi";


console.log(myComputer.model)


//Spread operator, array max, copy arrays 

const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);


// Strat DOM Manupulation 

const blogs = document.getElementsByTagName('p');

// Simple For Loop in elment and Style

for(const blog  of blogs){
    blog.style.color = 'white';
    blog.style.backgroundColor = "red";
    blog.style.padding = "10px";
    blog.style.borderRadius = "5px";
}

// Simple Style Using JS

const montuPilot= document.getElementById("montu");
montuPilot.classList.add("red");
montuPilot.style.color = "green";
montuPilot.style.fontWeight = "600";
montuPilot.style.fontSize = "24px";


// QuerySelector/QuerySelectorAll `querySelector() method can only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified    [CSS selector   .] `

const firstParagraph = document.querySelgeector("p");
firstParagraph.innerText="Hello BanglaDESH!"
firstParagraph.style.backgroundColor = "green";
console.log(firstParagraph);



// ChildNodes/Childs/Append

const Childs = document.getElementById("child");
Childs.children[1].innerText = "Roton Pilot-2";
Childs.removeChild(Childs.children[0])

// Create Element

const newElement = document.createElement("h2")
newElement.innerText = `Friends-Kaiser`
Childs.appendChild(newElement);
console.log(Childs.children);

// JS Most use Events

function joyBangla(){
document.body.style.backgroundColor = "green";

}

// You can use Events {click/Mouseover/Mouseenter/Mouseover} function 

document.getElementById("realName").addEventListener("keyup", function(event){
console.log(event.target.value)   
})


// ES6 Practices

// function declaration
function add(num1, num2) {
    return num1 + num2;
}
// function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

//arrow function

const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 17);
console.log(sum1, sum2, sum3, sum4);


//Big Arrow Functions

const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);


//Default-parameter

function addNumbs(num1, num2 = 33) {
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const resulta = add(15, 0);
console.log(resulta);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}


//Template-string

const friendsa = ['abul', 'babul', 'kabul', 'sabul'];
const counta = 5;
const old2 = `<h3 class="friend-name">Friend-${counta}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friendsa.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friendsa.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);

//OBJECT Basic or Main Games 

// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);

// destructuring array 
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

//chaining

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);

// Array of objects map / Foreach ( The map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything. )

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);


// filter-find.js (Find give you single element not in Array)


const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);