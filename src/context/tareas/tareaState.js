import React, { useReducer } from 'react';
import TareaContext from './tareasContext';
import TareaReducer from './tareaReducer';

import { 
	TAREAS_PROYECTO,
	AGREGAR_TAREAS,
	VALIDAR_TAREA 
} from '../../types';

const TareaState = (props)=>{
	const initialState = {
		tareas: [
			{nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
			{nombre: 'Elegir Tecnologias', estado: true, proyectoId: 2 },
			{nombre: 'Presupuesto', estado: false, proyectoId: 3},
			{nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
			{nombre: 'Elegir Tecnologias', estado: true, proyectoId: 1 },
			{nombre: 'Elegir Tecnologias', estado: true, proyectoId: 3 },
			{nombre: 'Presupuesto', estado: false, proyectoId: 1},
		],
		tareasProyecto: null,
		errorTarea: false
	}

	const [state, dispatch] = useReducer(TareaReducer, initialState)

	const obtenerTareas = (proyectoId)=>{
		dispatch({
			type: TAREAS_PROYECTO,
			payload: proyectoId
		})
	}

	const agregarTarea = (tarea)=>{
		dispatch({
			type: AGREGAR_TAREAS,
			payload: tarea
		})
	}

	const validarTarea = ()=>{
		dispatch({
			type: VALIDAR_TAREA
		})
	}
	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				errorTarea: state.errorTarea,
				obtenerTareas,
				agregarTarea,
				validarTarea
			}}
		>
			{props.children}
		</TareaContext.Provider>
	)
}

export default TareaState;