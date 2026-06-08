XMLHttp & Fetch
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:45 PM
Summary

   - Moment for Date & Time

   - Enable Bootstrap 

   - Distributed Computing 

   - Distributed technologies 

   - Communication Specification 

   - Web Service

   - Web API 



                                             AJAX Requests in React

   - AJAX is Asynchronous Javascript And XML. 

   - It enables partial post back. 

   - It can post a specific portion of component without reloading the component. 

   - It can add new details into component without reloading the component. 

   - Javascript provides XMLHttpRequest object to make AJAX calls from browser. 

   

   XMLHttpRequest

   

   1. Create a new option for XMLHttpRequest 



           let  http = new XMLHttpRequest();



   2. Configure request 



           http.open(“method”, “url”, async:boolean);



           method        : GET, POST, PUT, PATCH, DELETE 



   3. Send the request 



           http.send();



   4. Execute the request by using the function “onreadystatechange()”



           http.onreadystatechange = function(){

           

           }



   5. Every AJAX request comprises of 4 phases 



               1        Initial

               2        Success

               3        Complete

               4        Ready 



               if (http.readyState===4)

               {

                   // you can get the response data  by using “http.responseText”. 

               }



 Ex:

  1. Go to public folder and add “product.json”



{

    "title": "Apple iPhone 15 (Ultramarine, 256 GB)",

    "price": 89900,

    "rating": {"rate":4.7, "ratings":245765, "reviews":9260},

    "features": [

        "128 GB ROM",

        "15.49 cm (6.1 inch) Super Retina XDR Display",

        "48MP + 12MP | 12MP Front Camera",

        "A16 Bionic Chip, 6 Core Processor Processor",

        "1 year warranty for phone and 1 year warranty for in Box Accessories."

    ],

    "image": "iphone-marine.webp"

}



   2. Add a new component “flipkart.jsx”



import { useEffect, useState } from "react"



export function Flipkart(){



    const [mobile, setMobile] = useState({});



    function LoadMobileDetails(){

         let http = new XMLHttpRequest();

         http.open("GET", "product.json", true);

         http.send();

         http.onreadystatechange = function(){

               if(http.readyState===4){

                    setMobile(JSON.parse(http.responseText));

               }

         }

    }



    useEffect(()=>{

        LoadMobileDetails();

    })



    return(

        <div className="container-fluid">

            <div className="row mt-4">

                <div className="col-2">

                    <img width="100%" src={mobile.image}/>

                </div>

                <div className="col-6">

                    <div className="fw-bold fs-4">{mobile.title}</div>

                    <div className="mt-2">

                        <span className="badge bg-success rounded text-white"> {mobile.rating.rate} <span className="bi bi-star-fill"></span> </span>

                        <span className="text-secondary ms-3 fw-bold"> {mobile.rating.ratings.toLocaleString('en-in')} ratings & {mobile.rating.reviews.toLocaleString('en-in')} reviews </span>

                    </div>

                    <ul className="list-unstyled text-secondary">

                        {

                            mobile.features.map(feature=><li key={feature} className="my-2 bi bi-dot"> {feature} </li>)

                        }

                    </ul>

                </div>

                <div className="col-4">

                        <div className="fs-1 fw-bold">{mobile.price.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0})}</div>

                </div>

            </div>

        </div>

    )

}



   Note: Make sure that images and JSON are in public folder. 



   Issues with XMLHttpRequest:

   - It is synchronous by default.

   - You have to configure asynchronous explicitly. 

   - It returns response always in text or XML format. 

   - If data is in any another format then explicit conversions are required. 

   - It is poor in error handling.

   - Security issues, It can’t handle XSRF, XSS, CORS etc.

   

           XSRF - Cross Site Request Forgery 

           XSS   - Cross Site Scripting Attack 

           CORS    - Cross Origin Resource Sharing 



                                                 Fetch Promise

     - It is a promise based XMLHttpRequest in JS. 

     - It is asynchronous by default.

     - It is better in error handling. It can catch issues.

     

       Syntax:

                   fetch(“url”)

                           .then(function(response){

                                   // response in binary 

                                   // cover binary to native 

                           })

                           .then(function(data){

                                   // data in native format

                           })

                           .catch(function(error){ 



                           })

                           .finally(function() { 



                           })

       

       Issues with Fetch

       - It returns data in binary format.

       - Explicit conversions required.

       - It is not great in error handling.

       - It is not in security. 



Ex:

import { useEffect, useState } from "react"



export function Flipkart(){



    const [mobile, setMobile] = useState({title:'', price:'', features:[], rating:{rate:0, ratings:0, reviews:0}});



    function LoadMobileDetails(){

         fetch('product.json')

         .then(response=> response.json())

         .then(data=>{

             setMobile(data);

         })

    }



    useEffect(()=>{

        LoadMobileDetails();

    })



    return(

        <div className="container-fluid">

            <div className="row mt-4">

                <div className="col-2">

                    <img width="100%" src={mobile.image}/>

                </div>

                <div className="col-6">

                    <div className="fw-bold fs-4">{mobile.title}</div>

                    <div className="mt-2">

                        <span className="badge bg-success rounded text-white"> {mobile.rating.rate} <span className="bi bi-star-fill"></span> </span>

                        <span className="text-secondary ms-3 fw-bold"> {mobile.rating.ratings.toLocaleString('en-in')} ratings & {mobile.rating.reviews.toLocaleString('en-in')} reviews </span>

                    </div>

                    <ul className="list-unstyled text-secondary">

                        {

                            mobile.features.map(feature=><li key={feature} className="my-2 bi bi-dot"> {feature} </li>)

                        }

                    </ul>

                </div>

                <div className="col-4">

                        <div className="fs-1 fw-bold">{mobile.price.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0})}</div>

                </div>

            </div>

        </div>

    )

}





       Axios
Class comments
