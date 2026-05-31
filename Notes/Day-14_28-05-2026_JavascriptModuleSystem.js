Javascript Module System


      - Modular refers to a small portion of legacy content. 

   - Modular approach allows library to use only the required for application. 

   - It configures application specific framework. 

   - It makes the application light weight and faster in interactions. 

   

   Javascript Module

   - Every JS file is considered as a module. 

                   home.js        Home Module 

                   product.js        Product Module 

   - Typically every modules in JS comprises of 

           a) variables 

           b) functions

           c) classes 

   - Module enables easy reusability, extensibility, separation and maintainability. 

   - JS requires module system configured for browser. 

           a) UMD    (Universal Module Distribution)

           b) AMD        (Asynchronous Module Distribution)

           c) Common JS

           d) ESModule  etc.



   - Every module member must be marked as “export” in order to use outside module. 

   

           export const name = “value”;

           export function name() { };

           export class name { } ;



   - You can import and access the members. 



           import { name } from “module”;             // ES Module, UMD Module 

           const name = require(“module”);          // Common JS



   - If you have to export any member after declaration then you have to mark it as      “default export”. 



       Syntax:

             const name = function() { }

             export default name;



   - Every module can have only one default export. 

   - You can’t import default export inside block { }.



            import {default_member} from “module”;     // invalid 

            import default_member from “module”;       // valid 

            import default_member, { others } from “module”;



 Ex:

 1. demo.js 



export const msg = "Welcome to Module System";

export function Hello(){

    return "Hello !";

}

export function Welcome(){

    return "Welcome";

}

export function Add(a,b) {

    return a + b;

}



const Sub = function(a,b){

    return a-b;

}



export default Sub;



 2. demo.html



<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script type="module">

          import Sub, { Hello, Welcome, msg, Add } from "./demo.js";

          document.querySelector("p").innerHTML = `${Hello()}<br>${Welcome()}<br>${msg}<br>${Add(10,20)}<br>Sub=${Sub(30,10)}`;

     </script>

</head>

<body>

     <p></p>

</body>

</html>



   - You can import and use all members of a module by using “aliasing” technique. 



            import  * as aliasName from “module”



           aliasName.variable

           aliasName.function()

           aliasName.class 



Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script type="module">

          import Sub, * as library from "./demo.js";

          document.querySelector("p").innerHTML = `${library.Hello()}<br>${library.Welcome()}<br>${library.msg}<br>${library.Add(10,20)}<br>Sub=${Sub(30,10)}`;

     </script>

</head>

<body>

     <p></p>

</body>

</html>



       - You can import and use library from different modules.

       - If different modules have same name members then it leads to ambiguity. 

       - You can resolve ambiguity issues by using aliasing. 



       Syntax:

               import { member as aliasName } from “module”;



Ex: 

1. admin.js



export function title(){

    return "Admin Home";

}



 2. user.js 







export function title(){

    return "User Home";

}



 3. demo.html



<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script type="module">

          import { title as AdminTitle } from "./admin.js";

          import {title as UserTitle} from "./user.js";



          document.querySelector("p").innerHTML = AdminTitle()  + "<br>" + UserTitle();

     </script>

</head>

<body>

     <p></p>

</body>

</html>



      React Components using modular approach:

       

      1. Add a new folder into “src” by name “components”



      2. Maintain a folder for every component 

   

      3. Every component in real world application development can have 3 files

       

               a) component.jsx

               b) component.css

               c) component.test.jsx  / component.spec.js / component.test.js 



           JSX                comprises of design and logic

           CSS                comprises of styles

           test/spec        comprises of test cases 



       Note: Clean up the template styles from “app.css” & “index.css” 

                 Never use type selectors in your CSS. 

                   

     4. Styles from CSS can be imported and used in JSX file. 

                   

                   login.jsx

       

               import   “./login.css”



       login.jsx



import "./login.css";



export function Login(){

    return(

        <div className="form-style">

            <h2>Login</h2>

            <dl>

                <dt>User Name</dt>

                <dd><input type="text" /></dd>

                <dt>Password</dt>

                <dd><input type="password"/></dd>

            </dl>

            <button>Login</button>

        </div>

    )

}



       login.css



.form-style {

    border: 1px solid gray;

    padding: 20px;

    box-shadow: 2px 2px 2px black;

    border-radius: 20px;

    width: 250px;

}
