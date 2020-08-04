import React, {Component} from 'react'
import { connect } from "react-redux"
import { delete_project, update_Single_Project, toggle_show_update } from '../redux_store/actions'
import SelectedProject from './Selected_fiends'
import UpdateProjectForm from './UpdateProject'

class Project extends Component {

    handleDelete = () => {
        const { id } = this.props.project_selected
        this.props.delete_project(id)
        }

    handleShowProject = (project) => {
            this.props.update_Single_Project(project)
        }

    toggleShowUpdate = () => {
            this.props.toggle_show_update()
        }

    handleUpdate = () => {
        const { id, project } = this.props.project_selected
        this.props.update_project(id, project)
    }

    render() {
        return(
            <div>
            <div>
                {this.props.projects.map(project => (
                    <p onClick={() => this.handleShowProject(project)} key={project.id} >
                        {project.name} <br />
                        {project.details}
                    </p>
                ))}
            </div>
            {Object.keys(this.props.project_selected).length > 0 ? (
                <SelectedProject 
                handleDelete={this.handleDelete}
                handleShowProject={this.handleShowProject}
                toggleShowUpdate={this.toggleShowUpdate}
                
                selected={this.props.project_selected}
                 />
            ) : null}
            {this.props.showUpdate ? (
                <UpdateProjectForm project={this.props.project_selected} update_project={this.handleUpdate}/>
            ) : null}
            {this.props.deleteing_project ? (
                <p>Friend deleted</p>
            ) : null}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deleteing_project: state.Project_Reducer.deleteing_project,
        error: state.Project_Reducer.error,
        showUpdate: state.single_project_reducer.showUpdate,
        project_selected: state.single_project_reducer.project_selected,
        updating_project: state.Project_Reducer.updating_project
    }
}

export default connect(mapStateToProps, {delete_project, update_Single_Project, toggle_show_update})(Project)