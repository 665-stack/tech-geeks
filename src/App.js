import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Videos from './Components/Videos/Videos';


function App() {
  return (
    // we can use here empty fragment(<></>) instant of div.
    <>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/videos' element={<Videos></Videos>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </>
  );
}

export default App;
