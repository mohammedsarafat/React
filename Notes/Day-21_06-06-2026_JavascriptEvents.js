Javascript Events
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Yesterday
Javascript Events

  1. What is Event? 

    - Event is a message sent by sender to its subscriber in order to notify the change. 

    - Event follows a software design pattern called Observer. 

    - Event uses a delegate mechanism, which is a function pointer. 



               function InsertClick() { }       => Subscriber 

           

               <button onclick=“InsertClick”>    => Sender 



     - Subscriber defines the actions to perform.

     - Sender triggers a notification to subscriber.



  2. What is Event Handler?

     - Event handler is used to configure event for element in design. 

   - Handler uses “on” method to configure event. 



               onclick                Event handler

               on                        Handler 

               click                    Event 



  3. What is Event Listener?

    - Listener is used to configure event dynamically to any element. 

   - You can add events by using the method “addEventListener()”



   Syntax:

       document.querySelector(“button”).addEventListener(“event”, ()=>{



      })

 Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

         function bodyload(){

             var button = document.createElement("button");

             button.innerHTML = "Insert";

             button.addEventListener("click",()=>{

                document.write("Inserted..");

             })

             document.querySelector("body").appendChild(button);



             document.getElementById("btnDelete").addEventListener("click",()=>{

                   document.write("Deleted..");

             })



         }

     </script>

</head>

<body onload="bodyload()">

     <button id="btnDelete">Delete</button>

</body>

</html>

       

  4. What are event arguments?

     - Event arguments are used to carry the payload.

   - Event can have default argument and custom arguments. 

   - Default arguments include 

           a) this

           b) event 

   - “this” comprises of information about current element, which includes 

       id, name, className, width, height, href, src, align etc.

   - “event” comprises of information about current event, which includes 

       clientX, clientY, shiftKey, ctrlKey, altKey, keyCode, charCode, which etc.



     Syntax:

               <button onclick=“InsertClick(this, event)”>



               function InsertClick(obj, e)

               {

                   obj.id, obj.name, obj.className …

                   e.clientX, e.shiftKey, e.keyCode …

               }

Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

        function Database(obj, e){

           console.log(`

              Button Name : ${obj.name}\n

              Button Id : ${obj.id}\n 

              X Position: ${e.clientX}\n

              Shift Key : ${e.shiftKey}

           `)

           switch(obj.name){

               case "insert": 

                document.write("Inserted..");

                break;

               case "update": 

                document.write("Updated..");

                break;

               case "delete": 

                document.write("deleted..");

                break;

           }

        }

     </script>

</head>

<body>

     

     <button onclick="Database(this, event)" name="delete" id="btnDelete">Delete</button>

     <button onclick="Database(this, event)" name="insert" id="btnInsert">Insert</button>

     <button onclick="Database(this, event)" name="update" id="btnUpdate">Update</button>

</body>

</html>



 Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

        function Database(name){

           switch(name){

               case "insert": 

                document.write("Inserted..");

                break;

               case "update": 

                document.write("Updated..");

                break;

               case "delete": 

                document.write("deleted..");

                break;

           }

        }

     </script>

</head>

<body>

     

     <button onclick="Database(this.name)" name="delete" id="btnDelete">Delete</button>

     <button onclick="Database(this.name)" name="insert" id="btnInsert">Insert</button>

     <button onclick="Database(this.name)" name="update" id="btnUpdate">Update</button>

</body>

</html>

 

   - Event can have custom arguments.

   - It can be any type of argument.

   - It can be along with default arguments. 



Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

        function Database(obj,...params){

           console.log(params);

           console.log(obj.name);

        }

     </script>

</head>

<body>

     

     <button onclick="Database(this, 1, 'TV', true, ['Delhi','Hyd'])" name="delete" id="btnDelete">Delete</button>

     <button onclick="Database(this.name)" name="insert" id="btnInsert">Insert</button>

     <button onclick="Database(this.name)" name="update" id="btnUpdate">Update</button>

</body>

</html>



       - Event Listener can have only one default “event” argument. 

   

           document.querySelector(“button”).addEventListener(“click”, (e)=>{



                       e.clientX;

                       e.shiftKey;

                       e.target.id;

                       e.target.name 

                   

           })



 Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

        function bodyload(){

           document.getElementById("btnDelete").addEventListener("click",(e)=>{

                console.log(`

                   X = ${e.clientX}\n

                   Y = ${e.clientY}\n

                   Button Name: ${e.target.name}

                `);

           })

        }

     </script>

</head>

<body onload="bodyload()">

     

     <button name="delete" id="btnDelete">Delete</button>

</body>

</html>



   5. What is event propagation? What is event bubbling? How to prevent propagation?

       - Event propagation is a mechanism where the child event may trigger the 

         parent event.

       - You can prevent propagation by using event method “stopPropagation()”.



            function ChildEvent(e)

            {

              e.stopPropagation();

           }

Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

          function NavClick(){

               alert('Navbar Clicked');

          }

          function SearchClick(e){

               e.stopPropagation();

               alert('Search Clicked');

          }

     </script>

</head>

<body>

     <nav onclick="NavClick()" style="border:1px solid black; padding: 20px;">

          <h2>Amazon</h2>

          <button onclick="SearchClick(event)">Search</button>

     </nav>

</body>

</html>



   6. How to stop default action of element?

         - HTML generic elements have default actions.

     - The default actions are triggered along with custom actions. 

     - You can stop the default actions by using the event method “preventDefault()”.    

 Ex:

<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <title>Document</title>

     <script>

          function Submit(e){

                e.preventDefault();

                alert('Data posted to server');

          }

     </script>

</head>

<body>

    <form onsubmit="Submit(event)">

       <input type="text" name="user"> <button>Submit</button>

    </form>

</body>

</html>
Class comm
