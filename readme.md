### Javascripts data types
Javascripts has fall from two group of data type
1. Primitives or value types
2. Reference types or non-primitives data types

#### In primitives/value has <code>7</code> number of  data type :-
    a. string   - "this is string" or [template-literals/template-string by backtick `this is ${backtick}`]
    b. number   - 45265
    c. Bigint   - 14582354451254f [look like python complex number]
    d. boolean  - true/false
    e. null     - let name = null;
    f. undefined - let name; [name is undefined]
    g. symbol   - let name = Symbol('mohammad');


#### On the other hand Reference/non-primitives has <code>3</code> data types :-
    a. object   - { name: 'fayaj', surName='mohammad', age='22'} (this look like python dictionary)
    b. array    - ['apple', 'bannana', 'orange' ] (this look like python list)
    c. function - funciton is also called object , defendes of coding state.

##### In javscripts we can assign variable by :-
<code>let , const , var</code>
key word

var and const is kinde a same but,
const is diference because once you assign a const variable
you can not change it,

for example:-
```
const person = "name";
person = "fayaj"
console.log(person)
```
##### now here, if you run this code you will face an error called 
###### Uncaught TypeError: Assignment to constant variable.



### Javascript Range method Generator

```
function* rangeGenerator(start, end = null, step = 1) {
    if (end == null) {
        end = start
        start = 0
    }

    if (Math.sign(end - start) !== Math.sign(step)) {
        step *= -1
    }

    while (Math.sign(step) === 1 ? start < end : start > end) {
        yield start
        start += step
    }
}

const range = (start, end = null, step = 1) => [...rangeGenerator(start, end, step)]


// Now we can user range method on our forloop
for (let i of range(10)){
console.log(i)
}
```



### Basic Array Methods Experiments :-
<code>filter</code><code>map</code><code>reduce</code><code>sort</code>

let's take a look <code>map()</code>
```
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

```

<code>filter()</code>
```
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

```

> Difference between map and filter :-
>> map method. creates a new array by transforming every element in an array,

>>On the other hand filter method match given expression and filter out the query_set

<code>reduce()</code>

```
const user = [
 {name:"mohammad", age : 20, status:"active"},
 {name:"fayaj", age:23, status:"deactive"},
 {name:"joseph", age:23, status:"deactive"},
 {name:"catharina", age:19, status:"active"},
 {name:"michael", age:33, status:"deactive"},
 {name:"christop", age:25, status:"active"},

];
// light weight
let reduceByUserAge = user.reduce(function(total, request){
	return total + request.age
}, 0);
console.log(reduceByUserAge);

// pro max
let getUserAgeSum = user.reduce( (total, request) => (total + request.age), 0);
console.log(getUserAgeSum);
```
>reduce() does not execute the function 
for array elements without values.

<code>sort()</code>
```
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

// kinda weird right !
// ternary operator "?"
let sorUserByName = user.sort((requestX, requestY) => (requestX.name > requestY.name ? 1: -1));
console.log(sorUserByName)

```

### Javascripts Operators

javascripts has fall <code>10</code> type of operators:-

    1.Assignment operators
    2.Comparison operators
    3.Arithmetic operators [+ - * / % ++ -- **]
    4.Bitwise operators
    5.Logical operators
    6.String operators [ + (let c = "Mohammad" + "Fayaj")]
    7.Conditional (ternary) operator [ ? (condition ? val1 : val2) ]
    8.Comma operator  [var a = [x, x, x, x, x];]
    9.Unary operator [delete, typeof, void]
    10.Relational operators [in, instanceof]


A. Assignment operators  <code>16</code> :-
| Operators Name                  | Example           |
| ------------------------------- | ----------------- |
| Assignment                      | let x = x = y     |
|Addition assignment              | let x = x += y    |
|Subtraction assignment           | let x = x -= y    |
|Multiplication assignment        | let x = x *= y    |
|Division assignment              | let x = x /= y    |
|Remainder assignment             | let x = x %= y    |    
|Exponentiation assignment        | let x = x **= y   |
|Left shift assignment            | let x = x <<= y   |
|Right shift assignment           | let x = x >>= y   |  
|Unsigned right shift Assignment  | let x = x >>>= y  |
|Bitwise AND assignment           | let x = x &= y    | 
|Bitwise XOR assignment           | let x = x ^= y    | 
|Bitwise OR assignment            | let x = x |= y    |
|Logical AND assignment           | let x = x &&= y   |    
|Logical OR assignment            | let x = x ||= y   |           
|Logical nullish assignment       | let x = x ??= y   |


B. JavaScript Comparison Operators <code>8</code> :-

    Equal                   ==
    Not Equal               !=
    Strict Equal            ===
    Strict not Equal        !==
    Greater than            >
    Greater Than or Equal   >=
    Less Than               <
    Less Than or Equal      <=



C. Bitwise operators <code>7</code> :-
| Operators Name                  | Example           |
| ------------------------------- | ----------------- |
|Bitwise AND                   |   a & b  |
|Bitwise OR                    |   a | b  |     
|Bitwise XOR                   |   a ^ b  |
|Bitwise Not                   |      ~b  |    
|Left shift                    |   a << b | 
|Sign-propagating right shift  |   a >> b | 
|Zero-fill right shift         |   a >>> b|


D. Logical operators :-

    Logical AND (&&)
    Logical OR (||)
    Logical NOT (!)     
