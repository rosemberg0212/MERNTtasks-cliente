import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { 
    	formulario,
    	errorForm, 
    	mostrarFormulario, 
    	agregarProyectos,
    	validarForm 
    } = proyectosContext;

	const [proyecto, guardarProyecto] = useState({
		nombre:''
	});

	const {nombre} = proyecto;

	const onChangeProyecto = (e)=>{
		guardarProyecto({
			...proyecto,
			[e.target.name]: e.target.value
		})
	}

	const onSubmitProyectos = (e)=>{
		e.preventDefault();

		if(nombre === ''){
			validarForm()
			return
		}

		agregarProyectos(proyecto)

		guardarProyecto({
			nombre: ''
		})
	}

	const onClick = ()=>{
		mostrarFormulario()
	}
	return(
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={onClick}
			>
			Nuevo Proyecto
			</button>

			{ formulario ? 
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyectos}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>
                ) : null }

            {errorForm ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>
            	: null
        	}
		</Fragment>
		
	);
}

export default NuevoProyecto;