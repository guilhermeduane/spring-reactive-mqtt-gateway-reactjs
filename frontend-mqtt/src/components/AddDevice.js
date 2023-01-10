import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const DeviceForm = () => {
  const baseURL = "http://localhost:8080/devices/";
  const navigate = useNavigate();
  const [enteredCode, setCode] = useState('');
  const [enteredDescription, setDescription] = useState('');
  
  
  const codeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        code: enteredCode,
        description: enteredDescription
      })
      .then((response) => {
        alert("Dispositivo "+ enteredCode +" adicionado!");
        navigate("/read");
      }).catch(error => { 
        alert("error==="+error);
      });
    
  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setCode('');
    setDescription('');
    navigate("/read");

  }
    return(  
      <Alert variant='primary'>
      <Container>
      <Form onSubmit={submitActionHandler}>
        <Form.Group controlId="form.code">
            <Form.Label>Codigo do dispositivo</Form.Label>
            <Form.Control type="text" value={enteredCode} onChange={codeChangeHandler} placeholder="Digite o código do dispositivo" required/>
        </Form.Group>
        <Form.Group  controlId="form.description">
            <Form.Label>Descrição do dispositivo</Form.Label>
            <Form.Control type="text" value={enteredDescription} onChange={descriptionChangeHandler} placeholder="Digite a descrição do dispositivo" required/>
        </Form.Group>
        <br></br>
        <Button type='submit'>Adicionar Dispositivo</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type='submit' onClick={()=>cancelHandler()}>Cancelar</Button>
      </Form>
      
    </Container>     
    </Alert>      
    
    );
}
export default DeviceForm;