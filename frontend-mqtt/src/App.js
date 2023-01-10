import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDevice from './components/AddDevice';
import EditDevice from './components/EditDevice';
import DevicesDataTable from "./components/DevicesDataTable";

function App() {

    return (

        <div  class="container card mb-4 box-shadow">

            <div class="card-header">
                <h4 class="my-0 font-weight-normal">Temperatura e Umidade - Dispositivos e Mensuramento</h4>
            </div>

            <Routes>
                <Route path="/" element={<Navigate to="/read" />} />
                <Route exact path="/create" element={<AddDevice/>}/>
                <Route exact path="/read" element={<DevicesDataTable/>}/>
                <Route path="/edit/:id" element={<EditDevice/>}/>
            </Routes>

        </div>
    );
}

export default App;