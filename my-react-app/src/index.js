import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Test from './TestJSX'

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


// class component
// class Car extends React.Component {
//   render(){
//     return <h2>Hi, Im a Car</h2>
//   }
// }

// function version of a class component
// function Car(){
//   return <h2>Hi, Im a Car</h2>
// }

// props
function Car(props){
  return( 
    <div>
      <h2>I am a {props.brand.brand} car!</h2>
      <h3>I am {props.brand.color} car!</h3>
    </div>
  );
}

// component inside a component 
function Garage(){
  const carInfo = {brand: "Ford", color: "Red"}
  return(
    <div>
      <h1>
        Who lives in my Garage?
      </h1>
      <Car brand={carInfo}/>
    </div>
  );
}

const myCarElement = <Car brand="Ford"/>;

ReactDOM.render(<React.StrictMode><Garage /></React.StrictMode>, document.getElementById('root'));
