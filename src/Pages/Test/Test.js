import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
//use state is a hook and use in react functional component whwn we need state
const Test = () => {
    var myInterval = null
  // Array destructuring
  // var [n1,n2,n3] = [1,2,3]
 
  var [counter, setCounter] = useState(0);

  //for email and password
//   var [email, setEmail] = useState("email");
//   var [password, setPassword] = useState("password");

// Form containing more than one field
var [myForm, myFormValueSetter] = useState({
    email:'',
    password:''
})
 

var handleFormInput = (e)=>{
     var {name,value} =e.target
    myFormValueSetter((prevState)=>({
        ...prevState,
        [name]:value
    }))
 }

 var {email,password} = myForm;

//  this.setState automerges the remaining properties of the form whereas the useState don't mege it we have to merge it by
// using spread operator

 //console.log(myForm)
 //useEffect is a hook which is used for lifecycle methods
  //useEffeffect takes callback function in its argument.
//   jab state change hogi to useEffect k andar likha hua callback call hoga
// useEffect(()=>{
//     console.log("Hello World")
//     // if a dependency array contains an argument it works like shouldComponentUpdate()
// },[counter,myForm])

// useEffect(()=>{
//     console.log("Hello World")
//     // if a dependency array is Empty it works like ComponentDidMount()
// },[])

// useEffect(() => {
// return () => {
//     //if a callback function returns another function this another function works like componentWillUnmount()
//     console.log("m out")
// }
// },[])

useEffect(() => {
    console.log("component mounted")
    myInterval = setInterval(() => {
        console.log("hello")
    }, 200);
    return () => {
 console.log("component unmounted")
 clearInterval(myInterval)
    }
    },[])
  return (
    <div>
      <h1>Test Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{counter}</h1>
      {/* set counter directly */}
      {/* <button onClick = {()=> setCounter(counter + 1)}>+</button>
            <button onClick = {()=> setCounter(counter - 1)}>-</button> */}
      {/* set counter on the basis of prevState */}
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevValue) => prevValue - 1)}>
        -
      </button>

      {/* useState i handling Forms  */}
      <form>
        {/* <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input> */}

        {/* If a form contains more than one field */}
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleFormInput}
        ></input>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleFormInput}
        ></input> 
      </form>
    </div>
  );
};

export default Test;
