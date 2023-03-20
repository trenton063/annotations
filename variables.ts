let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects 
let now: Date = new Date();

// Array 
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car{

}
let car: Car = new Car();

// Object literal 
let point: { y: number; x: number } = {
  x: 15, 
  y: 20
};

let Cars: { type: String; color: String; year: number} = {
  type: 'BMW',
  color: 'red',
  year: 2008,
}
console.log(Cars)

// Function
// The right side of equal in the function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}; 

// When to use annotations
// 1) Function that return the 'any type'
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalizate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean; 

for (let i=0; i < words.length; i++) {
  if (words[i] === 'green'){
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for ( let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}