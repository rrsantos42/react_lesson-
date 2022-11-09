
// const myname = name => {
	// 	console.log(name);
	// }
	class Human {
		gender = "male";
		printgender = () => {
			console.log(this.gender)
		}
	}
	class Person extends Human{
			name = 'max';
			gender = 'female'; 

		myname = () =>{
			console.log(this.name);
		}
	}

	const person = new Person();
	person.myname();
	person.printgender();