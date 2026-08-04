Formik 
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:54 PM
Summary

   - Form Data

   

   Reference Memory 

   - You can use reference memory to store data of form elements. 

   - Reference memory is created by using useRef() hook. 

   - useRef() can create a reference memory.    - It can store data and use across multiple requests. 

   - It is intended to use the data implicitly. 

           

   1. You have to configure reference memory 



            let nameRef = useRef(‘ ’);



   2. Bind the reference to any element using “ref” property 



           <input ref={nameRef}>

           <select ref={cityRef}>



   3. You can access reference memory using “current” property of reference thread. 



           nameRef.current.value 



  Ex: Form-Demo.jsx



import { useRef, useState } from "react"





export function FormDemo(){



    let nameRef = useRef('');

    let ageRef = useRef(0);

    let cityRef = useRef('');

    let genderRef = useRef('');

   

    function handleSubmit(e){

        e.preventDefault();

        

        console.log({UserName:nameRef.current.value, Age: ageRef.current.value, City: cityRef.current.value, Gender: genderRef.current.value});

    }



    return(

        <div className="container-fluid">

            <h2>Register User</h2>

            <form onSubmit={handleSubmit}>

                <dl>

                    <dt>User Name</dt>

                    <dd><input type="text" ref={nameRef} name="UserName"  /></dd>

                    <dt>Age</dt>

                    <dd><input type="number" ref={ageRef} name="Age"  /></dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City" ref={cityRef}>

                            <option>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" ref={genderRef} name="Gender" value="Male" / > Male

                        <input type="radio" ref={genderRef} name="Gender" value="Female" / > Female

                    </dd>

                </dl>

                <button>Submit</button>

            </form>

        </div>

    )

}



                                                   3rd Party Form Libraries 

       1. Formik 

       2. Kendo Forms [Telerik]

       3. React Hook Form etc.



       Formik 

       - It provides built-in hook for handling form and validation.

       - It provides built-in events

               a) onChange

               b) onBlur

               c) onSubmit 

       - It provides security against XSRF. 

         [Cross Side Request Forgery]

       - It provides built-in components to design forms, validations etc.

        

       1. Install formik for your project 

   

               > npm  install  formik  --save 

   

       2. Import “useFormik” hook into component 



       3. Configure form 



               const   formik = useFormik({

                       initialValues: { },                    

                       validate: function() { },

                       validationSchema: object(),

                       onSubmit: function() { },

                       enableReinitialize: true / false

               })



               initialValues            : It defines the data to handle. 

               validate                    : It uses a custom validation function

               validationSchema    : It uses pre-defined validation services. 

               onSubmit                : It defines the actions to perform when form submitted. 

               enableReinitialize    : It is used to forms that handle edit operations. 



       4. Connect the formik reference with the form in UI.



               <form onSubmit={formik.handleSubmit}>        

                 <input type=“text” name=“UserName” onChange={formik.handleChange} />



               </form>



 Ex: form-demo.jsx



import { useRef, useState } from "react"

import { useFormik } from "formik"





export function FormDemo(){



    

    const formik = useFormik({

         initialValues: {

            UserName:'',

            Age:0,

            City:'',

            Gender:''

         },

         onSubmit: (user)=>{

            console.log(user);

         }

    })





    return(

        <div className="container-fluid">

            <h2>Register User</h2>

            <form onSubmit={formik.handleSubmit}>

                <dl>

                    <dt>User Name</dt>

                    <dd><input type="text" onChange={formik.handleChange} name="UserName"  /></dd>

                    <dt>Age</dt>

                    <dd><input type="number" onChange={formik.handleChange}  name="Age"  /></dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City" onChange={formik.handleChange} >

                            <option>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" onChange={formik.handleChange}  name="Gender" value="Male" / > Male

                        <input type="radio" onChange={formik.handleChange} name="Gender" value="Female" / > Female

                    </dd>

                </dl>

                <button type="submit">Submit</button>

            </form>

        </div>

    )

}



       Formik Validation

       - Validation is the process of verifying user input. 

       - Validation is required to ensure that contradictory and unauthorized data is not            get stored into database. 

       - You can configure custom validations or you can use built-in validation services. 

   

       Custom Validation

       - You can write your own validation function where you can verify the form data

         and report errors. 



       Syntax:

               function  ValidateUser(formdata)

               {

                        let errors = { }

                        // validation logic 

                       return errors;

               }



               const formik = useFormik({

                   initialValues : { },

                   validate: ValidateUser,

                   onSubmit: ()=>{ }

               })

   

        - You can access errors by using “formik.errors” object.



               { formik.errors.fieldName } 



       - Validation is configure in 2 phases 

   

               a) Input State Validation

               b) Form State Validation 



       - Input State validation is used to verify every field individually. 

       - Form State validation is used to verify all field simultaneously at the same time. 

       - The form state validation is default and fires up on “change” event. 

       - If you want to trigger on blur. You have to configure blur.



           <input onChange={formik.handleChange}  onBlur={formik.handleBlur} />



       - You have to use various form state services 

           

               a) touched            : focus and blur

               b) dirty                    : value modified

               c) isValid                : all fields are valid 



 Ex: form-demo.jsx



import { useRef, useState } from "react"

import { useFormik } from "formik"





export function FormDemo(){



    function ValidateUser(user){

        let errors = {};



        if(user.UserName.length===0){

            errors.UserName = "User Name Required";

        } else {

            if(user.UserName.length<4){

                errors.UserName = "Name too short";

            }

        }



        if(user.Age===0){

            errors.Age = "Age Required";

        } else {

            if(isNaN(user.Age)){

                errors.Age = "Age must be a number";

            }

        }



        if(user.City===''){

            errors.City = "City Required";

        } 



        if(user.Gender===''){

            errors.Gender = "Gender Required";

        }





        return errors;

    }

    

    const formik = useFormik({

         initialValues: {

            UserName:'',

            Age:0,

            City:'',

            Gender:''

         },

         validate: ValidateUser,

         onSubmit: (user)=>{

            console.log(user);

         }

    })





    return(

        <div className="container-fluid">

            <h2>Register User</h2>

            <form onSubmit={formik.handleSubmit}>

                <dl>

                    <dt>User Name</dt>

                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName"  /></dd>

                    <dd className="text-danger">{formik.errors.UserName}</dd>

                    <dt>Age</dt>

                    <dd><input type="number" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Age"  /></dd>

                    <dd className="text-danger">{formik.errors.Age}</dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City" onBlur={formik.handleBlur} onChange={formik.handleChange} >

                            <option value=''>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dd className="text-danger">{formik.errors.City}</dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Gender" value="Male" / > Male

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Gender" value="Female" / > Female

                    </dd>

                    <dd className="text-danger">{formik.errors.Gender}</dd>

                </dl>

                <button type="submit" disabled={(formik.isValid)?false:true} >Submit</button>

                <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>

                

            </form>

        </div>

    )

}
Class comments
