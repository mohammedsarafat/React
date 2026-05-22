Javascript Functions
- Function Declaration
- Function Expression
- Function Structure
Declare
Signature
Definition
- Function Call & IIFE
- Anonymous Function
- Function Parameters
- Actual Parameters
- Formal Parameters
- Arguments
- Higher Order Function

Parameters Precedence
- You can define a function with
multiple parameters.
- They have order dependency.

- You need to access and use in
the same precedence how you
configured.

function Name(param1,

param2)
{
}
Name(value1, value2);

Name(value1); //
param2=undefined

Name(value2); //
param1=value2, param2=undefined

- Javascript supports “Default
Parameters”.
- A default parameter can be
initialized with a value, so that it can

be used when

value is undefined.
- Default parameter is used only
when it is undefined.

Syntax:

function

Name(param=value)

{
}
Name(); // value

is used

Name(newValue); // new

value is used

Rest & Spread
- A function can be defined with
multiple parameters.
- There is no official limit for
number of parameters but a 64bit

size memory can

handle 65535 chars.
- Using too many parameters
may lead to injection attacks &
memory leaks.
- REST is a single parameter that
can handle multiple arguments.

function Name(...rest)
{
}
Name(value1, value2,

value3);

- “Rest parameter” is an array
type parameter.

...rest[value1, value2,

value3]

- You can access rest parameter
and store arguments into individual
references using

array de-structure.

Syntax:
function Name(...rest)
{
var [ref1, ref2] = rest;
}

Name(val1, val2);

Ex:
<script>
function Details(...product){
var [id, name, price, stock] = product;
document.write(`Id=${id}

<br>Name=${name}<br>Price=${price}
<br>Stock=${stock}`);
}
Details(1,

"TV"
, 45000, true);

</script>

- Every function can have only
one rest parameter.
- Rest parameter must be the
last parameter in formal list.

Ex:
<script>
function Details(title, ...product){
var [id, name, price, stock] = product;
document.write(`<h2>${title}</h2>Id=${id}

<br>Name=${name}<br>Price=${price}
<br>Stock=${stock}`);
}
Details("Product Details"
,1,
"TV"
, 45000, true);

</script>

FAQ: Why rest parameter

must be last in formal list?

Ans: It uses an iterator to read

all arguments.

Iterator can’t have any

value after end.

- Function can use a spread
operator.
- Spread operator can spread an
array element into individual
reference.

var list1 = [10, 20];
var list2 = [30, 40];
var list3 = [list1,

list2]; // 2 elements in list3

var list3 = [...list1,

list2]; // 3 elements in list3 [10,
20, list2]

var list3 = [...list1, ...

list2]; // 4 elements in list3 [10, 20,
30, 40]

Syntax:

function Name(param1,

param2, param3)

{

}
Name([val1, val2,

val3]); // param1=val1, val2,
val3

Name(...[val1, val2,

val3]); // param1=val1,
param2=val2, param3=val3

Ex:
<script>
function Details(id, name, price, stock){

document.write(`Id=${id}

<br>Name=${name}<br>Price=${price}
<br>Stock=${stock}`);
}
var product = [1,

"TV"
, 45000, true];

Details(...product);
</script>

FAQ: What is difference

between rest & spread?

Ans: “Rest” is a single formal
parameter that can handle multiple
arguments.

“Spread” is a single array

type argument that spreads its
elements into

individual references.

JavaScript Statements:
1. Selection

if, else, switch, case,

default

2. Looping

for, while, do while

3. Iteration

for..in, for..of

4. Jump

break, return, continue

5. Exception handling

try, catch, throw, finally

Function with Return:
- “Return” is a Jump

statement.

- It returns the memory of

function.

- It keeps the memory alive

and good for continuous operations.
- If you need a value across
multiple request then configure
using a function
with return.

Syntax:
function Name()
{
return any; // primitive,

non-primitive, function

}

- If a function returns another
function then it is known as Higher
Order Function

and the process called as

“Function Currying”.

Ex:
<script>
function Demo(){
return function(){
return function(){
return "hello ";
}
}
}
document.write(Demo()()());
</script>
