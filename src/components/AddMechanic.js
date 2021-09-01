import React, { Fragment } from "react"
import { toast } from "react-toastify";
import{Form, FormGroup,Label,Input, Container,Button} from "reactstrap"

import { ToastContainer} from "react-toastify";


const Mechanic=()=>{
    

    
    const btnhandle=()=>{
        toast.success("done",{
            position:"top-center"
        });
    };
    return(
<Fragment>
<ToastContainer/>
<Form>
    <h1 className="text-center my-3 text-primary">Add Mechanic</h1>
    <FormGroup>
        <Label for="firstName"className="mb-2">First Name</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="Type your first name here"></Input>
    </FormGroup>

    <FormGroup>
        <Label for="lastName"className="mb-2">Last Name</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="Type your last name here"></Input>
    </FormGroup>

    
    <FormGroup>
        <Label for="mob"className="mb-2">Mobile</Label>
        <Input type="number" name="mob" id="mob" placeholder="Mobile number"></Input>
    </FormGroup>


    <FormGroup>
        <Label for="email" className="mb-2">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" ></Input>
    </FormGroup>
    
    <FormGroup>
        <Label for="skills"className="mb-2">Skills</Label>
        <Input type="text" name="skills" id="skills" placeholder="Type your skills here"></Input>
    </FormGroup>
   
    <Container className="text-center">
        <Button className="shadow-sm" color="primary mt-3" outline style={{width:400}} onClick={btnhandle} >Submit</Button>     
    </Container>
  
</Form>
</Fragment>
    );
};



export default Mechanic;