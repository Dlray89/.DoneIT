import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { get_projects } from '../redux_store/actions'
import { connect } from 'react-redux'
import CForm from './create_projects'
import Projects from './Project'



class MainCard extends Component {
    componentDidMount() {
        this.props.get_projects()
    }

    render() {
        return (
            <div>
                <header>
                    <h>{`Projects`}</h>
                    <CForm />
                </header>
                {this.props.error ? <p>Error fetching projects</p> : null}
                <div>
                    {this.props.getting_projects ? (
                        <p>Grabbing friends</p>
                    ) : (
                        <Projects projects={this.props.projects} />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { Project_Reducer } = state
    return {
        projects: Project_Reducer.projects,
        getting_projects: Project_Reducer.getting_projects,
        error: Project_Reducer.error
    }
}

export default connect(mapStateToProps, { get_projects })(MainCard)
