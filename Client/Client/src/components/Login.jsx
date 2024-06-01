import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login() {
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const [loginState,setloginState] = useState({
        email : '',
        password : ''
    });
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/auth/login',loginState);
        console.log(response.data);
        dispatch(setLogin(
            {
                token : response.data.token,
                user : response.data.user
            }
            
        ));
        if(response.status === 200){
            navigate('/home');
        }
    }
    const handleChange = (e) =>{
       const {name,value} = e.target;
       setloginState({...loginState,[name] : value});
    }
  return (
      <div className='container-fluid'>
        <h1 className='text-center'>Login </h1>
     <div className='row' >
      <div className='col-2'></div>
     <div className='col-8'>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="email" value={loginState.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={loginState.password} onChange={handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
     <Link to={'/signup'} style={{textDecoration : 'none'}}> Create a Account</Link>
    </Form>

     </div>
     <div className='col-2'></div>


     </div>
     
    </div>
  )
}

export default Login