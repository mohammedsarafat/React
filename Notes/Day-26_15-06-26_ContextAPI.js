Context API
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:45 PM
Controlled Components

  - Props 

  - Transport data from parent to child. 

  - Navbar, Data Grid 

 

 Ex:

  1. Add a new folder into components 

       online-shopping



  2. Add files 



       shopping-index.jsx

       shopping-products.jsx     [controlled]



  3. shopping-index.jsx



import { useState } from "react";

import { ShoppingProducts } from "./shopping-products";





export function ShoppingIndex(){



    const [searchstring, setSearchString] = useState('');



    function handleSearchChange(e){

        setSearchString(e.target.value);

    }

    function handleCategoryChange(e){

        setSearchString(e.target.value);

    }



    return(

        <div className="container-fluid">

            <header className="d-flex p-3 align-items-center fs-3 justify-content-between bg-light">

                <span className="bi bi-bag text-primary"> Shopping </span>

                <div>

                    <div className="input-group">

                        <input type="text" onChange={handleSearchChange} placeholder="eg: products, brands" className="form-control"/>

                        <button className="btn btn-warning bi bi-search"></button>

                    </div>

                </div>

                <button className="btn btn-warning bi bi-cart4"></button>

            </header>

            <section className="row mt-2">

                <div className="col-2 bg-light" style={{height:'500px'}}>

                    <div className="mt-2">

                        <label className="form-label fw-bold">Select Category</label>

                        <div>

                            <select onChange={handleCategoryChange} className="form-select">

                                <option>Select Category</option>

                                <option value=''>All</option>

                                <option value='beauty'>Beauty</option>

                                <option value='furniture'>Furniture</option>

                            </select>

                        </div>

                    </div>

                </div>

                <div className="col-10">

                    <ShoppingProducts searchstring={searchstring}/>

                </div>

            </section>

        </div>

    )

}



 4. Shopping-products.jsx



import axios from "axios";

import { useEffect, useState } from "react"



export function ShoppingProducts(props){



    const [data, setData] = useState({products:[{id:0, title:'', price:0, rating:0, thumbnail:null}]});



    function LoadProducts(){

        if(props.searchstring===''){

            axios.get(`https://dummyjson.com/products`)

            .then(response=>{

                setData(response.data);

            })

        } else {

            axios.get(`https://dummyjson.com/products`)

            .then(response=>{

                let filteredProducts =  response.data.products.filter(product=>product.category.toLowerCase().includes(props.searchstring.toLowerCase()))

                setData({products:[...filteredProducts]});

            })

        }

    }



    useEffect(()=>{

        LoadProducts();

    })



    return(

        <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>

            {

                data.products.map(product=>

                    <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>

                        <img src={product.thumbnail} className="card-img-top" height="100" />

                        <div className="card-header">

                            {product.title}

                        </div>

                        <div className="card-body">

                            <dl>

                                <dt>Price</dt>

                                <dd>{product.price}</dd>

                                <dt>Rating</dt>

                                <dd> $ {product.rating}</dd>

                            </dl>

                        </div>

                        <div className="card-footer">

                            <button className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>

                        </div>

                    </div>

                )

            }

        </div>

    )

}



   FAQ: What is “Props Drilling” in React? How to handle Prop Drilling issue? 

   Ans:  A parent component can’t send data directly to the child at nested hierarchy.

            It requires a process known as props drilling, which can carry data from parent to child              to first level child and from child to its nested child. 

   

                       parent => child1 => child2 => child3



           You can handle Props drilling issue by using Context API.



   FAQ: If child component is not a controlled component then how data is passed?

   Ans:   By using Context API. 



                                               Context API



   - Context is a memory allocated for current component.

   - It is accessible to any component that runs within the context of parent. 

   - It is accessible to child component at any level of hierarchy. 



   1. Create a context memory by using “createContext()”.





               let ContextName = createContext(null);      // React 19x name must start

                                                                                       with upper case letter.



   2. You have configure context scope in parent



               <ContextName value={any}>

   

                       // child component here

   

               </ContextName>





   3. Child component can access context data by using “useContext()” hook.



               let data = useContext(ContextName);



               {data} 



 Ex: Context-Demo.jsx



import { createContext, useContext, useState } from "react"



let UserContext = createContext(null);



export function Child2(){

    let context = useContext(UserContext);

    return(

        <div className="bg-warning text-danger p-4">

            <h4>Child Level-2- {context} </h4>

        </div>

    )

}





export function Child1(){

    let context = useContext(UserContext);

    return(

        <div className="bg-danger p-4">

            <h4>Child Level-1 - <span> {context} </span></h4>

            <Child2 />

        </div>

    )

}





export function ContextDemo(){



    const [uname, setUname] = useState('John');



    function handleNameChange(e){

        setUname(e.target.value);

    }



   return(

     <div className="container-fluid p-4 m-4 text-white bg-dark">

        <h3>Parent - <input type="text" onChange={handleNameChange} placeholder="user name" /> </h3>

        <UserContext value={uname}>

            <Child1 />

        </UserContext>

    </div>

   )

}
Class comments
