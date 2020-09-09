const x = {age: 23};

x.name = 'Hemant';

console.log(x); // {name: 'Hemant'}

x.name = 'amit';

console.log(x); // {name : 'amit'} 



//example

const car = {type:"Fiat", model:"500", color:"white"};
// Change a property:
car.color = "red";
console.log(car);
// Add a property:
car.owner = "hemant";
console.log(car);