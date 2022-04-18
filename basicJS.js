// Simple Math calculation
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

const max = Math.max(23, 99, 65, 21, 34);
const arrayOfDigits = [1,2,3,4,5];
const maxInArray = Mth.max(...arrayOfDigits)
console.log(maxInArray)
