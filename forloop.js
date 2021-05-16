// import {companies, ages} from './example.js'

const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

];


//old for loop style
for (let i= 0; i < user.length; i++ ) {
	// console.log(user[i])
}

// forEach 
user.forEach(function(request){
	// console.log(request);
})


// that's my default choice
for(let i in user) {
	// console.log(user[i]);
}
