Formik Components
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Jun 20
Form Data

 useRef()

 Ref

 useFormik()

 handleSubmit

 handleChange

 handleBlur

 dirty

 touched

 isValid 

 

             { formik.touched.fieldName && formik.errors.fieldName }



    Note: You can configure all events for element by using formik spread operator

             with getFieldProps() method. 



             <input type=“text” name=“UserName”  onChange={formik.handleChange} 

       onBlur={formik.handleBlur} />



             <input type=“text” name=“UserName” {…formik.getFieldProps(“UserName”)} />



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



        if(user.Mobile===''){

            errors.Mobile = "Mobile Required";

        } else {

            if(!user.Mobile.match(/^\+91\d{10}$/)) {

                errors.Mobile = "Invalid Mobile +91 10 digits required";

            }

        }





        return errors;

    }

    

    const formik = useFormik({

         initialValues: {

            UserName:'',

            Age:0,

            City:'',

            Gender:'',

            Mobile:''

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

                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName"  /></dd>

                    <dd className="text-danger">{ formik.touched.UserName && formik.errors.UserName}</dd>

                    <dt>Age</dt>

                    <dd><input type="number" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Age"  /></dd>

                    <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City" onBlur={formik.handleBlur} onChange={formik.handleChange} >

                            <option value=''>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Gender" value="Male" / > Male

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Gender" value="Female" / > Female

                    </dd>

                    <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>

                    <dt>Mobile</dt>

                    <dd><input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="Mobile" /></dd>

                    <dd className="text-danger">

                        {formik.touched.Mobile && formik.errors.Mobile}

                    </dd>

                </dl>



                <button type="submit" disabled={(formik.isValid)?false:true} >Submit</button>

                <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>

                

            </form>

        </div>

    )

}



                                               Yup Library for Validation

    - It is a validation schema library.

    - It provides pre-defined validation services. 

    - You can configure built-in validation services with Formik. 



    1. Install Yup for project 

           

                   > npm install yup --save



    2. You can import only specific service or all services from library 



                 import { required, min, max } from “Yup”;

       

                                           (or)



                 import  * as yup from “Yup”;



       

    3. Configure validation schema using formik 



               const formik = useFormik({

       

                       initialValues: { },

                       validationSchema: yup.object({



                                    fieldName: yup.dataType().required().min().max().email().url()

                           })



               })



    4. Rendering errors is same 



               { formik.touched.fieldName   &&   formik.errors.fieldName }



    5. All Event binding is same



               <form onSubmit={formik.handleSubmit}>



                   <input   {…formik.getFieldProps(“fieldName”) } />



 Ex:

import { useRef, useState } from "react"

import { useFormik } from "formik"

import * as yup from "yup";





export function FormDemo(){



    

    const formik = useFormik({

         initialValues: {

            UserName:'',

            Age:0,

            City:'',

            Gender:'',

            Mobile:''

         },

         validationSchema: yup.object({

             UserName: yup.string().required('Name Required').min(4,'Name too short'),

             Age: yup.number().required('Age Required').min(15,'Age min 15').max('30','Age max 30'),

             Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')

         }) ,

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

                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName"  /></dd>

                    <dd className="text-danger">{ formik.touched.UserName && formik.errors.UserName}</dd>

                    <dt>Age</dt>

                    <dd><input type="number" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Age"  /></dd>

                    <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City" onBlur={formik.handleBlur} onChange={formik.handleChange} >

                            <option value=''>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Gender" value="Male" / > Male

                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Gender" value="Female" / > Female

                    </dd>

                    <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>

                    <dt>Mobile</dt>

                    <dd><input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="Mobile" /></dd>

                    <dd className="text-danger">

                        {formik.touched.Mobile && formik.errors.Mobile}

                    </dd>

                </dl>



                <button type="submit" disabled={(formik.isValid)?false:true} >Submit</button>

                <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>

                

            </form>

        </div>

    )

}



   Note: Hooks are not allowed in class components. 

             Formik provides built-in components for form and validation. 

   

                           <Formik>

                           <Form>

                           <Field>

                           <ErrorMessage>



    Syntax:

           <Formik   initialValues={ }   validate={ }   validationSchema={ }  onSubmit={ }>



                   <Form>

           

                               <Field type=“text | number | email”> </Field>

                               <ErrorMessage />



                   </Form>



           </Form>





       - If you want to capture all form state services like touched, dirty, isValid then 

         create a reference form <Form> component. 



               <Formik>

                {

                     refName => <Form> </Form>

               }

             </Formik>



                   refName.touched

                   refName.dirty

                   refName.isValid 



                                           React Hook Form

    https://react-hook-form.com/



    1. Features of Hook Form

    2. Issues with Hook Form

    3. How to design a form using Hook Form library

    4. How to validate a form using Hook form library 

    5. How to collect data from form.
Class comments
