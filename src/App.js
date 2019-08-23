import React from 'react';
import Tabs from './Components/Tabs';
import Header from './Components/Header';
import DateElection from './Components/DateElection'
import DateElection2 from './Components/DateElection2'
import TimeElection from './Components/TimeElection'
import './App.css';

function App() {
  return (
    <div>
    	<Header/>
      	<Tabs />
      	<DateElection />
      	<DateElection2  />
      	<TimeElection />
      	<div className="row mt-2 mr-0 ml-0">
            <div className="col-3 col-sm-3">
                <b>Inicio:</b>
            </div>
            <div className="col-9 col-sm-9">22/08/2019 09:00:00</div>            
    	</div>
        <div className="row mt-2 mr-0 ml-0">
            <div className="col-3 col-sm-3">
                <b>Fin:</b>
            </div>
            <div className="col-9 col-sm-9">12/12/2019 09:00:00</div>            
        </div>
      	<div className="row mr-0 ml-0">
        	<div className="col">
        		<a className="btn btn-secondary mt-2 col-12 col-sm-3 mr-2" href="">Exportar configuración</a>
				
        		<a className="btn btn-outline-secondary mt-2 col-12 col-sm-3 mr-2" href="">Marcar en Producción</a>
        		<a className="btn btn-danger mt-2 col-12 col-sm-3" href="">Reset</a>
        	</div>
      	</div>
    </div>
  );
}

export default App;
