// SPREAD

const numbers = [1, 2, 3];
const newnumbers = [...numbers, 4];

//console.log(newnumbers);
// 1,2,3,4

const person = {
	name: "Max"
};

const newperson = {
	...person,
	gender: "male"
};

//console.log(newperson);
// gender: "male",
// name: "Max"

// Rest

const filter = (...args) => {
	return args.filter(el => el === 1);
} 

console.log(filter(1, 2, 3));

//[i]
