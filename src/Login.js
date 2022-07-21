import React from 'react'
import Button from '@mui/material/Button';

function Login() {
  return (
    <div>
        <div className="login_container pt-10 pb-10">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column pt-10">
                <h3>Sign in to Vistaar Trade                    </h3>
                <h3>Get access to your <span className="autotype">New Orders</span></h3>
                <img src="http://brandio.io/envato/iofrm/html/images/graphic1.svg" className='w-350' />
            </div>
            <div className="col-lg-6 d-flex align-items-center flex-column">
                <div className="loginform text-left">
                    <form>
                        <h3>Login</h3>
                        <p>Get access to your Orders, Wishlist and Recommendations
                        </p>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group mt-4">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                   
                        <Button variant="contained" color="success" className='w-100 mt-5'>
        View All
      </Button>                      </form>
                </div>
             
                  <h4 className="mt-4 text-gray">Or Login With</h4>
                  <Button variant="contained" color="success" className='w-70 mt-3 btn-fb'>
        LOGIN WITH FACEBOOK
      </Button>                 
      <Button variant="contained" color="success" className='w-70 mt-4 btn-google'>
        LOGIN WITH GOOGLE
      </Button>            </div>
        </div>
    </div>

</div>

    </div>
  )
}

export default Login