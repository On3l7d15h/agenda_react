import React from "react";
import "../styles/login.css"
import swal from "sweetalert"

const SeeContact = () => {

	const login = document.querySelector(".login");
	
	const handleVal = (e) => {

		e.preventDefault()

		const toSend = {
			nombre: e.target.children[0].children[0].value,
			apellido: e.target.children[1].children[0].value,
			telefono: e.target.children[2].children[0].value 
		}

		const {nombre, apellido, telefono} = toSend; 

		if(nombre !== null && nombre !== ""){
			if(apellido !== null & apellido !== ""){
				if(telefono !== null && telefono !== ""){
					fetch("http://www.raydelto.org/agenda.php", {
						method: "post",
							headers: {
								'Accept': 'aplication/json'
							},
						body: JSON.stringify(toSend)
					})
					swal("Información", "Enviado sin problemas!", "success", {
						timer: 1000, buttons: false
					})
					setTimeout(() => {
						window.location.href="/"
					}, 1030)
				} else {
					swal("Oops!", "Hay un campo vacío!", "error", {
						timer: 1200, buttons: false
					})
				}
			} else {
				swal("Oops!", "Hay un campo vacío!", "error", {
						timer: 1200, buttons: false
					})
			}
		} else {
			swal("Oops!", "Hay un campo vacío!", "error", {
				timer: 1200, buttons: false
			})
		}
	}

	//login.addEventListener("")

	return(
		<div className="login" onSubmit={handleVal}>
			<section>
				<i className="far fa-id-card"></i>
				<form>
					<label>
						Nombre
						<input type="text" name="name" />
					</label>
					<label>
						Apellido
						<input type="text" name="last" />
					</label>
					<label>
						Teléfono
						<input type="text" name="phone" />
					</label>
					<button >Enviar!</button>
				</form>
			</section>
		</div>
	)
}

export default SeeContact;