import React from 'react'
import {  useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const id = useSelector((state) => {
    return state.product.id;
  })
  
  const [form, setForm] = useState();
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  console.log(id);

const handleSubmit = async (e) => {
  e.preventDefault();
  const first_name = e.target[0].value;
  const street = e.target[1].value;
  const city = e.target[2].value;
  const email = e.target[3].value;
  const last_name = e.target[4].value;
  const address = e.target[5].value;
  const state = e.target[6].value;
  const phone = e.target[7].value;
    
    
    
    await axios.post(`http://localhost:3001/update/${id}`, { first_name, street, city, email, last_name, address, state, phone } )
        .then((res) => {
            setToken(res.data);
            navigate('/show');  
        });
        console.log(first_name);  
  }
  



return (
  <div className="container mt-5">
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            
            <div className="row"> 
              <h1 className='offset-3'>Customer Details</h1>
        
        
                <div className="col-md-5 mt-3">
                  <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label">Enter the first name</label>
                  <input type="text" className="form-control" name="first_name" id="exampleInputText1" aria-describedby="emailHelp"/>
                  </div>
                      
                  <div className="mb-3">
                  <label htmlFor="exampleInputLast1" className="form-label">Enter the Street</label>
                  <input type="text" className="form-control" name="street" id="exampleInputLast1" aria-describedby="emailHelp"/>
                  </div>
                      
                  <div className="mb-3">
                  <label htmlFor="exampleInputCity1" className="form-label">Enter the city</label>
                  <input type="text" className="form-control" id="exampleInputCity1" name="city" aria-describedby="emailHelp"/>
                  </div>      

                  <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>      
              </div>
              
                  <div className="col-md-5 mt-3">
                      <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Enter Last Name</label>
                      <input type="text" className="form-control" id="exampleInputPassword1" email="last_name"/>
                      </div>
                          
                      <div className="mb-3">
                      <label htmlFor="exampleInputAddress1" className="form-label">Enter the Address</label>
                      <input type="text" className="form-control" id="exampleInputAddress1" aria-describedby="emailHelp"/>
                      </div>

                      <div className="mb-3">
                      <label htmlFor="exampleInputState1" className="form-label">Enter the State</label>
                      <input type="text" className="form-control" id="exampleInputState1" name="state" aria-describedby="emailHelp"/>
                      </div>      

                      <div className="mb-3">
                      <label htmlFor="exampleInputPhone1" className="form-label">Enter the Phone</label>
                      <input type="text" className="form-control" id="exampleInputPhone1" name="phone" aria-describedby="emailHelp"/>
                  </div>
              </div>
                          
              </div>        
                    
            <button type="submit" className="btn btn-primary offset-10">Submit</button>
            
        </form>
        
          
      
    </div>
)
}

export default Update