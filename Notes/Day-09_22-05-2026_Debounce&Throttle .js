Debounce & Throttle 

   - Debounce is a mechanism of loading task into memory and delay to release of

     task into process by specific duration. 

   - You can debounce any function by using setTimeout(). 

   - You can cancel by using clearTimeout().



   Syntax:

               setTimeout(function(){ }, interval)

Ex:

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <script>

        function Level1(){

            document.querySelector("p").innerHTML = "Volume Increased By 30%";

        }

         function Level2(){

            document.querySelector("p").innerHTML = "Volume Increased By 70%";

        }

         function Level3(){

            document.querySelector("p").innerHTML = "Volume Full";

        }

        var l1, l2, l3;

        function VolumeClick(){

         l1 =  setTimeout(Level1, 4000);

         l2 =   setTimeout(Level2, 8000);

         l3 =   setTimeout(Level3, 12000);

        }  

        function Cancel(){

            clearTimeout(l2);

        }     

    </script>

</head>

<body>

    <button onclick="VolumeClick()">Volume Up</button>

    <button onclick="Cancel()">Cancel Level2</button>

    <p></p>

</body>

</html>



       - Throttle is a mechanism where the task is loaded into memory and its copy

         is released into process at regular time intervals. 

       - The task will repeat until removed from memory. 

       - You can throttle any function by using setInterval().

       - You can stop by using clearInterval().

       

       Syntax:

               setInterval(function(){ }, timeInterval);

               clearInterval(refName);

Ex:

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <style>

        div {

            width: 200px;

            background-color: red;

            height: 30px;

            color:white;

        }

        div:hover {

            width: 1000px;

            transition-delay: 3s;

        }

    </style>

    <script>

        function Clock(){

            var now = new Date();

            document.querySelector("p").innerHTML = now.toLocaleTimeString();

        }

        function bodyload(){

            setInterval(Clock,1000);

        }

        function Click(){

            document.querySelector("div").innerHTML = "Please wait...";

            setTimeout(function(){

                alert('Hi')

                document.querySelector("div").innerHTML = "";

            },5000);

        }

    </script>

</head>

<body onload="bodyload()">

    <button onclick="Click()">Alert</button>

    <div></div>

    <p align="center"></p>

</body>

</html>



     Function Call Stack / Event Loop    - A function can execute the tasks in a specific order. 

   - It uses a priority order for execution which is known as call stack. 

   

               1st Priority                Normal Task 

               2nd Priority                Micro Task

               3rd Priority                Macro Task 

   

   - Normal task refers to a normal function.

   - Micro task refers to a Promise.

   - Macro task refers to a debounce [setTimeout].



 Ex:

 <script>

    function Demo(){



        setTimeout(function(){

            console.log('Macro Task');

        },0)



        console.log('Normal Task');



        let obj = new Promise(function(resolve, reject){

            resolve('Micro Task');

        })

        obj.then(function(response){

            console.log(response);

        })

    }

    Demo();

</script>



    Arrow Functions

    - It is a short hand technique of writing a function expression of callback. 

    

                   ()                function parameter less 

                   (param)    function with parameter

                   =>            function return 

                   => { }        function definition 



    Syntax: without arrow



               const hello = function(uname) {

                   return `Hello ! ${uname}`;

               } 



     Syntax: with arrow



               const hello = (uname) => `Hello ! ${uname}`; 

               const hello = uname => `Hello ! ${uname}`; 



     Syntax: without arrow



               const add = function(a, b) {

                    return a + b;

               } 

   

       Syntax: with arrow



               const add = (a, b) => a + b;

   

       Syntax: without arrow 

   

               const welcome = function() {

                     statement1;

                     statement2;

               }

   

       Syntax: with arrow

           

               const welcome = () => { statement1; statement2; }



 Ex:

<script>



    const FetchData = new Promise((resolve, reject)=>{

         var url = prompt("Enter Name");

         if(url==="server.com"){

             resolve(['A','B','C']);

         }else {

             reject('Invalid URL');

         }

    });



    FetchData.then(response=>{

        response.map(item=>{

             console.log(item);

        })

    })

    .catch(error=> console.log(error));



    /*

     const FetchData = new Promise(function(resolve, reject){

           var url = prompt("Enter URL");

           if(url==="server.com") {

               resolve(['A', 'B', 'C']);

           } else {

               reject('Invalid URL');

           }

     });

     FetchData.then(function(response){

          response.map(function(item){

              console.log(item);

          })

     })

     .catch(function(error){

         console.log(error);

     })*/

</script>



     Function Methods

       - Every Javascript function provides following methods 

           a) call()

           b) apply()

           c) bind()

       - “call()” is used to call a function explicitly and pass a dynamic object. [payload]

       - Payload is the data carried to a function.

       - You can send data without parameters. 

       - You can have parameters along with data. 

       - Parameters are passed as multiple arguments. 

       

       Syntax:

               functionName.call(object, “param1”, “param2”..);

   

       - “apply()” is same as call but allows multiple parameters as an array. 

           [argument must be array]

       

       Syntax:

               functionName.apply(object, [ “param1”, “param2” ])

   

       - Apply method can spread the array args into individual references. 

 Ex:

<script>

    const data = {

        Name: 'Samsung TV'

    }

    function AddToCart(appName, qty){

        document.write(`${this.Name} added to ${appName} cart.<br> Qty is ${qty}`);

    }



    AddToCart.apply(data, [prompt('Enter App Name'), prompt('Enter Qty')]);

</script>

       

       - bind() method can call the function and copy the actions into a new reference. 

         [copy = bind] 



       Syntax:

               const newFunction = functionName.call(obj, param1, param2);

               newFunction();



 Ex:

<script>

    const data = {

        Name: 'Samsung TV'

    }

    function AddToCart(appName, qty){

        document.write(`${this.Name} added to ${appName} cart.<br> Qty is ${qty}`);

    }



    var CartDuplicate =  AddToCart.bind(data, [prompt('Enter App Name'), prompt('Enter Qty')]);

    

</script>
