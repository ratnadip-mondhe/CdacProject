import React,{Component} from 'react';
import { Button ,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default class Login extends Component{
    render(){
    return(
        <Container className="p-5">
            <div className="card mx-auto  my-3 mr-3 shadow p-3 mb-5 bg-white rounded bg-" style={{width: "25rem"}}>
            <div className="card-body">
            <div className=" card-header text-center"> <h5 class="card-title text-success">Login</h5></div>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '100%' }}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '100%' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit" className="my-3 mr-1 ">Login</Button>
            <span className="text-danger">
                     New User? Register <a href='CustomerRegister'>here</a>
                        </span>
            
            </Form>
        </div>
        </div>
    </Container>
    )
}
}