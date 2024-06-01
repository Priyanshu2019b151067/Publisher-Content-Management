import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setPosts } from '../state';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Publisher() {
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const [publishState,setpublishState] = useState({
        title : '',
        description : '',
        price : ''
    });
    const [messageDescription,setmessageDescription] = useState('');
    const [messageTitle,setmessageTitle] = useState('');
    const [messagePrice,setmessagePrice] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(publishState);
        if(publishState.title === ''){
            setmessageTitle('Specify product title.');
            return;
        }
        if(publishState.description === ''){
            setmessageDescription('Specify product description.');
            return;
        }
        if(publishState.price ===''){
            setmessagePrice('Specify product price.');
            return;
        }
        setmessageTitle('');
        setmessageDescription('');
        setmessagePrice('');
        
        const response = await axios.post('http://localhost:3000/product/create',publishState);
        console.log(response.data.posts);
        dispatch(setPosts({
            posts : response.data.posts
        }));
        if(response.status === 201){
            navigate('/home');
        }
        setpublishState({
            title : '',
            description : '',
            price : ''
        });
    }
    const handleChange = (e) =>{
       const {name,value} = e.target;
       console.log(name);
       console.log(value);
       setpublishState({...publishState,[name] : value});
    }
    return (
        <div className='container-fluid'>
          <h1 className='text-center' style={{color :'gray'}}>Publisher Page</h1>
       <div className='row' >
        <div className='col-2'></div>
       <div className='col-8'>
       <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={publishState.title} onChange={handleChange} />
          <Form.Text className="text-muted">
              {messageTitle}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name='description' placeholder="Write Description" value ={publishState.description} onChange={handleChange} />
            <Form.Text className="text-muted">
               {messageDescription}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={publishState.price} onChange={handleChange} />
          <Form.Text className="text-muted">
            {messagePrice}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
  
       </div>
       <div className='col-2'></div>
  
  
       </div>
       
      </div>
    )
}

export default Publisher