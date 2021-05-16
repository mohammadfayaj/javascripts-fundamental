// import {companies, ages, user} from '../example.js'

const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

]

// old style
let filterByUserAge = [];
for (let i = 0; i < user.length; i++) {
	if (user[i].age >= 20 ){
		filterByUserAge.push(user[i]);
	}
}
console.log(filterByUserAge)

// light wight style
let filterByUserStatus = user.filter(function(request){
	if(request.status === "active"){
		return true;
	}
});
console.log(filterByUserStatus)


// Anonymous function or arrow function
let filterByUsersAge = user.filter(request => request.age >= 25);
console.log(filterByUsersAge)

let filterByUserNameChart = user.filter( request => request.name.match(/m|M/));
console.log(filterByUserNameChart)
