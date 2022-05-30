
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


// filter-find.js (Filter throw exact condion and give you a conditional result in array / Find give you single element not in Array)


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



// JavaScripts Objects Concepts.....

// Create object Using class

class Vehicle {

    constructor(name,age,income) {
        this .name =name;
        this.age = age;
        this.income = income;
    }
}

const newCar = new Vehicle("BMW", 1971, 200)
console.log(newCar.income);

//Using Method in Object 

const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);


// Object properties and keys

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);
// get all values 
const values = Object.values(bottle);
// console.log(values);
const pairs = Object.entries(bottle);
// console.log(pairs);
// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);


// Loop in Object

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

// 
