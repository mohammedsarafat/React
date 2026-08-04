Conditional Render and Forms
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:47 PM
Controlled Components

 Props

 Context API

 Conditional Rendering 

  

  2. A component can render and return different JSX element according to the 

     specified condition. 



    Syntax:

               export function Controlled(props)

               {

                    if(props=condition) {



                           return ( <JSX1> </JSX1>);

                   }

                   else {

                           return ( <JSX2> </JSX2>);

                   }

               }



  Ex: Navbar.jsx



export function Navbar(props){

     if(props.orientation==='horizontal'){

        return(

        <nav className={`border border-1 border-secondary ${props.theme} align-items-center p-3 d-flex justify-content-between`}>

            <span className={`fs-4 fw-bold ${props.brandIcon}`}> {props.brand} </span>

            <div>

                {

                    props.menuItems.map(item=><span className="mx-4" key={item}> {item} </span>)

                }

            </div>

            <div className={props.searchDisplay}>

                <div className="input-group">

                    <input type="text" placeholder={props.searchString} className="form-control"/>

                    <button className="btn btn-warning bi bi-search"></button>

                </div>

            </div>

            <div>

                <span className="bi bi-person"> Signin</span>

            </div>

        </nav>

    )

     }

     else {

        return(

            <nav style={{width:'150px', height:'400px'}} className={`d-flex p-2 border border-2 flex-column justify-content-between align-items-baseline`}>

                <div className="fs-4 fw-bold my-3">{props.brand}</div>

                <div>

                 <ul className="list-group">

                  {

                     props.menuItems.map(item=>

                        <li key={item} className="list-group-item w-100 list-group-item-danger my-2">{item}</li>

                     )

                  }

                </ul>

                </div>

                <div>

                    <button className="btn w-100 btn-warning bi bi-person">Signin</button>

                </div>

            </nav>

        )

     }

}



  render-demo.jsx



import { Navbar } from "../../controlled-components/navbar";



export function RenderDemo(){

    return(

        <div className="container-fluid">

            <h2>Conditional Render</h2>

            <Navbar orientation="vertical" brand="Amazon" menuItems={['Home', 'Products', 'Shop', 'About']} />

        </div>

    )

}



 Task:  render-demo.jsx



import { useState } from "react";

import { Navbar } from "../../controlled-components/navbar";



export function RenderDemo(){

    const [data] = useState([{Name:'TV', Price: 23000}, {Name:'Mobile', Price:12000}]);

    const [toggle, setToggle] = useState('save');

    const [toggleText, setToggleText] = useState('Edit');

    const [toggleClass, setToggleClass] = useState('btn btn-warning bi bi-pen-fill');



    function handleToggleClick(){

        if(toggleText==='Edit'){

            setToggleText('Save');

            setToggleClass('btn btn-success bi bi-floppy-fill');

            setToggle('edit');

        } else {

            setToggleText('Edit');

            setToggleClass('btn btn-warning bi bi-pen-fill');

            setToggle('save');

        }

    }

    function handleDoubleClick(){

        handleToggleClick();

    }

    return(

        <div className="container-fluid">

            <h2>Conditional Render</h2>

            <table className="table table-hover">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Price</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                   {

                     data.map(item=><tr key={item.Name}>

                         <td onDoubleClick={handleDoubleClick}> {(toggle==='save')?<label >{item.Name}</label>:<input onBlur={handleDoubleClick} type="text" value={item.Name} />} </td>

                         <td>

                            {(toggle==='save')?<label>{item.Price}</label>:<input type="text" value={item.Price} />}

                         </td>

                         <td>

                            <button onClick={handleToggleClick} className={toggleClass}> {toggleText} </button>

                            

                         </td>

                     </tr>)

                   }

                </tbody>

            </table>

        </div>

    )

}



   Form Events

       onSubmit

       onReset 



       <form onSubmit={ }   onReset={ }>



               <button type=“submit”> </button>

               <button type=“reset”> </button>



       </form>



  Ex:  form-demo.jsx



import { useState } from "react"





export function FormDemo(){



    const [uname, setUname] = useState('');

    const [age, setAge] = useState(0);



    function handleNameChange(e){

        setUname(e.target.value);

    }

    function handleAgeChange(e){

        setAge(parseInt(e.target.value));

    }



    function handleSubmit(e){

        e.preventDefault();

        console.log({UserName:uname, Age:age});

    }



    return(

        <div className="container-fluid">

            <h2>Register User</h2>

            <form onSubmit={handleSubmit}>

                <dl>

                    <dt>User Name</dt>

                    <dd><input type="text" onChange={handleNameChange} /></dd>

                    <dt>Age</dt>

                    <dd><input type="number" onChange={handleAgeChange} /></dd>

                </dl>

                <button>Submit</button>

            </form>

        </div>

    )

}



   - React 18+ versions provided “FormData”. 

   - It is a collection of key and value.

   - Technically it is a Map type. 

   - The element name is used as Key and its Value as value. 

   

   Syntax:

               let data = new FormData(e.target);       // ‘e’ refers to form element

               data.get(‘key’);        // key refers to field name



 Ex: Form-demo.jsx



import { useState } from "react"





export function FormDemo(){



   

    function handleSubmit(e){

        e.preventDefault();

        let data = new FormData(e.target)

        console.log({UserName:data.get('UserName'), Age:parseInt(data.get('Age')), City:data.get('City'), Gender: data.get('Gender')});

    }



    return(

        <div className="container-fluid">

            <h2>Register User</h2>

            <form onSubmit={handleSubmit}>

                <dl>

                    <dt>User Name</dt>

                    <dd><input type="text" name="UserName"  /></dd>

                    <dt>Age</dt>

                    <dd><input type="number" name="Age"  /></dd>

                    <dt>City</dt>

                    <dd>

                        <select name="City">

                            <option>Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" name="Gender" value="Male" / > Male

                        <input type="radio" name="Gender" value="Female" / > Female

                    </dd>

                </dl>

                <button>Submit</button>

            </form>

        </div>

    )

}
Class comments
