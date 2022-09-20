import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h1>Home is here brah!</h1>
        </div>
    );
};

export default Home;