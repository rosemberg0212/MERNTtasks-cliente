import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareasContext';

const ListadoTarea = () =>{

	const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyectos } = proyectosContext;

    const TareasContext = useContext(TareaContext);
    const { tareasProyecto } = TareasContext;

    if(!proyecto){
    	return <h2>Selecciona un Proyecto</h2>
    }

    const [proyectoActual] = proyecto


	const onClickEliminar = ()=>{
		eliminarProyectos(proyectoActual.id)
	}
	return(
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul className="listado-tareas">
				{tareasProyecto.length === 0
					? (<li className="tarea"><p>No hay tareas</p></li>)

					:tareasProyecto.map(tarea =>(
						<Tarea
							tarea={tarea}
						/>
						
						))
				}
			</ul>
			<button
				type="button"
				className="btn btn-eliminar"
				onClick={onClickEliminar}
			>Eliminar Proyecto &times;</button>
		</Fragment>
		
	)
}

export default ListadoTarea;