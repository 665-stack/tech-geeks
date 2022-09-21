import React from 'react';
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import Indicator from '../../Assests/Image/indecator.svg'

const Blog = ({ blog }) => {
    const navigate = useNavigate();
    const { admin, blog: blogBody, imageURL, title, _id } = blog;

    return (
        <div className='blog-container'>
            <div className='blog-image-container'>
                <img src={imageURL} alt="blog img" />
            </div>
            <div className='blog-content'>
                <div>
                    <h1>{title}</h1>
                    <div className='author-name'>
                        <img src={Indicator} alt="" />
                        <p>{admin}</p>
                    </div>
                    <p className='blog-preview'>
                        {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
                        <span className='read-more' onClick={() => navigate(`/blog/${_id}`)}>... Read More</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;