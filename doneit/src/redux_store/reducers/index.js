import {Project_Reducer } from './project_reducer'
import { combineReducers } from 'redux'
import { single_project_reducer } from './single_project_reducer'

export default combineReducers({
    Project_Reducer,
    single_project_reducer
})
