React Components
- Component is a reusable
template.
- Component comprises of

a) Design
b) Styles
c) Logic [Actions]
- Design with “HTML”.
- Styles with “CSS”
- Logic “JSX” [Javascript XML] &
“TSX” [Typescript XML]
- Components allow
a) reusability
b) extensibility
c) separation
d) maintainability
e) testability

- Components can be created
using 2 techniques

a) Javascript Class
b) Javascript Function

Note: Classes are still supported
in React JS but not recommended
for new code.

[new version]

Javascript Functions
- Functions are used to Refactor
the code.
- Refactoring is the process of
extracting a set of statements and
enclosing in a

named block, so that you can
separate and reuse the block.

FAQ: What is difference
between function, method &
procedure?
Ans: function : always
returns a value / function

method : always void
procedure : can change
dynamically, it can be void or with
return.

Function Configuration:
- A function in Javascript can be
configured using 2 techniques

a) Declaration
b) Expression

Syntax: Declaration

function Hello()
{

}

Syntax: Expression

var/let/const Hello =

function() {

}

FAQ: What is difference
between function declaration &
expression?

Ans: Declaration allows

hoisting.

Expression will not allow
hoisting even if defined with “var”.
Expression allows to

change the functionality.

You can assign a new
functionality if configured with var or

let.

- Function in expression is
“Anonymous” without name.
- Anonymous function is
accessed using IIFE pattern.
[Immediately Invoking

Function Expression]

- Function with declaration

requires a Function Call to access
and use from

any location.

function Hello()
{
}
Hello(); //

function call

- Function as expression

requires IIFE to access.

const Hello = function()

{ }

Hello(); // IIFE

Function Structure
- Every function with

declaration is built with 3 parts

a) Declaring
b) Signature
c) Definition

function

Name(params) =>
declaration

Name(params) =>

signature

{

} =>
definition

- Declaring is used to

configure the scope and behaviour.
- Signature is used to call a

function.

- Definition defines the actions

to perform.

Function Parameters
- Function can be parameter

less or parameterized.

- Parameters are used to

modify a function.

- Parameters are categorized

into 2 types

a) Formal Parameters

b) Actual Parameters

function Print(param)
=> param is formal parameter

{
}

Print(“Hello”);

=> “Hello” is actual parameters

- Compiler uses the parameters

as “arguments”.

- It can identify the arguments

length and their type.

- A function can use any type of

parameter

a) Primitive Type
b) Non Primitive Types
c) Function Type

Primitive

Types

-

Number

- String
- Boolean
- Null
- Undefined
- Symbol
- Big Int
Non Primitive Type
- Array
- Object
- Map
- Set etc.
- If a function parameter is
function type then it is known as
Higher Order Function.
