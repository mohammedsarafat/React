Mouse and Key Events
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:39 PM
Synthetic Events

 Event Handler 

 Event Args 

 Mouse Events

 

https://cssloaders.github.io/



 Ex: Mouse Down and Up 

 

 1. Mouse-demo.css 



@keyframes Spin 

{

     from {

        transform: rotate(0deg);

     }

     to {

        transform: rotate(360deg);

     }

}



2. Mouse-demo.jsx



import { useState } from 'react';

import './mouse-demo.css';



export function MouseDemo(){



    const [styleObj, setStyleObj] = useState({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});



    function handleMouseUp(){

        setStyleObj({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'})

    }

    function handleMouseDown(){

        setStyleObj({animationName:'Spin', animationDuration:'1s', animationIterationCount:'infinite', animationTimingFunction:'linear'})

    }



    return(

        <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>

            <img src='react.svg' onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} style={styleObj} width={200} height={200} />

        </div>

    )

}



 Ex:

import { useState } from 'react';



export function MouseDemo(){



    const [styleObj, setStyleObj] = useState({position:'fixed', left:'', top:''});



    function handleMouseMove(e){

        setStyleObj({

            position:'fixed',

            left: e.clientX + 'px',

            top: e.clientY + 'px'

        })

    }



    return(

       <div onMouseMove={handleMouseMove}>

         <div className='container-fluid' style={{height:'1000px'}}>

             X : {styleObj.left}

             <br></br>

             Y : {styleObj.top}

         </div>

         <img width={50} style={styleObj} height={50} src='flag.gif' />

       </div>

    )

}



 2. Keyboard Events

       onKeyUp

       onKeyDown

       onKeyPress [Obsolete - no longer in use]



     Note:

       - KeyUp & KeyDown are good for handling chars.

       - Key Press is good for handling char code.



Ex:

 1. Public/users.json



[

    {

        "user_id": "john"

    },

    {

        "user_id": "john12"

    },

    {

        "user_id": "john_nit"

    },

    {

        "user_id": "david"

    }

]

   

 2. key-demo.jsx



import axios from "axios";

import { useEffect, useState } from "react"





export function KeyDemo(){



    const [users, setUsers] = useState([{user_id:''}]);

    const [statusMsg, setStatusMsg] = useState('');

    const [errorClass, setErrorClass] = useState('');

    const [progress, setProgress] = useState('');

    const [progressWidth, setProgressWidth] = useState({width:''});

    const [progressMsg, setProgressMsg] = useState('');



    function LoadUsers(){

        axios.get('users.json')

        .then(response=>{

            setUsers(response.data);

        })

    }



    useEffect(()=>{

        LoadUsers();

    })



    function VerifyUserId(e){

        for(var user of users){

            if(user.user_id===e.target.value){

                setStatusMsg('User Id Taken - Try Another');

                setErrorClass('text-danger');

                break;

            }  else {

                setStatusMsg('User Id Available');

                setErrorClass('text-success');

            }

        }

    }



    function VerifyPassword(e){

         if(e.target.value.match(/^(?=.*[A-Z])\w{4,15}$/)){

             setProgress('progress-bar progress-bar-animated progress-bar-striped bg-success');

             setProgressWidth({width:'100%'});

             setProgressMsg('Strong');

         } else {

             if(e.target.value.length<4){

                setProgress('progress-bar progress-bar-animated progress-bar-striped bg-danger');

                setProgressWidth({width:'20%'});

                setProgressMsg('Poor');

             } else {

                setProgress('progress-bar progress-bar-animated progress-bar-striped bg-warning');

                setProgressWidth({width:'70%'});

                setProgressMsg('Weak');

             }

         }

    }



    return(

        <div className="container">

            <h2>Register User</h2>

            <dl className="w-25">

                <dt>

                    User Id

                </dt>

                <dd>

                    <input type="text" onKeyUp={VerifyUserId} className="form-control" />

                </dd>

                <dd className={errorClass}>{statusMsg}</dd>

                <dt>Password</dt>

                <dd><input type="password" onKeyUp={VerifyPassword} className="form-control" /></dd>

                <dd className="progress">

                    <div className={progress} style={progressWidth}>

                        {progressMsg}

                    </div>

                </dd>

            </dl>

        </div>

    )

}
Class c
