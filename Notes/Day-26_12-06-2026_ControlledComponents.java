Ex: Location Based Access



 window.navigator.geolocation.getCurrentPosition((position)=>{

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)

            .then(response=>{

                setWeatherObj(response.data);

            })

        })

   



                                          Controlled Components

   - A controlled component is managed by using the data from parent. 

   - It is not used directly.

   - It is always used as child component. 

   - Data is transported from parent to child component by using “Props”. 

   

   Syntax:

               function Child(props)

               {

                       return <> JSX </>

               }





   - “Props” is an object type, with key and value collection. 

   

               { props.key }



               <Child    key={value} />



 Ex:

  1. Add a new folder “controlled-components” into src



           controlled-components/navbar.jsx



   

export function Navbar(props){

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

   



 2. Components/props-demo.jsx



import { Navbar } from "../../controlled-components/navbar";



export function PropsDemo(){

    return(

        <div className="container-fluid">

            <h3>Shopping App</h3>

            <Navbar brandIcon='bi bi-cart4' theme='bg-dark text-white' brand="E-Commerce" menuItems={['Home', 'Shop', 'Offers', 'Products', 'Cart']} searchString="eg: brands, products, price" />

            <h3>Weather App</h3>

            <Navbar searchDisplay="d-none" brandIcon="bi bi-cloud" brand="Weather Man" menuItems={['Your Location', 'Historic Data', 'Forecast']} searchString="eg: search by city" theme="bg-primary text-white" />

        </div>

    )

}



Ex: 

 1. Controlled-components/data-grid.jsx





export function DataGrid(props){

    return(

        <table className={`table ${props.width} table-hover table-striped caption-top`}>

            <caption>{props.caption}</caption>

            <thead>

                <tr>

                    {

                        Object.keys(props.data[0]).map(field=>

                            <th key={field}>

                                

                                <div className="dropdown">

                                    <button data-bs-toggle="dropdown" className="dropdown-toggle btn"> {field} </button>

                                    <ul className="dropdown-menu">

                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-funnel"> Filter</span> </span> </li>

                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"> Sort Decending</span> </span> </li>

                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"> Sort Ascending</span> </span> </li>

                                    </ul>

                                </div>

                            </th>

                        )

                    }

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    props.data.map((item,index)=>

                        <tr key={index}>

                           {

                             Object.values(item).map(val=>

                                <td key={val}>{val}</td>

                             )

                           } 

                           <td>

                            <button className="btn btn-outline-danger bi bi-trash"></button>

                            <button className="btn btn-outline-warning bi bi-pen mx-2"></button>

                            <button className="btn btn-outline-primary bi bi-eye"></button>

                           </td>

                        </tr>

                    )

                }

            </tbody>

        </table>

    )

}



 2. Components/props-demo.jsx



import { useState } from "react";

import { Navbar } from "../../controlled-components/navbar";

import { DataGrid } from "../../controlled-components/data-grid";



export function PropsDemo(){





    const [products] = useState([{Name:'TV', Price:34000, Rating:4.2}, {Name:'Mobile', Price:56000, Rating:3.5}]);

    const [employees] = useState([{FirstName:'Raj', LastName:'Kiran', Designation:'Developer', Salary:50000}])



    return(

        <div className="container-fluid">

           <DataGrid caption="Product Details" width="w-50" data={products} />

           <DataGrid caption="Employees" data={employees} width='w-100' />

        </div>

    )

}
