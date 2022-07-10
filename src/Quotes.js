import React from 'react'
import Button from '@mui/material/Button';

function Quotes() {
  return (
    <div className="quotes_section">
    <div className="container"> 
    <div className="row text-left">
        <div className="col-lg-7">
            <h3 className="text-white mb-10">Nepal’s Best Sourcing Marketplace</h3>
            <div className="row">
                <div className="col-lg-6 col-6">
                    <p className="fs-17">21,42,278+ <br/>
                        RFQs in 7 days
                        </p>
                </div>
                <div className="col-lg-6 col-6">
                    <p className="fs-17">21,42,278+ <br/>
                        RFQs in 7 days
                        </p>
                </div>
                <div className="col-lg-6 col-6">
                    <p className="fs-17 ml-30 mt-3">21,42,278+ <br/>
                        RFQs in 7 days
                        </p>
                </div>
                <div className="col-lg-6 col-6">
                    <p className="fs-17 ml-30 mt-3">21,42,278+ <br/>
                        RFQs in 7 days
                        </p>
                </div>
            </div>
        </div>
        <div className="col-lg-5">
            <form className="bg-white pt-6 pl-3 pb-6 pr-3">
                <h3 className=" mb-6 font-main-color">One Request Multiple Quotes.</h3>
                <div className="form-group">
               
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div className="form-row mt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                   
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                              </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                   
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                              </div>
                        </div>
                    </div>
                </div>
         
                <Button variant="contained" color="success" className='w-100 mt-4'>
        View All
      </Button>
              
              </form>
        </div>
    </div>
    </div>
</div>
  )
}

export default Quotes