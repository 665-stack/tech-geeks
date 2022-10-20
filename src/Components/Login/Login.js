import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Login.css'

const provider = new GoogleAuthProvider()
const Login = () => {
    const navigate = useNavigate()

    const googleAuth = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (
        <div className='auth-form-container'>
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Login</h1>

                    <form onSubmit={handleLogIn}>

                        <div className='input-field'>
                            <label className='email-lb' htmlFor="email">Email</label>
                            <br />
                            <input className='input' type="email" name="email" id="email" />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input' type="password" name="password" id="password" />
                        </div>

                        <button type="submit" className='
                    auth-form-submit'>
                            Login
                        </button>
                    </form>

                    <p className='redirect'>
                        New to Tech Geeks?
                        <span onClick={() => navigate('/signup')}>Create new Account</span>
                    </p>
                    <div className="horizontal-divider">
                        <div className="line-left"></div>
                        <p>or</p>
                        <div className="line-right"></div>
                    </div>

                    <button onClick={googleAuth} className="google-auth">
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;