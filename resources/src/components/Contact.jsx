import React from "react";
import Card from "./Card";
import swal from "sweetalert"

//import styles
import "../styles/contact.css"

const Contact = () => {

	//alertas en base a error o completad
	const alertS = () => {
		setTimeout(() => {
			swal({
				title: "Información!",
				text: "datos cargados con éxito",
				icon: "info",
				buttons: false, 
				timer: 1500   
			})
		}, 500)
	}
	
	const alertD = () => {
		setTimeout(() => {
			swal({
				title: "Información!",
				text: "Error con los datos",
				icon: "error",
				buttons: false, 
				timer: 1500   
			})
		}, 500)
	}

	//estados
	const [cont, setCont] = React.useState([])
	const [count, setCount] = React.useState(0);

	//función asíncrona
	const petition = async () => {
		await fetch("http://www.raydelto.org/agenda.php")
			.then(res => res.json())
			.then(data => {
				const info = data;
				setCont(info);
				setCount(count + 1)
				alertS()
			})
			.catch(e => {
				console.log(e)
				alertD()
			})
	}

	//UseEffect con condicional, ayuda a que no se renderice más de lo normal
	React.useEffect(() => {
		if(count < 2){
			petition()
		}
		return () => {}
	}, [])


	return(
		<>
			<div className="contact">
				<h1>Contactos</h1>
				<section>
					{
						cont.map((c, i) => {
							return <Card key={i} name={c.nombre} last={c.apellido} tel={c.telefono}/>
						})
					}
				</section>
			</div>
		</>
	)
}

export default Contact;