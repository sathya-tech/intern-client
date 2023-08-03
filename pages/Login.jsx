import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
    const [form, setForm] = useState();
    const [token, setToken] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login_id = e.target[0].value;
    const password = e.target[1].value;
    const data = { login_id, password };
    
      await axios.post("http://localhost:3001", data)
          .then((res) => {
              setToken(res.data);
              navigate('/show');  
          });
  }
  
  return (
    <>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-3 mt-5 ">
          <h1 className='mb-5 offset-3'>LOGIN PAGE</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Login