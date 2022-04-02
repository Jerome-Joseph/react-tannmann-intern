import axios from 'axios'
import React, { useRef } from 'react'

const Login = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn =(e)=>{
        e.preventDefault();

        var data = JSON.stringify({
            "email": emailRef.current.value,
            "password": passwordRef.current.value
          });
          
          var config = {
            method: 'post',
            url: 'https://ttmg-backend.herokuapp.com/api/auth/staffLogin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (errors) {
            alert(errors.message)
          });
          
    }

  return (
    <div className='container'>
        <h3 className='text-center mt-5'>Login</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button onClick={signIn} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login