Summary
- Function Parameters
rest, spread, default params etc.
- Function Return / void

Function Closure
- It is a behaviour defined for function

implicitly.

- It allows outer block members accessible

from inner block, but the inner block

members are not accessible to outer block.

Syntax:
function Name()
{
// closure
}

Ex:
<script>
function Outer(){
var x = 10;
function Inner(){
var y = 20;
return x + y;
}
console.log(`Addition=${Inner()}`);
}
Outer();
</script>

Pure & Impure Functions

- A pure function returns the same value

every time even when the parameter

is changing.

Ex:
<script>
function Pure(n){
n = 4;
return n;
}
console.log(Pure(40));
console.log(Pure('Hello !'));
</script>

- An Impure function returns different value

every time even when the parameter

is same every time.

EX:
<script>
var x = 10;
function Impure(n){
return x+=n;
}
console.log(Impure(10));
console.log(Impure(10));
console.log(Impure(10));
console.log(Impure(10));
</script>

Function Recursion
- Recursion is a technique of calling a
function with in the context of same function.

Syntax:

function f1()
{
f1(); // recursive
}

- It can create an indefinite loop of

execution.
Ex:
<script>
function Ping(){
document.write(`Response from : 127:0.0.1 : Reply Success
<br>`);
Ping();
}
Ping();
</script>

Ex:
<script>
function Factorial(n){
if(n===1){
return 1;
} else {
return n * Factorial(n-1);
}
}
document.write(`Factorial of 6 is ${Factorial(6)}`);
</script>

Function Chaining

- It is the mechanism of invoking a function

with context of another function.

- It can invoke and return the functionality

without any order dependency.

string.slice(0,10).fontsize(2).bold().fontcolor(‘red’);

- To create a function chain you need to
configure a function that returns “object”.

function Name()
{
return { }
}

- Object must contain a set of function

returned to current context.

function Name()
{
return {

f1(){ return this },
f2(){ return this }
}
}

Name().f1().f2();

Name().f2().f1();

Name().f1();

Ex:
<script>
function Demo()
{
return {
A(){
console.log("A");
return this;
},
B(){
console.log("B");
return this;
},
C(){
console.log("C");
return this;
}
}
}
Demo().A();
Demo().B().C();
Demo().A().C().B();
Demo().C().A();
</script>

Function Generator

<script>
function* Iterator(){
yield 10,
yield "A",

yield [10, 20]
}
let obj = Iterator();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
</script>
