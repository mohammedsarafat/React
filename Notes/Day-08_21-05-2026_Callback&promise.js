Summary
- Function Closure
- Function Recursion
- Pure & Impure Function
- Function Chaining
Function Generator
- Generator is used to create
iterator.
- Iterator is a software design
pattern used to access elements
from a collection in
sequential order.
- Iterator doesn’t require
initialization, condition and counter.
- It handles all operations
implicitly.

Syntax:
function* Name()
{

yield value,
yield value
}

- “*” is a meta character that
refers to zero or more occurrences.
- “yield” is an operator that
provides a value and continue to
next.

let ref = Name(); //

generator reference

ref.next(); //

returns { value, done }

- Value refers to data in memory.
- Done is a boolean that returns
true when there is no more value to
read.
Ex:
<script>

function* Iterator(){
yield 10,
yield "A"
,
yield [10, 20]
}
let obj = Iterator();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
</script>

Function Callback & Promise

Callback:
- It is a mechanism of configuring
multiple functions, but will not call
the functions.
- A function is called and
executed according to the state and
situation.
- All callbacks are anonymous
type. [without name]

- Callback executes using
blocking technique, which is
synchronous technique.
- It blocks all other actions in the
process while executing the give
action.

Syntax:

function Name(callback1,

callback2)
{
callback1();
callback2();
}
Name(function(){ //for

callback1 }, function(){ // for
callback2 })
Ex:
<script>
function FetchData(url, success, failure){
if(url==="server.com"){
success([{Name:'TV'}, {Name:'Mobile'}]);

} else {
failure('Invalid URL : Unable to fetch

data');
}
}
FetchData(prompt("Enter
URL"),function(response){
console.log(response);
}, function(error){
console.log(error);
})
</script>

Promise:
- It refers to real-life promise
made to assure any action.
- Promise returns 2 results

a) resolve
b) reject

- Resolve executes when
promise is fulfilled.
- Reject executes when there is
an issues and promise can’t be
fulfilled.

- Promise is “async” by default. It
is asynchronous.
- It uses unblocking technique.
- It can process your request
without blocking other requests in
the “process”.

Syntax:

let ref = new

Promise(function(resolve, reject){

resolve();
reject();

})

ref.then().catch().finally();

then() It is a promise
function that executes resolved

catch() It is a
promise function that executes on
reject.

finally() It executes

always.

Note: You can have

multiple then blocks.
Ex:
<script>
var FetchData = new Promise(function(resolve,
reject){

var url = prompt("Enter URL");
if(url==="server.com"){
resolve([{Name:'TV'}, {Name:'Mobile'}]);
} else {
reject('Invalid URL : Unable to fetch

data');
}
})
FetchData.then(function(response){
console.log(response);
})
.then(function(){

console.log('Data delivered successfully..');
})
.catch(function(error){
console.log(error);
})
.finally(function(){
console.log('Program End');
})
</script>

- Promise provides “all()”
method that can execute multiple
asynchronous actions.

Syntax:
Promise.all([ request1,

request2 ])

.then(function(response){
// response comprises

of data from both requests

})

Ex:

<script>

let users = Promise.resolve(['user1'
,
'user2']);
let products = Promise.resolve(['product1'
,

'product2']);

Promise.all([users,
products]).then(function(response){

console.log(response);
})
</script>

Async & Await
- Async is used to create a
Promise.
- It is asynchronous in execution.
- You can use “await” which can
make it synchronous.

Syntax:
async function Name()
{
return data; //

Asynchronous

return await data; //

synchronous

}
Name().then().catch().finally()

EX:
<script>
async function GetData(){
return await [
{Name: 'TV'},
{Name: 'Mobile'}
]
}
GetData().then(function(response){
console.log(response);
})
</script>

Debounce & Throttle
