import {React, useState } from 'react'
import{ Container , Row , Col,Card,Form,Button }from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import logos from '../assets/1.png'


export default function SignUP(){
  
  const [email , setEmail] = useState('gowtham015@gmail.com')
  
  const navigate = useNavigate()

  
  function signupp(){
    alert("Account Created Successfully")
    navigate('/')
  }

    return(


        <div className='auth-container'>


            <Container >


            <Row>
            <Col style={{padding:'75px'}} className='auth-inner-container'  >
            <img src={logos} height={500} width={450}/>
            </Col>
            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'75px' }} className='auth-inner-container'>
            <div>
            <Card style={{width: '20rem',height:'25rem'}} >
            <Card.Body >
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
            value={email} />
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value='147852369'/>
       </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re-Enter Password" />
      </Form.Group>
      
      <Button  style={{backgroundColor:'#f54236', border:'none',width:'100%'}} variant="primary" type="submit" onClick={signupp}>
        Sign up
      </Button>
      <div style={{textAlign:'center' ,marginTop:'0.5rem'}}>Already Have an Account? <Link to='/'>login</Link></div>
      
    </Form>
    </Card.Body>
   </Card>
      </div>
                        
    </Col>
                    
    </Row>


      </Container>
    </div>
    )
}