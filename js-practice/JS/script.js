// document.write("<h1> I am External Javascript</h1>");

// function showDate() {
//     document.getElementById('date').innerHTML = Date();
// }


// let a = 1;

// do {
//     document.write("<br>" + a);
//     a++;
// } while (a <= 100);

// Array

// const days = ['sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// document.write(days[0]);
// console.log(days[6]);
// days.splice(1, 3, "Diamond");
// days.forEach(function(abc) { document.write(abc + ",") });

// document.write("<br>");


// Function
// function printName() {
//     document.getElementById('info').innerHTML = "Diamond Chalise Burtibang Baglung Nepal";
// }

// function calculateInterest() {
//     let principle = document.getElementById('p').value;
//     // alert(principle);
//     let time = document.getElementById('t').value;
//     let rate = document.getElementById('r').value;

//     let SI = (principle * time * rate) / 100;
//     // document.write(SI);
//     document.getElementById('info').innerHTML = SI;
// }


// OBject IN the Javascript

// let person = {
//     fName: 'Diamond',
//     lName: 'Chalise',
//     location: 'Kathmandu',
//     age: 23,
//     fullName: function() {
//         return this.fName + " " + this.lName;
//     }
// }
// document.write(person.fullName());

// let a = Math.PI;
// document.write(a);


let a = Math.random() * 9;
document.write(a);