1. Component is a function.

    2. You can create as declaration or expression. 

    3. Component function name must start with an uppercase letter. 



                   function Register() { }



                   const Register = function() { }



                   const Register = () => { }



   4. Component function can’t be void type. 



   5. Component function must return a function with JSX element. 



           - React will not use HTML directly. 

           - React uses JSX, which is Javascript XML. 

           - JSX is used with dynamic binding, which is not supported in HTML. 

           - JSX can define logic along with presentation. 

           

           Syntax:

               function Register()

               {

                   return ( <JSX> </JSX> );

               }



           JSX Rules:

           - Component must return only one fragment of JSX. 

           

                           function Register()

                           {

                              return (

                                         <h2> Welcome </h3>       => invalid     

                                         <p> React 19 </p>

                                        )

                           }





                           function Register()

                           {

                            return (

                                       <div>

                                            <h2> </h2>                => valid

                                            <p> </p>

                                       </div>

                                       )

                           }     

   

               - JSX can’t have void element tokens.

               - Every JSX element must have an end token or it must be self ending. 

   

                           <br>                invalid 

                           <br> </br>    valid 

                           <img>            invalid 

                           <img />            valid 



               - Every JSX element can’t use attributes, it can use only properties. 



                           <img class=“”>          // invalid class is an attribute - not allowed

                           <img className=“”> // valid 

                           <img src=“” width=“” height=“”>  // valid 



                FAQ: What is difference between attribute & property?

                  Ans:   “attribute” is immutable. It can’t change dynamically.

                          “property” is mutable. It can change dynamically.



     6. You can access any component as a “Token”. 



                   <Register />

                   <Register> </Register>



 Ex: netflix.html



<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Netflix</title>

    <!-- React Library -->

     <script src="../node_modules/react/umd/react.development.js"></script>

     <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>

    <!--Babel -->

    <script src="../node_modules/@babel/standalone/babel.js"></script>



    <!-- Virtual DOM -->

     <script type="text/babel">



        function ForgotAccount(){

            return(

                <div>

                  <a href="#"> Forgot Account Details? </a>    

                </div>

            )

        }



        function Register(){

            return(

                <form>

                   <h2> Register User </h2>    

                   <dl>

                      <dt>User Name</dt> 

                      <dd> <input type="text" /> </dd>

                      <dt>Password</dt> 

                      <dd> <input type="password" /> </dd>

                   </dl>

                   <button>Register</button>

                   <ForgotAccount />

                </form>

            )

        }



        function Login(){

            return(

                <form>

                  <h3>Login</h3>

                  <label> Your email : </label>     

                  <input type="email"/> 

                  <button>Login </button>

                  <ForgotAccount/>

                </form>

            )

        }



        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(<section>

              <Register />

              <br />

              <Login />

            </section>);



     </script>

</head>

<body>

    <noscript>Please enable Javascript on your browser</noscript>

    <div id="root"></div>

</body>

</html>

   

       Enable Bootstrap for your project:

       

       1. Install bootstrap for your project



               >npm install bootstrap bootstrap-icons --save 



       2. Link the following files to your HTML page



 <link rel=“stylesheet” href=“../node_modules/bootstrap/dist/css/bootstrap.css”>

 <link rel=“stylesheet” href=“../node_modules/bootstrap-icons/font/bootstrap-icons.css”>

 <script src=“../node_modules/bootstrap/dist/js/bootstrap.bundle.js”> </script>



Ex:

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Netflix</title>

    <!-- Bootstrap Libary -->

     <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">

     <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">

     <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>



    <!-- React Library -->

     <script src="../node_modules/react/umd/react.development.js"></script>

     <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>

    <!--Babel -->

    <script src="../node_modules/@babel/standalone/babel.js"></script>



    <!-- Virtual DOM -->

     <script type="text/babel">



        function ForgotAccount(){

            return(

                <div>

                  <a href="#"> Forgot Account Details? </a>    

                </div>

            )

        }



        function Register(){

            return(

                <form className="w-25 alert alert-dismissible alert-warning border rounded rounded-2 border-2 border-secondary p-3">

                   <h2 className="bi bi-person-circle"> Register User </h2> 

                   <button data-bs-dismiss="alert" className="btn btn-close"></button>   

                   <dl>

                      <dt>User Name</dt> 

                      <dd> <input type="text" className="form-control" /> </dd>

                      <dt>Password</dt> 

                      <dd> <input type="password" className="form-control" /> </dd>

                   </dl>

                   <button className="btn mb-3 btn-warning w-100">Register</button>

                   <ForgotAccount />

                </form>

            )

        }



        function Login(){

            return(

                <form>

                  <h3>Login</h3>

                  <label> Your email : </label>     

                  <input type="email"/> 

                  <button>Login </button>

                  <ForgotAccount/>

                </form>

            )

        }



        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(<section className="container-fluid p-4">

              <Register />

              <br />

              <Login />

            </section>);



     </script>

</head>

<body>

    <noscript>Please enable Javascript on your browser</noscript>

    <div id="root"></div>

</body>

</html>
