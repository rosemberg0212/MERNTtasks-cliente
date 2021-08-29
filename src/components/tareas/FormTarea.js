import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

const FormTarea = () =>{
	const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    if(!proyecto){
    	return null
    }

    const [proyectoActual] = proyecto

	return(
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input 
						type="text"
						className="input-text"
						placeholder="Nombre Tarea"
						name="tarea"
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
		</div>
	)
}

export default FormTarea;