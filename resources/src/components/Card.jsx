import React from "react";

const Card = (props) => {

	return(
		<div className="card">
			<span><i className="far fa-id-card"></i></span>
			<h2>{props.name} {props.last} {props.tel}</h2>
		</div>
	)
}

export default Card;