Date Type & API
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Yesterday
Summary

   - Array    

   - Object



 Handling Date & Time

 - Configuring date and time is same as in JS. 

 - It is defined by using “Date()” constructor. 



           const  [now]  = useState(new Date());

           const  [departure] = useState(new Date(“yy-mm-dd hrs:min:sec.milliSec”));



 - To access date and time you can use the methods



           getHours()                    setHours()

           getMinutes()                    setMinutes()

           getSeconds()                setDate() etc..

           getMilliSeconds()

           getDate()

           getDay()

           getMonth()

           getFullYear()

           toDateString()

           toLocaleDateString()

           toTimeString()

           toLocaleTimeString()  etc.



  - React can use various 3rd party libraries to present and manipulate date.

           a) moment 

           b) dayjs 

           c) luxon 



   Ex: 

   1. Install “moment” library for your project 



            > npm  install   moment   --save



   2. Import moment into any component 



           import  moment  from “moment”;



           { moment(“your_date”).format(“any_format”) }





           d            weekday number 1=Monday 

           ddd        short weekday name  “Mon”

           dddd        long weekday name “Monday”



           D            single digit date number 

           DD        2 digits date number 



           MM        Month number 

           MMM    short month name

           MMMM long month name 

           

           yy            Full year 2026

           YY        short year number 26

           YYYY    long year number 2026



           https://momentjs.com/



           Syntax:

               const [now] = useState(new Date());



               { moment(now).format(‘dddd, DD MMMM yyyy’) }



   Setup Bootstrap for React project: 

   

   1. Install bootstrap for project



               > npm install bootstrap bootstrap-icons --save



   2. Go to “main.jsx” and import bootstrap 



               import “../node_modules/bootstrap/dist/css/bootstrap.css”;

               import “../node_modules/bootstrap-icons/font/bootstrap-icons.css”;

               import “../node_modules/bootstrap/dist/js/bootstrap.bundle.js”;



   3. You can use bootstrap icons, components and classes from any location 



               <div className=“m-2 p-2”  data-bs-target=“#”>



                                               Working with API’s 



   1. What is distributed computing?

       - It allows communication between two applications running on two different 

         machines.

       - It allows communication between two application running in two different process

         on same machine. 



   2. What are various distributed technologies?

       

               CORBA                    14 languages C++, Java

               RMI                            J2EE

               EJB                            Java

               DCOM                        Visual Basic 

               Web Service            all languages 

               Remoting                    .NET 

   

   3. What is the communication specification?



           a) SOAP        

           b) REST

           c) JSON



       SOAP

       - Services Oriented Architecture Protocol 

       - Consumer sends XML request

               <Weather>

                   <City>

                       <Name> Hyderabad </Name>

                   </City>

               </Weather>

       - Provider sends XML response 

               <Weather>

                   <City>

                       <Name> Hyderabad </Name>

                       <Temp> 31deg </Temp>

                       <Humidity> 20% </Humidity>

                   </City>

               </Weather>

   

       REST

       - Representational State Transfer 

       - Consumer sends a simple query request 



                   https://www.weather.org?city=hyderabad 



       - Provider sends XML or JSON response. 



       JSON

       - Javascript Object Notation

       - Consumer sends JSON request        - Provider sends JSON response 



   4. What are issues with web service ?

       - It uses SOAP.

       - It can run only on web servers. 

       - It can use only http protocols. 

       

   5. What is API?

       - Application Programming Interface

       - It uses REST.

       - It can run on any server

       - It can use any protocol
Class comment
