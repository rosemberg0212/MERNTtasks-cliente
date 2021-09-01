import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareasContext';

const FormTarea = () =>{
	const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const TareasContext = useContext(TareaContext);
    const { errorTarea, agregarTarea, validarTarea, obtenerTareas } = TareasContext;

    const [tarea, guardarTarea] = useState({
    	nombre: ''
    })

    const {nombre} = tarea;

    if(!proyecto){
    	return null
    }

    const [proyectoActual] = proyecto

    const onChange = (e)=>{
    	guardarTarea({
    		...tarea,
    		[e.target.name] : e.target.value
    	})
    }

    const onSubmit = (e)=>{
    	e.preventDefault()

    	if(nombre.trim() === ''){
    		validarTarea();
    		return;
    	}

    	tarea.proyectoId = proyectoActual.id;
    	tarea.estado = false;

    	agregarTarea(tarea);

    	obtenerTareas(proyectoActual.id);

    	guardarTarea({
    		nombre: ''
    	})
    }

	return(
		<div className="formulario">
			<form
				onSubmit={onSubmit}
			>
				<div className="contenedor-input">
					<input 
						type="text"
						className="input-text"
						placeholder="Nombre Tarea"
						name="nombre"
						value={nombre}
						onChange={onChange}
					/>
				</div>

				<div className="contenedor-input">
				<input
					type="submit"
					className="btn btn-primario btn-submit btn-block"
					value="Agregar Tarea"
				/>
				</div>
			</form>
			{errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
		</div>
	)
}

export default FormTarea;