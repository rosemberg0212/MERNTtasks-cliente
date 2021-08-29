import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

import ProyectoContext from './proyectoContex';
import proyectoReducer from './proyectoReducer';
import { 
	FORMULARIO_PROYECTO, 
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTOS,
	VALIDAR_FORM,
	PROYECTO_ACTUAL,
	ELIMINAR_PROYECTO 
} from '../../types'



const ProyectoState = (props)=>{

	const proyectos = [
		{id: 1, nombre: 'Tienda Virtual'},
		{id: 2, nombre: 'Bodega'},
		{id: 3, nombre: 'Inventario'},
		{id: 4, nombre: 'Mascotas'}
	]
	const initialState = {
		proyectos : [],
		formulario: false,
		errorForm: false,
		proyecto: null
	}

	//Dispath para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState)

	const mostrarFormulario = ()=>{
		dispatch({
			type: FORMULARIO_PROYECTO
		})
	}

	const obtenerProyectos = ()=>{
		dispatch({
			type: OBTENER_PROYECTOS,
			payload: proyectos
		})
	}

	const agregarProyectos = proyecto=>{
		proyecto.id = uuidv4();

		dispatch({
			type: AGREGAR_PROYECTOS,
			payload: proyecto
		})
	}

	const validarForm = ()=>{
		dispatch({
			type: VALIDAR_FORM
		})
	}

	const proyectoActual = (proyectoId)=>{
		dispatch({
			type: PROYECTO_ACTUAL,
			payload: proyectoId
		})
	}

	const eliminarProyectos = (proyectoId)=>{
		dispatch({
			type: ELIMINAR_PROYECTO,
			payload: proyectoId
		})
	}
	return(
		<ProyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				errorForm: state.errorForm,
				proyecto: state.proyecto,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyectos,
				validarForm,
				proyectoActual,
				eliminarProyectos
			}}
		>
			{props.children}
		</ProyectoContext.Provider>
	)
}

export default ProyectoState;