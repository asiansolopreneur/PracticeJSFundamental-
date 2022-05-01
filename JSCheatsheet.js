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