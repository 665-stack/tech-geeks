import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import Videos from './Components/Videos/Videos';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([])
  return (
    // we can use here empty fragment(<></>) instant of div.

    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/videos' element={<Videos></Videos>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </BlogContext.Provider>

  );
}

export default App;
