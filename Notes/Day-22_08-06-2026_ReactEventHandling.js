React Event Handling 
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Yesterday
JavaScript Events

   - What is Event

   - Subscriber & Sender

   - Observer pattern

   - Delegate mechanism 

   - Event Handler 

   - Event Listener 

   - Event Arguments 

   - Default & Custom Arguments 

   - Event Propagation / Bubbling 

   - Prevent Default Events 

   

   What is Event Loop?

   - It is the process of executing tasks on event.

   - Tasks are executed using following priority 

       1st        Normal Task

       2nd        Micro Task [Promise]

       3rd        Macro Task [setTimeout]

   

   What is Event Profiling?

   - It is the process of tracking actions performed in page. 

   - You can check the event log, call tree etc. 



                                               React Event Binding

    - React uses virtual DOM. 

    - It is built by using React Fiber.

    - React Fiber provides SynthenticEvents libary.

    - It is the base for all events in React.

    - Synthetic Event maps to actual DOM event. 

   

               onClick  => onclick 

               Synthetic => Actual DOM Event 



    - Every event has a subscriber. 

    - Event handler sends notification to subscriber. 



                function InsertClick()             // subscriber 

                {

                }



               <button onClick= {InsertClick} >



     - Every event handler sends “event” as argument implicitly. 

     - Subscriber can access the event arguments and element arguments using 

       event reference. 



                function InsertClick(e)

                {

                    e.clientX, e.clientY, e.shiftKey ..

                    e.target.id, e.target.name, e.target.className ..

                }



               <button onClick={InsertClick} >



   - You can send custom arguments by using a function callback at event handler. 



               <button onClick={ ()=> InsertClick(args) } >



               function InsertClick(…args)

               {

               }



    - You can send both default and custom arguments. 

   

               <button onClick= { (event) => InsertClick(event, args) }>



               function InsertClick(e, …args)

               {

               }



Ex: Event-demo.jsx



export function EventDemo(){



    function InsertClick(e,...params){

        console.log(params);

        console.log(`${e.clientX}\n${e.target.id}`);

    }



    return(

        <div className="container-fluid">

            <button onClick={(event)=> InsertClick(event,1, 'TV',['Delhi','Hyd'])} id="btnInsert" name="Insert">Insert</button>

        </div>

    )

}



                                               Two Way Data Binding

   - It is the process of accessing data from source and binding to UI elements. 

   - Identifying the changes in data and updating back into source. 

   - Javascript can handle two way binding with any DOM event. 

   - React can handle two way binding only by using onChange event. 



           <input type=“text”  value={uname}  onChange={ handleChange } >

           <select value={city} onChange={handleChange}>



 Ex: event-binding.jsx



import { useState } from "react"



export function EventDemo(){



    const [uname, setUname] = useState('John');

    const [city, setCity] = useState('Hyd');



    function UpdateName(e){

        setUname(e.target.value);

    }

    function CityChange(e){

        setCity(e.target.value);

    }

    



    return(

        <div className="container-fluid">

            <h3>Two Way Binding</h3>

            <input type="text" onChange={UpdateName} value={uname} />

            <p>

                Hello ! {uname} from {city}

            </p>

            <select onChange={CityChange} value={city}>

                <option>Select City</option>

                <option>Delhi</option>

                <option>Hyd</option>

            </select>

        </div>

    )

}



   Synthetic Events for various interactions 

   1. Mouse Events

   2. Keyboard Events

   3. Button Events

   4. Clipboard Events

   5. Element State Events

   6. Form Events 

   7. Touch Events 

   8. Timer Events etc.



   Mouse Events         

   onMouseOver

   onMouseOut

   onMouseDown 

   onMouseUp 

   onMouseMove 

 

Ex: event-demo.jsx



import axios from "axios";

import { useEffect, useState } from "react"

import './event-demo.css';



export function EventDemo(){



    const [data, setData] = useState({products:[]});

    const [previewImage, setPreviewImage]= useState();



    function LoadProducts(){

        axios.get(`https://dummyjson.com/products`)

        .then(response=>{

            setData(response.data);

        })

    }



    useEffect(()=>{

        LoadProducts();

    })



    function handleMouseOver(e){

        setPreviewImage(e.target.src);

        console.log(e.target.src);

    }



    return(

        <div className="container-fluid row">

            <nav className="col-1">

                {

                    data.products.map(product=>

                        <img width={50}  onMouseOver={handleMouseOver} height={50} src={product.thumbnail} key={product.id} className="my-1 d-block pic" />

                    )

                }

            </nav>

            <main className="ps-5 col-11">

                <img width={400} src={previewImage} height={400} />

            </main>

        </div>

    )

}

 



 event-demo.css



.pic {

  border:2px solid gray;

  padding: 5px;

}

.pic:hover {

    border:2px solid blue;

    cursor: grab;

}
Class comments
