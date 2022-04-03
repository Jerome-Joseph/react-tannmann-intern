import React, { useRef} from 'react'
import {
    Link
  } from "react-router-dom";
  import axios from 'axios'

const SignUp = () => {

    const nameRef = useRef(null)
    const mobileRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signUp =(e)=>{
        e.preventDefault();

        var data = JSON.stringify({
            "email": emailRef.current.value,
            "password": passwordRef.current.value,
            "name": nameRef.current.value,
            "mobile": mobileRef.current.value
          });
          
          var config = {
            method: 'post',
            url: 'https://ttmg-backend.herokuapp.com/api/auth/staffRegister',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert("Siggned Up Successfully");
          })
          .catch(function (error) {
            alert(error);
          });
    }

  return (
    <div className='container'>
        <h3 className='text-center mt-5'>Sign Up</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input ref={nameRef} type="text" className="form-control" id="name" aria-describedby="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input ref={mobileRef} type="text" className="form-control" id="mobile" aria-describedby="mobile"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button onClick={signUp} type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to ="/">
          <div className="mt-3 ">
            Created an account? Try Logging In here
          </div>
        </Link>
    </div>
  )
}

export default SignUp