Data Handling 
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
8:46 PM
Summary 

   - Module System 

   - UMD, AMD, Common JS, ESModule 

   - Reusability, Extensibility, Separation, Testability etc.

    - export, default export, import 

   - aliasing 

   - components in React 



   Handling data for component

   - Data is handled in Javascript by using variables. 

   - They configure local memory for a page and can store data. 

   - However variables are immutable types and not good for components where 

     the state is changing. 

   - React uses state for handling data. 

   - React local state is configure by using a hook called “useState()”. 

   - Hook is a predefined function of React. 

   - useState() configures memory to store data, which is accessible only to current

     component. 

       

                       can we access from child ? NO

                       can we access from another component ? NO



   Syntax:



                   const [getter, setter] = useState();



                   getter            : It can read and return value

                   setter            : It can store a new value



                   const [age, setAge] = useState(22);

                   const [price, setPrice] = useState(35000);

                   const [name, setName] = useState(‘John’);



    - You can bind any dynamic value to UI elements using a binding expression “{ }”. 



                   <p> Hello ! {name} </p>

                   <input type=“text” value={price} />

                   <select value={age}>

               

     FAQ’s:

       1. Why you are using “const” for state? Can we use var & let?

       A. Yes use can use  var & let for state. But not recommended.

           “const” is always recommended for state. 

            State requires mandatory initialization, it can’t skip initialization. 

            

       2. If you configure state with const then how you can add new values?

       A. You can’t assign to a constant, but you can re-initialize into constant. 



               Syntax:

                   const [uname, setName] = useState(‘John’);

   

                   setName = “David”;       // invalid 

                   setName(“David”);         // valid 



   

       3. When to set a value into state?

       A. Always recommended  to set value into state while mounting the component

           or on any specific event in component. 



       4. How to write the mount phase?

       A. By using the hook “useEffect()”.



       Syntax:

                   useEffect(()=>{

                           setState(value);

                   })



      React one way data binding

       - It is the technique of accessing data from source and binding to UI elements.

       - The UI element is considered as read-only until configured with “onChange”

          event. 

       - You can bind any type of data.

       - Javascript primitive and non-primitive types are allowed in React. 



       1. Primitive Types

               - number

               - string

               - boolean

               - null

               - undefined 

               - symbol 

               - big int 

   

       2. Non Primitive Types

               - Array

               - Object

               - Map

               - Set
