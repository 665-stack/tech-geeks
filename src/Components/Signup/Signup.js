import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';

const provider = new GoogleAuthProvider();

const Signup = () => {
    const navigate = useNavigate();

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
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = (e.target.email.value);
        const password = (e.target.password.value);
        // const confirmPassword = (e.target.confirmPassword.value);
        createUserWithEmailAndPassword(auth, email, password)
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
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSignUp}>
                        <div className='input-field'>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input className='input' type="email" name="email" id="email" />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input' type="password" name="password" id="password" />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <br />
                            <input className='input' type="password" name="confirmPassword" id="confirm-password" />
                        </div>
                        <button type="submit" className='
            auth-form-submit'>
                            Sign Up
                        </button>
                    </form>

                    <p className='redirect'>
                        Alreay have an Account?
                        <span onClick={() => navigate('/login')}>Login</span>
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

export default Signup;