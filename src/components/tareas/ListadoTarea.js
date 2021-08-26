import React, {Fragment} from 'react';
import Tarea from './Tarea'

const ListadoTarea = () =>{
	const tareas = [
		{nombre: 'Elegir Plataforma', estado: true},
		{nombre: 'Elegir Tecnologias', estado: true},
		{nombre: 'Presupuesto', estado: false},
	];
	return(
		<Fragment>
			<h2>Proyecto: Tienda Virtual</h2>
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
			>Eliminar Proyecto &times;</button>
		</Fragment>
		
	)
}

export default ListadoTarea;