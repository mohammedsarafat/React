
Element State Events, Button Events
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:39 PM
Mouse Events

 Keyboard Events

 

 Element State Events

     onBlur                    : element lost focus

   onFocus                : element gets focus 

   onChange            : when value changes 

   

 Ex:  element-demo.jsx



import { useState } from "react"





export function ElementDemo(){



    const [passport, setPassport] = useState('');

    const [msg, setMsg] = useState('');



    function handleChange(e){

        setPassport(e.target.value);

    }

    function handleBlur(){

        setPassport(passport.toUpperCase());

        setMsg('');

    }



    function handleFocus(){

        setMsg('eg: BVP432HY');

    }



    return(

        <div className="container-fluid">

            <dl>

                <dt>Passport</dt>

                <dd><input type="text" value={passport} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} /></dd>

                <dd className="text-warning">{msg}</dd>

            </dl>

        </div>

    )

}



Ex: EMI Calculator



import { useState } from "react"



export function EMICalculator(){



    const [amount, setAmount] = useState(100000);

    const [years, setYears] = useState(1);

    const [rate, setRate] = useState(10.45);

    const [emi, setEmi] = useState(0);





    function CalculateEMI(){

        let P = amount;

        let r = rate/12/100;

        let n = years * 12;

        let EMI = P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)) - 1;

        setEmi(EMI);

    }



    function handleAmountChange(e){

        setAmount(e.target.value);

        CalculateEMI();

    }

    function handleYearChange(e){

        setYears(e.target.value);

        CalculateEMI();

    }

    function handleRateChange(e){

        setRate(e.target.value);

        CalculateEMI();

    }



    return(

        <div className="container-fluid p-5 bg-secondary">

            <div className="bg-light row rounded p-4" style={{height:'500px'}}>

                <div className="col-6">

                    <div>

                        <div className="mb-4 d-flex justify-content-between">

                        <label className="form-label fw-bold">Loan Amount</label>

                        <div className="position-relative">

                            <span style={{left:'10px'}} className="position-absolute">&#8377;</span> <input onChange={handleAmountChange} value={amount} size={10} className="ps-4" type="text" />   

                        </div>

                        </div>

                        <div>

                            <input type="range" min={100000} max={1000000} step={10000} value={amount} onChange={handleAmountChange} className="form-range" />

                            <span>&#8377; 1,00,000/-</span>

                            <span className="float-end">&#8377; 10,00,000/-</span>

                        </div>     

                    </div>

                    <div className="mt-4">

                        <div className="mb-4 d-flex justify-content-between">

                        <label className="form-label fw-bold">Loan Tenure</label>

                        <div className="position-relative">

                             <input className="ps-4" type="text" size={2} value={years} onChange={handleYearChange} />   

                        </div>

                        </div>

                        <div>

                            <input type="range" min={1} max={5} step={1} value={years}  onChange={handleYearChange} className="form-range" />

                            <span>1 Year</span>

                            <span className="float-end">5 Years</span>

                        </div>     

                    </div>



                    <div className="mt-4">

                        <div className="mb-4 d-flex justify-content-between">

                        <label className="form-label fw-bold">Interest Rate</label>

                        <div className="position-relative">

                             <input className="ps-4" type="text" value={rate} size={4} onChange={handleRateChange} />   

                        </div>

                        </div>

                        <div>

                            <input type="range" min={10.45} max={18.45} value={rate} step={0.01} onChange={handleRateChange}  className="form-range" /> 

                            <span>10.45%</span>

                            <span className="float-end">18.45%</span>

                        </div>     

                    </div>

                </div>

                <div className="col-6">

                     <h3 className="ps-5">Monthly Installment</h3>

                     <div className="ps-5  fs-1 fw-bold">

                            {emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}

                     </div>

                </div>

            </div>

        </div>

    )

}



 Button Events    

   onClick                            left button single click

   onDoubleClick                left button double click

   onContextMenu            right button single click 



 Ex: button-demo.jsx





export function ButtonDemo(){



    function handleDoubleClick(){

        window.open('iphone-marine.webp', 'iphone', 'width=300 height=400');

    }

    function handleContextMenu(){

        document.oncontextmenu = function(){

            alert('Right Click Disabled');

            return false;

        }

    }



    return(

        <div className="container-fluid" onContextMenu={handleContextMenu} style={{height:'1000px'}}>

            <img src="iphone-marine.webp" onDoubleClick={handleDoubleClick} width={100} height={100} />

            <p>Double click to view large</p>

        </div>

    )

}



 Clipboard Events

   onCut

   onCopy

   onPaste



  Touch Events

   onTouchStart

   onTouchEnd 

   onTouchMove 



       <img onTouchStart={ }>   </img>



       <img>    == preview



   1. Visit the website “https://openweathermap.org/“



   2. Register a new account 



   3. Signin => Go to your profile => Select “My API Keys”



   4. Copy and save API key in any text document 

           1318ca6725c69160d346c41fc0612596            



   5. Go to API’s category => Select Current weather data => API Docs



       Built-in API request by city name

       https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Class c
