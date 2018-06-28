import React from 'react';

export const Posts = (props) => {
    return (
        <ul>
            {
                props.data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    );
};