import React, { useState, useEffect } from 'react';

import Task from '../task/Task';

import './TaskList.css';


const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const TaskList = () => {
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState('All');

    const getTasks = async () => {
        await fetch('http://127.0.0.1:8000/api/v1/tasks/')
        .then(response => response.json())
        .then(data => {
            setTodoList(data);
        })
    }

    const addTask = async (e) => {
        e.preventDefault();
        const text = document.getElementById('taskText').value;
        if (text.trim() !== '') {
            await fetch(`http://127.0.0.1:8000/api/v1/tasks/add/`, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST',                                                              
                body: JSON.stringify( { text: text } )                                        
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setTodoList([...todoList, data.data]);
            });
        }
    }

    const clearCompleted = () => {
        const listCompleted = todoList.filter(element => element.completed);
        listCompleted.forEach(async element => {
            await fetch(`http://127.0.0.1:8000/api/v1/tasks/delete/${element.id}/`, {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: 'DELETE'                                       
            });
        })
        const newList = todoList.filter(item => {
            if (listCompleted.indexOf(item) < 0) {
                return true;
            }
            return false;
        })
        setTodoList(newList);
       
    }

    const changeShowed = async (e) => {
        const {target} = e;
        const actived = document.querySelector('.active');
        if (target.closest('#btnAll') || target.closest('#btnActive') || target.closest('#btnCompleted')){
            actived.classList.remove('active');
            target.classList.add('active');
            if (target.closest('#btnAll')) {
                setFilter('All')
            } else if (target.closest('#btnActive')) {
                setFilter('Active')
            } else if (target.closest('#btnCompleted')) {
                setFilter('Completed')
            }
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    const taskList = todoList.filter(FILTER_MAP[filter]).map( (element, index) => {
        return <Task parent={{todoList, setTodoList}} {...element} key={element.id}/>
    } ) 

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={addTask}>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control' id='taskText' name='taskText' placeholder='What needs to be done?' aria-label='What needs to be done?' aria-describedby='btnAddTask' />
                        <div className='input-group-append content-btn'>
                            <button className='btn btn-success' type='submit' id='btnAddTask'>Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
            <ul id='task-container' className='list-group list-group-flush'>
                {taskList}
            </ul>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <span>{todoList.filter(FILTER_MAP[filter]).length === 1 ? '1 item' : `${todoList.filter(FILTER_MAP[filter]).length} items`}</span>
                    </div>
                    <div className='col-sm-6'>
                        <div className='btn-group'>
                            <button id='btnAll' className='btn btn-sm btn-outline-secondary active' onClick={changeShowed}>All</button>
                            <button id='btnActive' className='btn btn-sm btn-outline-secondary' onClick={changeShowed}>Active</button>
                            <button id='btnCompleted' className='btn btn-sm btn-outline-secondary' onClick={changeShowed}>Completed</button>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <button id='btnClearCompleted' className='btn btn-sm btn-outline-secondary' onClick={clearCompleted}>Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default TaskList;