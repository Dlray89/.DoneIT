import axios from 'axios'


export const GET_PROJECT = 'GET_PROJECT'
export const GETTING_PROJECTS = 'GETTING_PROJECTS'
export const ERROR = 'ERROR'

export const CREATE_PROJECT = "CREATE_PROJECT"
export const CREATING_PROJECT = 'CREATING_PROJECT'

export const DELETE_PROJECT = 'DELETE_PROJECT'
export const DELETING_PROJECT = 'DELETING_PROJECT'

export const UPDATING_PROJECT = 'UPDATING_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const SINGLE_PROJECT = 'SINGLE_PROJECT'
export const TOGGLE_UPDATE_PROJECT = 'TOGGLE_UPDATE_PROJECT'


const url = 'https://prohash-backend.herokuapp.com'

export const get_projects = () => {
    const projects = axios.get(`${url}/api/projects`)
    return dispatch => {
        dispatch({type: GETTING_PROJECTS})
        projects.then(res => {
            dispatch({ type: GET_PROJECT, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }
}

export const create_project = project => {
    const new_project = axios.post(`${url}/api/projects`, project)
    return dispatch => {
        dispatch({ type: CREATING_PROJECT})
        new_project.then(({ data }) => {
            dispatch({ type: CREATE_PROJECT, payload: data })
        })
        .catch(err => {
            dispatch({type: ERROR, payload:err})
        })
    }
}

export const delete_project = id => {
    const remove_project = axios.delete(`${url}/api/projects/${id}`, {
        data: { id }
    })
    return dispatch => {
        dispatch({type: DELETING_PROJECT })
        remove_project.then(({ data }) => {
            dispatch({type: DELETING_PROJECT, payload: data})
            dispatch({type: SINGLE_PROJECT, payload: {} })
            
        })

        .catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }
}

export const update_project = (id, project) => {
    const update_project = axios.put(`${url}/api/projects/${id}`, project)
    return dispatch => {
        dispatch({type: UPDATING_PROJECT})
        update_project.then(({ data }) => {
            dispatch({type: UPDATE_PROJECT, payload: data })
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }
}

export const toggle_show_update = () => {
    return {
        type: TOGGLE_UPDATE_PROJECT
    }
}

export const update_Single_Project = project => {
    return {
        type: SINGLE_PROJECT,
        payload: project
    }
}