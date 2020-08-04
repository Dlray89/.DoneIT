import axios from 'axios'


export const GET_PROJECT = 'GET_PROJECT'
export const GETTING_PROJECTS = 'GETTING_PROJECTS'
export const ERROR = 'ERROR'

export const CREATE_PROJECT = "CREATE_PROJECT"
export const CREATING_PROJECT = 'CREATING_PROJECT'


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