import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetails.css'

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    return (
        <>
            <div className='header-gradient'>
                <div>
                    <button className='back-button' onClick={() => navigate(-1)}>  <p>Back</p>
                    </button>
                    <div className='blog-details'>
                        <div className='blog-image'>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;