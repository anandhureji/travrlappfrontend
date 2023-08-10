import React from "react";
import { useState } from "react";
import './App.css';
import Login from '../src/pages/Login';
import Search from '../src/pages/Search'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Add from '../src/pages/Add'
import Update from '../src/pages/Update'
import sample from "./data/sampleData";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouteLink
} from "react-router-dom";
function App() {
 
  const [samples, setSamples] = useState(sample);

    const onUpdateTariff = (updatedSample) => {
      const updatedSamples = samples.map((sample) => {
        if (sample.id === updatedSample.id) {
          return {
            ...sample,
            tariff: updatedSample.tariff,
          };
        }
        return sample;
      });
    
      setSamples(updatedSamples);
    };


      return (
        <div className="App">
        <Router>
        <Header/>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/search" element={<Search samples={samples}/>}/>
              <Route path = "/add" element = {<Add/>} ></Route>
              <Route path = "/update" element = {<Update companyData={samples} onUpdateTariff={onUpdateTariff}/>} ></Route>

          </Routes>
          <Footer/>
        </Router>
      </div>

  )

    }
  export default App;


