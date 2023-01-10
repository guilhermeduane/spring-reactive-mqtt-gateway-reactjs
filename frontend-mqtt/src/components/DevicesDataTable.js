import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Moment from "react-moment";
import axios from "axios";
import editIcon from "./../assets/edit.png";
import deleteIcon from "./../assets/delete.JPG";
import "../App.css";


const DevicesDataTable = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";
  const [devices, setDevices] = useState([]);
  const [mensurations, setMensurations] = useState([]);

  const setDeviceData = () => {
    axios.get(baseURL + "/devices").then((response) => {
      setDevices(response.data);
    }).catch(error => {
      alert("Ocorreu um erro ao carregar os dados:" + error);
    });
  }

  const setMensurationData = () => {
    axios.get(baseURL + "/mensuration/last").then((response) => {
      setMensurations(response.data);
    }).catch(error => {
      alert("Ocorreu um erro ao carregar os dados:" + error);
    });
  }

  useEffect(() => {
    setDeviceData();
    setMensurationData();
  }, []);


  const removeDevice = (id) => {
    axios.delete(baseURL + "/devices/" + id).then((response) => {
      alert("Dispositivo " + id + " deletado!");
      setDeviceData();
      navigate('/read')

    }).catch(error => {
      if(error = 60){
        alert("Não é possível deletar um dispositivo com mensuramento gravado!")
      }
      else{
        alert("Ocorreu um erro ao remover o dispositivo:" + error);
      }

    });
  }

  const removeAllDevices = (id) => {
    axios.delete(baseURL + "/devices").then((response) => {
      alert("Todos os dispositivos foram deletados!");
      setDeviceData();
      navigate('/read')
    }).catch(error => {
      alert("Ocorreu um erro ao remover todos os dispositivos:" + error);
    });
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Adicionar Dispositivo
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Lista de Dispositivos</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Codigo</th>
                    <th>Descrição</th>
                    <th scope="col">Ação</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    devices &&
                      devices.map((device, index) => (

                      <tr>
                        <th scope="row">{device.id}</th>
                        <td>{device.code}</td>
                        <td>{device.description}</td>


                        <td >

                          <Link to={"/edit/" + device.id}><img src={editIcon} alt="Editar" width="50" height="30" title="Editar" />
                          </Link>


                          <button
                            onClick={() => removeDevice(device.id)} className="button"
                          > <img src={deleteIcon} alt="Remover" title="Remover" width="30" height="30" />
                          </button>

                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>

      <div className="col-md-6">
        <h4>Última Mensuração dos Dispositivos</h4>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Id do Dispositivo</th>
                  <th>Temperatura</th>
                  <th>Umidade</th>
                  <th>Data</th>

                </tr>
                </thead>
                <tbody>

                {
                    mensurations &&
                    mensurations.map((mensuration, index) => (

                        <tr>
                          <th scope="row">{mensuration.deviceId}</th>
                          <td>{mensuration.temperature}</td>
                          <td>{mensuration.humidity}</td>
                          <td>{<Moment format="DD-MM-YYYY HH:mm:ss">{mensuration.timestamp}</Moment>}</td>


                        </tr>

                    ))
                }

                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>

    </div>

  );
}
export default DevicesDataTable;