import React from 'react'
import Button from '@mui/material/Button';

function Register() {
  return (
    <div className="login_container pt-10 pb-10">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column">
             
                <img src="http://127.0.0.1:5500/assets/images/forgotpassword.svg" className='w-350'/>
            </div>
            <div className="col-lg-6 d-flex align-items-center flex-column">
                <div className="loginform text-left">
                    <form>
                        <h3>Forgot Your Password?</h3>
                        <p>Don’t worry! Just fill in your email and we’ll help you reset your password.
                        </p>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                     
                   
                   
                        <Button variant="contained" color="success" className='w-100 mt-5'>
        SUBMIT
      </Button>                         </form>
                </div>
             
              
            </div>
        </div>
    </div>

</div>
  )
}

export default Register