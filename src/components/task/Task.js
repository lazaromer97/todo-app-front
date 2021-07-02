import React from 'react';

import './Task.css';

const Task = () => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' id='taskText' name='taskText' placeholder='What needs to be done?' aria-label='What needs to be done?' aria-describedby='btnAddTask' />
                    <div className='input-group-append content-btn'>
                        <button className='btn btn-success' type='button' id='btnAddTask'>Add Task</button>
                    </div>
                </div>
            </div>
            <ul id='task-container' className='list-group list-group-flush'>
                <li className='list-group-item'>An item</li>
                <li className='list-group-item'>A second item</li>
                <li className='list-group-item'>A third item</li>
            </ul>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <spam># items</spam>
                    </div>
                    <div className='col-sm-6'>
                        <div class='btn-group'>
                            <button id='btnAll' className='btn btn-sm btn-outline-secondary active'>All</button>
                            <button id='btnActive' className='btn btn-sm btn-outline-secondary'>Active</button>
                            <button id='btnCompleted' className='btn btn-sm btn-outline-secondary'>Completed</button>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <button id='btnClearCompleted' className='btn btn-sm btn-outline-secondary'>Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;