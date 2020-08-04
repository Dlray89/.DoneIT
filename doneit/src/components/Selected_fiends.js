import React from 'react'

export default function SelectedProjects(props) {
    return (
        <div>
            <p>{props.selected.name}</p>
            <p>{props.selected.isComplete ? <div> Completed </div>: <div> Not Completed </div>}</p>
            <p>{props.selected.details}</p>
            <p>{props.selected.createdAt}</p>
            <button onClick={() => props.handleShowProject({})} >Cancel</button>
            <button onClick={() => props.handleDelete()} >{`Delete ${props.selected.name}`}</button>
            <button onClick={() => props.toggleShowUpdate()} >{`Update ${props.selected.name}`}</button>
        </div>
    )
}