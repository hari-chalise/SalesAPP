//  1 Way to print in javascript
// console.log("Hello Word!!!!");
// alert("Me");
// document.write("This is the document pages");
//javascript API
// 2. java script console API
// console.log("Hello Word!!!!");
// console.warn("This is the warning");
// console.error("This is the error!!!!");

//3. javasxript variable
// container to store data value

// var num1 = 5;
// var num2 = 6;
// console.log(num1 + num2);

// 4 Data Type in the javascript
//numbers
var num1 = 56;
var num5 = 45;

// string 
var str1 = "This is covid 19 pandamic";
var str3 = "This is the lockdown period practice";

//objects
var marks = {
        diamond: 89,
        namraj: 45,
        minbdr: 56,
        Anmol: 47,
    }
    // console.log(marks);


//boolean
var a = true;
var b = false;
// console.log(a, b);

//undefine
var und;
// console.log(und);

//null
var n = null;
// console.log(n);
/*
 At high level there are two type of data type in javascript
1)primitive: undefine, null, number, string, boolean, symbol
2)Reference data type : Arrays and object
*/

//Array

var arr = [1, 2, 3, 4, 5];

// Operator 
// Arithmetic Operators
var a = 100;
var b = 20;
// console.log("The value of the a + b is", a + b);
// console.log("The value of the a - b is", a - b);
// console.log("The value of the a * b is", a * b);
// console.log("The value of the a / b is", a / b);

// Assignment Operators
var c = b;
c += 2;
// console.log(c);

// Comparison Operator

var x = 12;
var y = 6;
// console.log(x === y);
// console.log(x >= y);
// console.log(x <= y);

// Logical Operator

//AND
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);

//OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical Not
// console.log(!false);
// console.log(!true);

// Function in javascript
// DRY = Do Not Repeat Yourself

function avg(a, b) {
    return (a + b) / 2;
}

c = avg(4, 6);
d = avg(20, 45);
// console.log(c, d);

// conditional in the javascript

var age = 14;
// If else Statement
/*
if (age > 8) {
    console.log('You are not a kid');
} else {
    console.log('You are a Kid');
}*/

// for loop 

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element) {
//     console.log(element);
// })

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myarray = ['diamond', 'ram', 'shyam', 'kalu'];
// myarray.pop();
// myarray.push('hari');
// myarray.unshift('uni');
// myarray.sort();
// myarray.splice(myarray, 1);
myarray.slice(1, 3)
    // console.log(myarray);


// string method in javascript
let myString = "Diamond is the vary passinate person for the technology";
// console.log(myString.indexOf('person'));
// console.log(myString.slice(0, 10));
// d = myString.replace("Diamond", "Hari");
// console.log(d, myString);
let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());

// Dom Manipulation in javascript
let elem = document.getElementById('btn');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'red';
// console.log(elemClass.innerHTML);
// console.log(elemClass.innerText);

let tn = document.getElementsByTagName('div');
// createdElement = document.createElement('p');
// createdElement.innerText = "Thi is the newly created Elements  from the Javascript";
// tn[0].appendChild(createdElement);
// console.log(tn);

// selecting using Query
let sel = document.querySelector('.container');
// console.log(sel);
sel1 = document.querySelectorAll('.container');
// console.log(sel1);

function clicked() {
    // console.log('This button is clicked');
}

window.onload = function() {
    // console.log('The window is loaded');
}

// Event in the Javascript

// firstContainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("'Click hua'")
// })

// firstContainer.addEventListener('mouseover', function() {
//     console.log("Mouse is over the container")
// })

// firstContainer.addEventListener('mouseout', function() {
//     console.log("Mouse Out Container")
// })
// firstContainer.addEventListener('mouseoup', function() {
//     console.log("Mouse up Container")
// })
// firstContainer.addEventListener('mousedown', function() {
//     console.log("Mouse down Container")
// })

// Arraw Function
// function summ(a, b) {
//     return a + b;
// }

// summ = (a, b) => {
//         return a + b;
//     }


// Set TimeOut and Set Interval

testHo = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have  NOt clicked </b>"
        // console.log('THis is the  test if the form in teh  ')
}

// setTimeout(testHo, 5000)
// setInterval(testHo, 2000)

// use clearInterval/clearTimeout to cancel setInterval/setTimeout
// clr = setInterval(testHo, 5000);

// javascript localStorage

// localStorage.setItem('name', 'Diamond');
// localStorage
// localStorage.getItem('name');

// JSON Example
obj = { name: 'Diamond', address: 'Burtibang', district: 'Baglung' };
js = JSON.stringify(obj);
// console.log(typeof js);
// console.log(js);
// parsed = JSON.parse('name');
// console.log(parsed);