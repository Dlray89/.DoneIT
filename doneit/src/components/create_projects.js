import React, {Component } from 'react'
import { connect } from 'react-redux'
import { create_project } from '../redux_store/actions'


class Create_Project extends Component {
    state = {
        name: '',
        details: '',
        
        createdAt: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    handle_new_project = _ => {
        const { name, details, createdAt } = this.state
        this.props.create_project({ name, details, createdAt })
        this.setState({ name: '', details: '', createdAt: ''})
    }

    render(){
        return(
            <div>
                <h1>Create Project</h1>
                <form  >
                    <input value={this.state.name} name='name' type='text' placeholder='Name' onChange={this.handleChange}  />

                    <input value={this.state.details} name='details' type='text' placeholder='details' onChange={this.handleChange}  />

                    
                    <input value={this.state.createdAt} name='createdAt' type='date' placeholder='createAt' onChange={this.handleChange}  />
                    <div>
                        <button onClick={() => this.handle_new_project()} >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creating_project: state.creating_project
    }
}

export default connect(mapStateToProps, {create_project})(Create_Project)