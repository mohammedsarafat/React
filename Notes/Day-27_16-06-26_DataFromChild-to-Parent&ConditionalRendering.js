Data from Child to Parent & Conditional Rendering
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Jun 16
Props Drilling

   Context API

       createContext()

       useContext()

   

   FAQ: How to transport data from child to parent component?

   Ans:  By using custom events.

   

           1. Configure child component with custom event



                       function Child( { eventName } )

                       {

                       }



           2. Every custom event must have a subscriber



           3. Subscriber triggers the event and sends payload.



                       function Child( {eventName} )

                       {

                               function Subscriber()

                               {

                                   eventName(payload);

                               }

                       }



           4. Child component executes the subscriber of local event



                           <button onClick={Subscriber}>



           5. Parent component can access data using event handler 



                           function ParentSubscriber(e)

                           {

                               “e” comprises of payload from child. 

                           }



                           <Child  eventName={ParentSubscriber} />



   Ex: context-demo.jsx



import { useState } from "react";



export function Child({onChildClick}){



    const [msg] = useState('Hello from child');



    function handleClick(){

        onChildClick(msg);

    }

    return(

        <div className="bg-danger text-white p-4">

            <h4>Child</h4>

            <button onClick={handleClick}>Click</button>

        </div>

    )

}







export function ContextDemo(){



    const [msg, setMsg] = useState('Wating for data from child');



    function handleChildClick(e){

        setMsg(e);

    }



   return(

     <div className="container-fluid p-4 m-4 text-white bg-dark">

        <h2>Parent - {msg} </h2> 

        <Child onChildClick={handleChildClick} />

    </div>

   )

}



Ex: 

 1. shopping-index.jsx

import { createContext, useState } from "react";

import { ShoppingProducts } from "./shopping-products";



export let SearchContext = createContext(null);



export function ShoppingIndex(){



    const [searchstring, setSearchString] = useState('');

    const [cartItems, setCartItems] = useState([]);

    const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);



    function handleSearchChange(e){

        setSearchString(e.target.value);

    }

    function handleCategoryChange(e){

        setSearchString(e.target.value);

    }



    function handleAddClick(product){

        alert(`${product.title}\nAdded to Cart`);

        cartItems.push(product);

        setCartItemsCount(cartItems.length);

    }   



    return(

        <div className="container-fluid">

            <header className="d-flex p-3 align-items-center justify-content-between bg-light">

                <span className="bi bi-bag text-primary fs-3"> Shopping </span>

                <div>

                    <div className="input-group">

                        <input type="text" onChange={handleSearchChange} placeholder="eg: products, brands" className="form-control"/>

                        <button className="btn btn-warning bi bi-search"></button>

                    </div>

                </div>

                <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning bi bi-cart4 position-relative"> <span className="badge bg-danger rounded rounded-circle position-absolute">{cartItemsCount}</span> </button>

                <div className="offcanvas offcanvas-end" id="cart">

                    <div className="offcanvas-header">

                        <h3>Your Cart Items</h3>

                        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>

                    </div>

                    <div className="offcanvas-body">

                        <table className="table table-hover">

                            <thead>

                                <tr>

                                    <th>Title</th>

                                    <th>Price</th>

                                    <th>Preview</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    cartItems.map(item=>

                                        <tr key={item.id}>

                                            <td>{item.title}</td>

                                            <td>{item.price}</td>

                                            <td>

                                                <img width="50" height="50" src={item.thumbnail} />

                                            </td>

                                        </tr>

                                    )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

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

                    <SearchContext value={searchstring}>

                        <ShoppingProducts onAddToCartClick={handleAddClick} />

                    </SearchContext>

                </div>

            </section>

        </div>

    )

}



 2. shopping-products.jsx



import axios from "axios";

import { useContext, useEffect, useState } from "react"

import { SearchContext } from "./shopping-index";



export function ShoppingProducts({onAddToCartClick}){



    const [data, setData] = useState({products:[{id:0, title:'', price:0, rating:0, thumbnail:null}]});



    let searchstring = useContext(SearchContext);



    function handleAddClick(product){

        onAddToCartClick(product);

    }



    function LoadProducts(){

        if(searchstring===''){

            axios.get(`https://dummyjson.com/products`)

            .then(response=>{

                setData(response.data);

            })

        } else {

            axios.get(`https://dummyjson.com/products`)

            .then(response=>{

                let filteredData = response.data.products.filter(product => product.category.toLowerCase().includes(searchstring.toLowerCase()));

                setData({products:[...filteredData]});

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

                            <button onClick={()=>{ handleAddClick(product) }} className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>

                        </div>

                    </div>

                )

            }

        </div>

    )

}



                                           Conditional Rendering

   - It is the process of rendering different UI elements according to state and situation. 

    

   1. A component can rendered content inside any container accordion to given

       condition. 



Ex: condition-demo.jsx

import { useState } from "react"



export function ConditionDemo(){





    const [uname, setUname] = useState('');



    function handleNameChange(e){

        setUname(e.target.value);

    }



    function handleSignIn(){

        sessionStorage.setItem('uname', uname);

        location.reload();

    }

    function handleSingout(){

        sessionStorage.removeItem('uname');

        location.reload();

    }



    return(

        <div className="container-fluid">

            <header className="d-flex p-4 border border-2 justify-content-between">

                <span className="fs-2 fw-bold">Amazon</span>

                <div>

                   {

                    (sessionStorage.getItem('uname')===null)?

                     <div className="input-group">

                        <input type="text" onChange={handleNameChange} placeholder="User Name" className="form-control" />

                        <button onClick={handleSignIn} className="btn btn-warning">SignIn</button>

                    </div> :

                     <div>

                        <span className="fw-bold fs-4">{sessionStorage.getItem('uname')}</span>

                        <button  onClick={handleSingout}  className="btn mx-3 btn-danger">  Signout</button>

                    </div>

                   }

                </div>

            </header>

        </div>

    )

}
Class comments
