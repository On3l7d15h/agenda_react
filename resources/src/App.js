import React from "react"

//Componentes
import Head from "./components/Head"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Foot from "./components/Foot"

//imágenes y estilos
import logo from './logo.svg';
import './App.css';
import './styles/container.css'

const App = () => {

  return(
  	<React.Fragment>
    	<div className="container">
    		<Head />
    		<Contact />
    	</div>
    	<Login />
    	<Foot />
    </React.Fragment>
  )
}

export default App;
