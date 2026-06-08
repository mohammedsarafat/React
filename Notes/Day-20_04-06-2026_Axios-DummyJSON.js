Axios - DummyJSON
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:42 PM
Summary

   - XMLHttpRequest

   - fetch()



                                                    axios 

   - It uses XMLHttpRequest.

   - It returns data in the native format of source. 

   - Explicit conversions not required.

   - It is a promise based request. 

   - It is by default asynchronous.

   - It can handle both client side & server side AJAX. 

   - It can cancel request. 

   - It can handle multiple requests simultaneously at the same time. 

   - It is good in error handling.

   - It is good in security.



   Note: “axios” is a library for Javascript based application and runtime. 



   Syntax:

               axios.get(‘url’).then().catch().finally()

               axios.post()

               axios.put()

               axios.delete()



               axios.get(url)

               .then(function(response){

                       response.status;

                       response.statusCode;

                       response.headers;

                       response.data;

               })

               .catch(function(error){

                       // report error 

               })

   

     1. Install axios for project



               > npm install axios --save



     2. Import axios in any component 



               import axios from “axios”;



     3. Configure request using axios 



               axios.get(“url”).then().catch().finally()



 Ex:

 flipkart.jsx



import { useEffect, useState } from "react"

import axios from "axios";



export function Flipkart(){



    const [mobile, setMobile] = useState({title:'', price:'', features:[], rating:{rate:0, ratings:0, reviews:0}});



    function LoadMobileDetails(){

        axios.get('product.json')

        .then(response=>{

             setMobile(response.data);

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



   https://dummyjson.com/

   



   Style Binding

   - You can bind inline styles to any JSX element by using “style” property.

   - Styles are defined as JSON object. 



           Syntax:

                   <div  style={ {key:value } }>

   

   - Key refers to a CSS property in camel case. 



                    text-align        textAlign 

                    font-size            fontSize

                    color                color 

                    margin-left        marginLeft 

                    etc..

       

   - Every value is string type. 



       Syntax: JSX

               <div  style={ {backgroundColor:’red’, color:’white’, textAlign:’center’ } }>



       HTML

               <div style=“background-color:red; color:white; text-align:center”> 





 Ex: 

 1. Shopping-index.jsx



import { ShoppingDashboard } from "./shopping-dashboard";

import { ShoppingProducts } from "./shopping-products";



export function ShoppingIndex(){

    return(

        <div className="container-fluid row">

          <div className="col-2">

            <div className="bi bi-bag mt-4 fw-bold fs-4"> Shopping </div>

            <div className="bi bi-columns-gap my-3"> All Products </div>

          </div>

          <div className="col-10">

            <div className="d-flex bg-light p-3 mt-4 justify-content-between">

                <div>

                    <div className="input-group">

                        <input type="text" className="form-control" placeholder="search brands, products" />

                        <button className="btn btn-warning bi bi-search"></button>

                    </div>

                </div>

                <div>

                    <button className="btn btn-warning bi bi-cart4"></button>

                </div>

            </div>

            <div className="mt-3 overflow-auto" style={{height:'400px'}}>

                <ShoppingDashboard/>

            </div>

          </div>

        </div>

    )

}



 2. shopping-products.jsx



import axios from "axios";

import { useEffect, useState } from "react"





export function ShoppingProducts(){



    const [data, setData] = useState({products:[]});



    function LoadProducts(){

        axios.get(`https://dummyjson.com/products`)

        .then(response=>{

            setData(response.data);

        })

    }



    useEffect(()=>{

        LoadProducts();

    })



    return(

        <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>

            {

                data.products.map(product=>

                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>

                        <img src={product.thumbnail} className="card-img-top" height="120"/>

                        <div className="card-header" style={{height:'100px'}}>

                            {product.title}

                        </div>

                        <div className="card-body">

                            <dl>

                                <dt>Price</dt>

                                <dd>

                                    {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}

                                </dd>

                                <dt>Rating</dt>

                                <dd>

                                   {product.rating}  <span className="bi bi-star-fill text-success"></span>

                                </dd>

                            </dl>

                        </div>

                        <div className="card-footer">

                            <button className="btn btn-warning bi bi-cart3 w-100"> Add to Cart </button>

                        </div>

                    </div>

                )

            }

        </div>

    )

}



 3. Shopping-dashboard.jsx



   import axios from "axios";

import { useEffect, useState } from "react"





export function ShoppingDashboard(){



    const [data, setData] = useState({products:[]});



    function LoadProducts(){

        axios.get(`https://dummyjson.com/products`)

        .then(response=>{

            setData(response.data);

        })

    }



    useEffect(()=>{

        LoadProducts();

    })



    return(

        <div>

            <table className="table table-hover caption-top">

                <caption>Products Dashboard</caption>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Price</th>

                        <th>Preview</th>

                        <th>Rating</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        data.products.map(product=>

                            <tr key={product.id}>

                                <td>{product.title}</td>

                                <td>{product.price}</td>

                                <td>

                                    <img  src={product.thumbnail} width="50" height="50" />

                                </td>

                                <td>{product.rating} <span className="bi bi-star-fill text-success"></span> </td>

                                <td>

                                    <button className="btn btn-warning bi bi-pen-fill mx-2"></button>

                                    <button className="btn btn-danger bi bi-trash-fill"></button>

                                    <button className="btn btn-primary bi bi-eye-fill mx-2"></button>

                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    )

}
Class c
