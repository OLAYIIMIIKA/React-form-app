import React, { useState } from "react";
import "./LoginForm.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'




const LoginForm = () => {

    return (
      
        <Container className="page" fluid>
            <Form  className="cover">
              
            <img src="https://user-images.githubusercontent.com/76559183/110728268-b2e43d00-8257-11eb-838f-d52cd6197d08.png" alt="github-logo"/>
            
            <h1>Sign in</h1>
            <lebel htmlFor='email'>Username:</lebel>
            <input type="text" placeholder="Enter username"/>
            <lebel htmlFor='password'>Password:</lebel>
            <input type="password" placeholder="Enter password"/>
            <Form.Check label="Remeber me"/>
            <a href="#">Forget password ?</a>
           
            <Button variant="danger">Sign in</Button>
            <p>Don't have an account? <a  href="#">Sign up</a> </p>
            </Form>

        </Container>
         
    );
}

export default LoginForm 