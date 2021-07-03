import React, { useState, useEffect } from 'react';

import Comment from '../comment/Comment';

import './CommentList.css';


const CommentList = (props) => {
    const idTask = props.id;

    const [commentList, setCommentList] = useState([]);

    const addComment = async (e) => {
        e.preventDefault();
        const text = document.getElementById('commentText').value;
        if (text.trim() !== '') {
            await fetch(`http://127.0.0.1:8000/api/v1/comments/add/`, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST',                                                              
                body: JSON.stringify( { task: idTask, text: text } )                                        
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setCommentList([...commentList, data.data]);
            });
        }
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/v1/comments/task/${props.commentSelected}`)
        .then(response => response.json())
        .then(data => {
            setCommentList(data);
        })
        console.log('Hello')
    }, [props.commentSelected]);

    const listComment = commentList.map( (element, index) => {
        return <Comment {...element} key={element.id}/>
    } ) 

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={addComment}>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control' id='commentText' name='commentText' placeholder='Add a comment to the task' aria-label='Add a comment to the task' aria-describedby='btnAddComment' />
                        <div className='input-group-append content-btn'>
                            <button className='btn btn-success' type='submit' id='btnAddComment'>Add Comment</button>
                        </div>
                    </div>
                </form>
            </div>
            <ul id='comment-container' className='list-group list-group-flush'>
                {listComment}
            </ul>
       </div>
    )
    
}

export default CommentList;