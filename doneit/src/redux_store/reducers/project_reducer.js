import * as ACTION_TYPE from '../actions'


const initState = {
    projects: [],
    getting_projects: false,
    creating_project: false,
    updating_project: false,
    deleteing_project: false,
    error: null
}

export const Project_Reducer = (state = initState, action) => {
    switch(action.type){
        case ACTION_TYPE.GETTING_PROJECTS:
            return {
                ...state,
                getting_projects: true
            }
        case ACTION_TYPE.GET_PROJECT:
            return {
                ...state,
                projects: action.payload, getting_projects: false
            }
        case ACTION_TYPE.CREATING_PROJECT:
            return {
                ...state,
                creating_project: true
            }
        case ACTION_TYPE.CREATE_PROJECT:
            return {
                ...state,
                projects: action.payload,
                creating_project: false
            }
        case ACTION_TYPE.DELETING_PROJECT:
            return {
                ...state,
                deleteing_project: true
            }
        case ACTION_TYPE.DELETE_PROJECT:
            return {
                ...state,
                projects: action.payload,
                deleteing_project: false
            }
        case ACTION_TYPE.UPDATING_PROJECT:
            return {
                ...state,
                updating_project: true
            }
        case ACTION_TYPE.UPDATE_PROJECT:
            return {
                ...state,
                projects: action.payload,
                updating_project: false
            }
        case ACTION_TYPE.ERROR:
            return {
                ...state,
                getting_projects: false,
                creating_project: false,
                deleteing_project: false,
                updating_project: false,
                error: action.payload

            }
            default:
                return state
    }
}