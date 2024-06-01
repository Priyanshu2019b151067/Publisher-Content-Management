import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
    
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const [signupState,setsignupState] = useState({
        userName : '',
        email : '',
        password : ''
    });
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/auth/register',signupState);
        console.log(response.data);
        dispatch(setLogin(
            {
                token : response.data.token,
                user : response.data.savedUser.userName
            }
            
        ));
        if(response.status === 201){
            navigate('/home');
        }
    }
    const handleChange = (e) =>{
       const {name,value} = e.target;
       setsignupState({...signupState,[name] : value});
    }
    return (
        <div className='container-fluid'>
          <h1 className='text-center'>Signup </h1>
       <div className='row' >
        <div className='col-2'></div>
       <div className='col-8'>
       <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formUserId">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" name="userName" value={signupState.userName} onChange={handleChange} required />
          <Form.Text className="text-muted">
            Please Provide UserName
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="email" value={signupState.email} onChange={handleChange}  required/>
          <Form.Text className="text-muted">
            Please Provide Email.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={signupState.password} onChange={handleChange} required/>
        </Form.Group>
      
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Link to={'/'} style={{textDecoration : 'none'}}>  Already have a account</Link>
      </Form>
  
       </div>
       <div className='col-2'></div>
  
       
  
       </div>
       
      </div>
    )
}

export default Signup