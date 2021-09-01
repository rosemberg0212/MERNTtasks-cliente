import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareasContext';

const Proyecto = ({proyecto})=>{

	const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    const TareasContext = useContext(TareaContext);
    const { obtenerTareas } = TareasContext;

    //funcion para agregar el proyecto actual
    const seleccionarProyecto = (id)=>{
    	proyectoActual(id);
    	obtenerTareas(id);
    }

	return(
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={()=>seleccionarProyecto(proyecto.id)}
			>
				{proyecto.nombre}
			</button>
		</li>
	);
}

export default Proyecto;