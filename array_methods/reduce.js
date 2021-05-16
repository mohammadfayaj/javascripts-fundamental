// import {companies, ages} from '../example.js'

const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

];

/*  
reduce() does not execute the function 
for array elements without values.
*/

// light weight
let reduceByUserAge = user.reduce(function(total, request){
	return total + request.age
}, 0);
console.log(reduceByUserAge);

// pro max
let getUserAgeSum = user.reduce( (total, request) => (total + request.age), 0);
console.log(getUserAgeSum);
