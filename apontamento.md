 normal func()

# function myfnc(){

}

# arrow func()

# const myfnc = (nbr of params) =>{

# }

 arrow func resolve the this problem and always solves the this problem 
if only one param is passed you dont need the ()
 
if olny one line of code is return yhe syntax shold be 

# const multiply = number => number * 2;

 import and exports (Modules)

 export syntax

# const person = {
# 	name: 'Max';
# }

# export default person

# export const clean = () => {...}
# export const baseData = 10;


# import person from ./person.js
# import prs from ./person.js

 has person is exported as default you just need to import and every nane you givi it would be define

# import {baseData} from ./utility.js
# import {clean} from ./utility.js

in this case becauSe is not default you need to especify teh one you want to import 
 to change tha name of the import just use the 'as'

# import {baseData as Database} from ./utility.js

if you want to import everything you can import as an objcet and everything you created will be a proprety of that objct 
import * as bundled from ./utility.js

 Classes 

# class Person{

# Proprety -> name = 'Max'

# 			call = () => {..} -> Method
# }

 contructer func 

#	const myperson = new person()
#		myperson.call();
#	console.log(myperson.name); 

 inheritance -> class Person extends Master

#spread and rest operators 

#spread is used to split up array elements OR object properties

#	const newArray = [...oldArray,1,2];
#	const newObj = {...oldObj, newProp: 5} 
 
rest is used to merge a list of func() agrguments into an array 

# function sortArgs(...args){
#	return args.sort()
# }

Destructuring

easily extract array elements or obj properties and store them in vars

Array Destructuring 

# [a, b] = ['Hello', 'Max']
# console.log(a) -> Hello
# console.log(b) -> Max

Object Destructuring

# {name} = {name: 'Max', age: 28}
# console.log(name) -> Max
# console.log(age) -> undefined

array functions

# const numbers = [1, 2, 3];
# const doubleNumArray = numbers.map((num) => {
#	return num * 2;
# });
# console.log(numberes); //[1, 2, 3]
# console.log(doubleNumArray); // [2, 4, 6];