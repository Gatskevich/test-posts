import React from 'react';
import { Link } from 'react-router-dom';
import {PrimaryButton} from '@fluentui/react/lib/';
import './post-list-item.scss';

const PostListItem = ( {postItem, onRemoveToPost}) => {
    const {title, body} = postItem;
    
    return (
        <>
            <li className="post__item">
                <Link to = {`/${postItem.id}`} style={{ textDecoration: 'none' }}>
                    <div className="post__item__title"><h3>{title}</h3></div>
                    <div className="post__item__price"><span>{body}</span></div>
                    <PrimaryButton onClick = {(e) => {
                            e.preventDefault();
                            onRemoveToPost();
                        } } 
                        className="post__item__btn">Remove</PrimaryButton>
                </Link>
            </li>
        
        </>
    )
}


export default PostListItem;