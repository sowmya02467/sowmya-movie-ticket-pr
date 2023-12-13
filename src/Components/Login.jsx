import{ React,  useState } from "react"
import  {Container,Row,Col,Card,Form,Button} from "react-bootstrap"
import { Link,useNavigate } from "react-router-dom"
import '../App.css'
import LoginPageImage from '../assets/1.png'

 





export default function Login({setUser}){
 const[email,setEmail]=useState('gowtham015@gmail.com')
 const navigate=useNavigate();

 const handleLogin=()=>{
    localStorage.setItem('userEmail',email)
    setUser(email)
    navigate('/home')
 }


  
 
 return(

        <div className='auth-container'>

            <Container>
                <Row>
                    <Col className="auth-inner-container">
                        <img src={LoginPageImage} height={500} width={300} />
                    </Col>
                    <Col className='auth-inner-container'>
                        <Card style={{width:'23rem',padding:25}} >
                            <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label >Password</Form.Label>
                                    <Form.Control value={147852369}type="password" placeholder="Password" />
                                </Form.Group>
      
                                <Button  variant="primary" type="submit" className="login-btn" onClick={()=>handleLogin()}>
                                 Login
                                </Button>
                            </Form>
                            <div style={{display:'flex',marginTop:25,justifyContent:'center'}}>New here? Please <Link to='/signup' style={{marginLeft:8}}>signup</Link></div>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            

        </div>
    )
}
