import React from 'react';

import './Comment.css';

const Comment = props => {
    return (
        <li className='list-group-item'>{props.text}</li>
    );
}

export default Comment;