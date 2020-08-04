import React from 'react'

const UpdateProjectForm = props => {
    return(
        <form>
            <input type='text' placeholder={props.project.name} />
            <input type='text' placeholder={props.project.details} />
            <input type='date' placeholder={props.project.createdAt}/>
        </form>
    )
}

export default UpdateProjectForm