import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const element = <h1>Hello React</h1>
const myArray = ["apple", "orange", "pear"];

const myList = myArray.map((item) => <p>{item}</p>)

var x = 5.6; // variable 
let y = 5.6; // 'let' is the block scoped version of var

y = 2.2;


// destructing arrays

const vehicles = ["f150", "mustang", "roadrunner"];

// old way of destructing
//const car = vehicles[0];
// etc.... to get the rest of the info in the vehicles arrays

const [car, truck, suv] = vehicles;

function catVehicles(){
  return car + " "  + truck + " " + suv
}

const vehicleOne = {
  brand: "ford",
  model: "mustang",
  year: 2021,
  color: "red",
}

function myVehicle({color, brand}){ // properties do not have to be specified in order
  const message = "My " + brand + " is " + color;
  return message;
}


// ... (spread operator)

const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numbersCombined = [...numberOne, ...numberTwo]; // allows quick copy

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers; // [1], [2], [3, 4, 5, 6]

// const myVehicle2 = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red"
// }

// const updatedMyVecicle = {
//   type: "Car",
//   year: 2021
// }

// const updatedVehicleInformation = [...myVehicle2, ...updatedMyVecicle]; <- says it failes

const myElement1 = (
  <table>
    <tbody>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>John</th>
    </tr>
    <tr>
      <th>Elsa</th>
    </tr>
    </tbody>
  </table>
)


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
