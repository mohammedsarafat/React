Primitive Types
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:47 PM
useState()

  useEffect()

  One Way Binding

   

  1. Number Type                         - Signed Integer, Unsigned, Float, Double, Decimal, Exponent, Binary, Hexadecimal

      Octa, Big Int. 



                   2e3            2x10^3 = 2000

                   0b1010

                   0x0504                

                   0o567

                   847372112n  [big int, safe integer]



     - Presenting number 

           a) toFixed()

           b) toPrecision()

           c) toLocaleString()



            toFixed()    : It can configure decimal places with fixed number of fractions.



                             { price.toFixed(2) }



           toPrecision() : It is used to slice any number upto specific precision of chars. 

       

                             { price.toPrecision(7) }



           toLocaleString() :It is used to configure number with internationalization features.

           

           a) Region 



               { price.toLocaleString(“en-in / en-us / en-gb ..”) }



            b) Fractions 

                       minimumFractionDigits

                       maximumFractionDigits

                           

               { price.toLocaleString(“en-in”, { minimumFractionDigits:2, 

   maximumFractionDigits:4 })    



            c) Notation

                       compact

                       standard 

                       scientific 

                       engineering 



               { views.toLocaleString(“en-us”, { notation: “compact” } ) }



            d) Style

                       percent

                       currency

                       unit 

                       decimal 

   

             { rate.toLocaleString(“en-in”, { style: “percent” } ) }

             { price.toLocaleString(“en-in”, {style: “currency”, currency:”INR”}) }

             { speed.toLocaleString(“en-in”, {style: “unit”, unit: “kilometer-per-hour” }) }



     - Converting a numeric string into number 

       

           a) parseInt()

           b) parseFloat()



     - You can verify number by using “isNaN()” 

   

        Note: JSX elements will not allow any statements. They allows only methods,

                  functions and operators. 



       Syntax:

               {   

                  (isNaN(age)) ? “Age must be a number” : age 

               }



   2. Boolean Type

           - JS can use 0 for false and 1 for true. 

           - React can use only the keyword true or false.

           - React can’t display boolean keyword it can just use the keyword. 

       

       Syntax:

           const [stock] = useState(true);



           { (stock===true) ? “True” : “False” }



   3. String Type

           - It is represented using 

               a) Single Quote

               b) Double Quote 

               c) Backtick 

           - Backtick is a string with data binding expression “${ }”



                       { }                React Binding

                       ${ }            JS Binding 



           - All string formatting and manipulation methods are same as in JS. 



                       charAt()

                       charCodeAt()    

                       indexOf()

                       substr()

                       slice()

                       trim()

                       split() 

                       match() etc.



           - String match uses regular expression enclosed in “/ /“. 



Ex:

import { useState } from "react"

import "./data-binding.css";



export function DataBinding(){



   

    const [password] = useState("johA123");

    const [regExp] = useState(/^(?=.*[A-Z])\w{4,15}$/);



    return(

        <div>

            { (password.match(regExp))? "Strong Password": "Weak Password" }

        </div>

    )

}

   

   4. Undefined        ]

   5. Null                    ]    Same as in JS

   6. Symbol            ]
