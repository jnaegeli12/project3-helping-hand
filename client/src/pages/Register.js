import React, { useState } from 'react';
import Header from '../components/Header';
import Axios from 'axios';

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    
  
    const register = () => {
      Axios.post('http://localhost:3301/register', {
        username: registerUsername,
        password: registerPassword,
      }).then((response) => {
        console.log(response);
      })
    }; 
    
    
   // const getUser = () => {
   //   axios({
   //     method: 'GET',
   //     withCredentials: true,
   //     url: 'http://localhost:3000/user',
   //   }).then((res) => {
   //     setData(res.data);
   //     console.log(res.data);
   //   });
   // };
    
    return (
        <div className='container container-fluid'>
        <Header headerName={ "Create a Profile" }/>
        <div className="container container-fluid col-6 d-flex justify-content-center">
            <form onSubmit={register}>
                <div className="form-group">    
                    <label
                        for="name">Username</label>
                    <input
                        name="username"
                        className="form-control"
                        placeholder='Username'
                        onChange={(e) => setRegisterUsername(e.target.value)}/>
                </div>
                <div className="form-group">    
                    <label     
                        for="name">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder='Password'
                        onChange={(e) => setRegisterPassword(e.target.value)}/>
                </div>
               {/* <div className="form-group">    
                    <label
                        for="name">Verify Password</label>
                    <input
                        name="newPassword"
                        className="form-control"
                        placeholder='Password'
                        onChange={(e) => setRegisterPassword(e.target.value)}/>
                </div>
              */} 
                <div className="form-group d-flex justify-content-around mb-3">    
                    Already have an account?<a href="/profile"> Login here</a>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={register} className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
  }
