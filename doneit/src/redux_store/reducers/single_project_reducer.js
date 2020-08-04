import * as ACTION_TYPE from '../actions'


const initState = {
    project_selected: {},
    showUpdate: false
}


export const single_project_reducer = (state = initState, action) => {
    switch(action.type) {
        case ACTION_TYPE.SINGLE_PROJECT:
            return {
                ...state,
                project_selected: action.payload,
                showUpdate: false
            }
        case ACTION_TYPE.TOGGLE_UPDATE_PROJECT:
            return {
                ...state,
                showUpdate: !state.showUpdate
            }
            default:
                return state
    }
}