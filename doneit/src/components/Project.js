import React, {Component} from 'react'
import { connect } from "react-redux"
import { delete_project, update_Single_Project, toggle_show_update } from '../redux_store/actions'


class Project extends Component {

    render() {
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        delete_project: state.Project_Reducer.delete_project,
        error: state.Project_Reducer.error,
        showUpdate: state.single_project_reducer.showUpdate,
        project_selected: state.single_project_reducer.project_selected
    }
}

export default connect(mapStateToProps, {delete_project, update_Single_Project, toggle_show_update})(Project)