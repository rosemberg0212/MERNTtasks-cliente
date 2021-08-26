import React, {Fragment, useState} from 'react';

const NuevoProyecto = () =>{

	const [proyecto, guardarProyecto] = useState({
		nombre:''
	});

	const {nombre} = proyecto;

	const onChange = (e)=>{
		guardarProyecto({
			...proyecto,
			[e.target.name]: e.target.value
		})
	}

	const onSubmitProyectos = (e)=>{
		e.preventDefault();
	}

	return(
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
			>
			Nuevo Proyecto
			</button>

			<form className="formulario-nuevo-proyecto"
				onSubmit={onSubmitProyectos}
			>
				<input 
					type="text"
					className="input-text"
					placeholder="Nombre Proyecto"
					name="nombre"
					value={nombre}
					onChange={onChange}
				/>

				<input 
					type="submit"
					className="btn btn-primario btn-block"
					value="Agregar Proyecto"
				/>
			</form>
		</Fragment>
		
	);
}

export default NuevoProyecto;