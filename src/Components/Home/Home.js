import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css'

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                console.log(data);
            })
    }, [])
    return (
        <div className='blogs-container'>
            {
                blogs.map((blog, index) => (
                    <Blog blog={blog} key={blog._id}></Blog>
                )
                )
            }
        </div>
    );
};

export default Home;