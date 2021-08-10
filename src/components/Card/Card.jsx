import React, {useState,useEffect} from 'react';
import FileBase from 'react-file-base64';
import {Card, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard=()=>{
    const [user,setUser]=useState({first_name:"",last_name:"",location:"",avatar:""})

    return (
        <Card style={{ width: '18rem' }} className="text-center card">
            <Card.Body className="card-inner">              
                <div className="card-front">
                <Card.Text variant="top">{user.avatar? <Card.Img src={user.avatar}/> : <Icon.PersonCircle className="i-avatar1"/>}</Card.Text>
                <Card.Body>
                <Card.Text>{user.first_name? user.first_name : 'First Name'}</Card.Text>
                <Card.Text>{user.last_name? user.last_name : 'Last Name'}</Card.Text>
                <Card.Text><Icon.PinMap className="i-front"/>{user.location? user.location : 'Office Location'}</Card.Text>
                </Card.Body>
                </div>

                <div className="card-back">
                <Form>
                    <span><Icon.PersonCircle className="i-avatar2"/></span>
                    <FormGroup>
                    <div variant="top"/>
                    <FileBase
                    type="file" 
                    multiple={false}
                    onDone={({base64})=>setUser({...user, avatar:base64})}/>
                    </FormGroup>
                    <FormGroup controlId="firstName">
                    <FormControl
                    className="input"
                    type="text"
                    placeholder='Enter your first name' 
                    name="firstName" 
                    label="FirstName"
                    value={user.first_name}
                    onChange={(e)=>setUser({...user, first_name:e.target.value})}
                    />
                    </FormGroup>

                    <FormGroup controlId="lastName">
                    <FormControl
                    className="input"
                    type="text"
                    placeholder='Enter your last name' 
                    name="lastName" 
                    label="LastName"
                    value={user.last_name}
                    onChange={(e)=>setUser({...user, last_name:e.target.value})}
                    />
                    </FormGroup>

                    <div>
                    <span><Icon.PinMap className="i-back"/></span>
                    <FormGroup controlId="location">
                    <FormControl
                    className="input-location"
                    type="text"
                    placeholder='Enter your office' 
                    name="location" 
                    label="Location"
                    aria-describedby="addon"
                    value={user.location}
                    onChange={(e)=>setUser({...user, location:e.target.value})}
                    />
                    </FormGroup>
                    </div> 
                </Form>
                <Button className="cancel">Cancel</Button>
                <Button className="save">Save</Button>
                </div>
            </Card.Body>
    </Card>
    )
}

export default ProfileCard;