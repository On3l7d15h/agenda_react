import React from "react";
import Link from "./Link"
import swal from "sweetalert"

//importando estilos
import "../styles/head.css"

const Head = () => {

	const message = () => {
		return swal("Agenda-React!", "Version 1.0.0", "success");
	}

	return(
		<div className="head">
			<span>React!</span>
			<h3 onClick={message}>Agenda!</h3>
		</div>
	)
}

export default Head;