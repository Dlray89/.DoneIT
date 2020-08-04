import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { get_projects } from '../redux_store/actions'
import { connect } from 'react-redux'
import CForm from './create_projects'



class Projects extends Component {
    componentDidMount() {
        this.props.get_projects()
    }

    render() {
        return (
            <div>
                <div>
                    <CForm />
                </div>
                Projects
                {this.props.projects.map(project => (
    <div>{project.name} <br />{project.details}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { Project_Reducer } = state
    return {
        projects: Project_Reducer.projects,
        getting_projects: Project_Reducer.getting_projects
    }
}

export default connect(mapStateToProps, { get_projects })(Projects)
