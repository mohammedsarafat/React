Array and Object
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:43 PM
1. Array 

       - Array configuration is same as in JS.



                   [ ]

                   Array()



           let values = [ ];

           let values = new Array();



       - Meta character [ ] configures a static memory. It is continuous memory. 

         Memory allocated for one object will continue to next object. 



       - Array() configure a dynamic memory. It is discrete memory. 

         Memory is newly allocated for every object. 



       - Array methods are same as in JS.



               Reading Elements

               - toString()

               - join()

               - forEach()

               - map()

               - for..in

               - for..of

               - various looping statements 



               Adding Elements

               - push()

               - unshift()

               - splice() 



               Removing Elements

               - shift()

               - pop()

               - splice()



               Finding Elements 

               - find()

               - filter()

               - indexOf()

               - lastIndexOf() 

               - includes()



               Sorting Elements

               - sort()

               - reverse() 



        FAQ: What is difference between forEach() & map() ?

        Ans:  forEach() is a void type method, which can read every element but can’t 

                 return.

                 map() is used to read and return every element. [not void type]



        - React can use only map() for presenting array elements in JSX. 

        - React can dynamically create & append element into UI. 

        - React requires a unique “key” property for every repeating element. 



           Syntax:

                       { 

                          data.map( (item, index) => <li key={index}> {item} </li> )

                       }



        - React can use Array de-structure and spread operator. 

Ex:

import { useState } from "react"

import "./data-binding.css";



export function DataBinding(){



   const [categories] = useState(['All', 'Electronics', 'Fashion', 'Footwear']);



    return(

        <div>

           <ol>

              {

                categories.map((item, index)=> <li key={index}>{item}</li>)

              }

           </ol>

           <select>

            {

                categories.map((item,index)=> <option key={index}>{item}</option>)

            }

           </select>

           <table border={1}>

             <thead>

                <tr>

                    <th>Categories</th>

                </tr>

             </thead>

             <tbody>

                 {

                    categories.map(item=><tr key={item}> <td>{item}</td> </tr>)

                 }

             </tbody>

           </table>

        </div>

    )

}



        

    2. Object 

        - It is same as in JS.

        - It is a key and value collection. 

        - Key is string and value can be any. 



                   {

                     key : value,    key:value 

                   }



       - Object manipulations are same. 

       

               a) Reading all keys         Object.keys(obj)[ ]

               b) Reading all values      Object.values(obj)[ ]

               c) Reading both keys and values     Object.entries(obj)[ ]

               d) Removing a key          delete  operator

               e) Finding a key               in        operator

               f) Hiding a key etc..         Symbol  data type



         FAQ: What is optional chaining?

         Ans:   If you are referring to any property that is not defined then it returns error. 

                   Optional chaining all to mark the dynamic properties as undefined. So 

                   that they can be used only when defined. 



                   Syntax:

                           var product = { title: ‘tv’ }

                           product.rating.rate;              // error - rate not defined 

                           product.rating?.rate;            // undefined 



                           if(product.rating)

                           {

                                // returns true when defined

                           }



        FAQ: Why optional chaining is important?

        Ans:   It is required to handle semi-structured or structure less data. [schema less]

 Ex:

<script>

     var product = {title:'tv', rating:4.5}

     console.log(product.title);

     console.log(product.rating);

     if(product.city){

          console.log(product.city?.stock);

     } 

</script>





 Ex:

import { useState } from "react"

import "./data-binding.css";



export function DataBinding(){



    

    const [products] = useState([

        {id:1, title: 'TV', price: 34000},

        {id:2, title: 'Mobile', price: 13000},

        {id:3, title: 'watch', price:2400}

    ])



    return(

        <div>

           <h2>Products Table</h2>

           <table border="1" width="100%">

              <thead>

                <tr>

                    <th>Name</th>

                    <th>Price</th>

                </tr>

              </thead>

              <tbody>

                {

                     products.map(product=>

                        <tr key={product.id}>

                            <td>{product.title}</td>

                            <td>{product.price}</td>

                        </tr>

                     )

                }

              </tbody>

           </table>

        </div>

    )

}
Class comments
