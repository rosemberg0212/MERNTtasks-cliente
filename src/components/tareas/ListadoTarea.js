import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContex';

const ListadoTarea = () =>{

	const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyectos } = proyectosContext;

    if(!proyecto){
    	return <h2>Selecciona un Proyecto</h2>
    }

    const [proyectoActual] = proyecto

	const tareas = [
		{nombre: 'Elegir Plataforma', estado: true},
		{nombre: 'Elegir Tecnologias', estado: true},
		{nombre: 'Presupuesto', estado: false},
	];

	const onClickEliminar = ()=>{
		eliminarProyectos(proyectoActual.id)
	}
	return(
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul className="listado-tareas">
				{tareas.length === 0
					? (<li className="tarea"><p>No hay tareas</p></li>)

					:tareas.map(tarea =>(
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