const add = (a: number, b: number) => {
return a + b;
};

const subtract = ( a:number, b: number):number => {
  return a - b;
}

function divide(a: number, b:number): number {
  return a / b
}

const mutiply = function(a:number,b:number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const veicale = (color:string, year:number) => {
  console.log(color,year);
}

veicale('BMW',1999)

const car2: {type:string; year:number, color:string, New:boolean} = {
  type: 'BMW',
  year: 1999,
  color: 'red',
  New: true
}

console.log(car2)

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)