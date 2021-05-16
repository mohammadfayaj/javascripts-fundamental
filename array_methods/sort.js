// import {companies, ages} from '../example.js'

const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

];


let sortUserByAge = user.sort(function(requestX, requestY){
	if (requestX.age > requestY.age){
		return 1;
	} else {
		return -1;
	}
});
console.log(sortUserByAge)


// kinda weird right
//ternary operator "?"
let sorUserByName = user.sort((requestX, requestY) => (requestX.name > requestY.name ? 1: -1));
console.log(sorUserByName)










