import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const DeviceForm = () => {

  const editURL = "http://localhost:8080/devices/";
  const navigate = useNavigate();
  const param = useParams();
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

useEffect(() => {
  axios.get(editURL+param.id).then((response) => {
    const deviceData = response.data;
    setId(deviceData.id);
    setCode(deviceData.code);
    setDescription(deviceData.description);

  }).catch(error => { 
    alert("Ocorreu um erro ao buscar os detalhes do dispositivo:"+ error);
  });
}, []);


  const codeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(editURL+param.id, {
        id: id,
        code: code,
        description: description
      })
      .then((response) => {
        alert("Dispositivo "+ code +" atualizado!");
        navigate('/read')

      }).catch(error => { 
        alert("Ocorreu um erro ao atualizar o dispositivo:"+ error);
      });
      
  };

    return(  
      <Alert variant='primary'>
      <Container>
      <Form onSubmit={submitActionHandler} id="data">
      <Form.Group  controlId="form.id">
            <Form.Label>Id</Form.Label>
            <Form.Control type="number" value={id} readonly='readonly'/>
        </Form.Group>
        <Form.Group controlId="form.code">
            <Form.Label>Codigo do dispositivo</Form.Label>
            <Form.Control type="text" value={code} onChange={codeChangeHandler} placeholder="Digite o codigo do dispositivo" required/>
        </Form.Group>
        <Form.Group  controlId="form.description">
            <Form.Label>Descrição do dispositivo</Form.Label>
            <Form.Control type="text" value={description} onChange={descriptionChangeHandler} placeholder="Digite a descrição do dispositivo" required/>
        </Form.Group>
        <br></br>
        <Button type='submit'>Atualizar Dispositivo</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type='submit' onClick={()=>navigate("/read")}>Cancelar</Button>
      </Form>
    </Container>     
    </Alert>      
    
    );
}
export default DeviceForm;