// import {companies} from '../example.js';

const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

]


// old style
let getMapItem = [];
for(let i = 0; i < user.length; i++ ){
	getMapItem.push(user[i].age)
}
console.log(getMapItem)


// light weight style
let mapUserAge = user.map(function(request){
	return request.age
});
console.log(mapUserAge)


// pro max 
let mapUserName = user.map(request => request.name);
console.log(mapUserName)

