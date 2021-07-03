import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CommentList from '../commentList/CommentList';

import './Task.css';

const Task = props => {
    const done = props.completed;
    const [completed, setCompleted] = useState(done);
    const [commentSelected, setCommentSelected] = useState(props.id);

    const changeCompleted = async () => {
        await fetch(`http://127.0.0.1:8000/api/v1/tasks/update/${props.id}/`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PATCH',                                                              
            body: JSON.stringify( { completed: !completed } )                                        
        })
        .then(data => {
            setCompleted(!completed);
            const newList = props.parent.todoList.map(element => {
                if (element.id === props.id) {
                    element.completed = !element.completed
                }
                return element
            })
            props.parent.setTodoList(newList);
        })
    }


    const viewComments = () => {
        ReactDOM.render(<CommentList commentSelected={commentSelected} setCommentSelected={setCommentSelected} id={props.id} />, document.querySelector('#comment-area'));
    }

    const deleteTask = async () => {
        await fetch(`http://127.0.0.1:8000/api/v1/tasks/delete/${props.id}/`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'DELETE'                                       
        }).then(() =>{
            const newList = props.parent.todoList.filter(element => {
                if (element.id !== props.id) {
                    return true;
                }
                return false;
            })
            props.parent.setTodoList(newList);
        })
        ReactDOM.render('', document.querySelector('#comment-area'));
    }
    
    return (
        <li className={completed ? 'list-group-item text-decoration-line-through' : 'list-group-item'}>
            <div className='row'>
                <div className='col-sm-6'>{props.text}</div>
                <div className='col-sm-6'>
                    <button className='btn btn-sm btn-secondary' onClick={changeCompleted}>{completed ? 'ToDo' : 'Complete'}</button>
                    <button className='btn btn-sm btn-warning' onClick={viewComments}>Comments</button>
                    <button className='btn btn-sm btn-danger' onClick={deleteTask}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Task;