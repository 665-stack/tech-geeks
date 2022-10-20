import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import { useState } from 'react';

const provider = new GoogleAuthProvider();

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });
    console.log(email);

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
    const handleEmail = (emailInput) => {
        if (/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" })
        }
        else {
            setEmail({ value: "", error: "Invaild email" })

        }

    }
    const handlePassword = (passwordInput) => {
        if (passwordInput.length < 6) {
            setPassword({ value: "", error: 'Password is too short' })
        }
        else {
            setPassword({ value: passwordInput, error: "" })
        }

    }
    const handleConfirmPassword = (ConfirmPasswordInput) => {
        setConfirmPassword(ConfirmPasswordInput)
    }


    const handleSignUp = (e) => {
        e.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" })
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" })
        }

        if (email.value && password.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
        return;


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
                            <input className='input' type="email" name="email" id="email" onBlur={(event) => handleEmail(event.target.value)} />
                            {
                                email?.error && <p className='error-msg'>{email.error}</p>
                            }
                        </div>


                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input' type="password" name="password" id="password" onBlur={(event) => handlePassword(event.target.value)} />
                            {
                                password?.error && <p className='error-msg'>{password.error}</p>
                            }
                        </div>
                        <div className='input-field'>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <br />
                            <input className='input' type="password" name="confirmPassword" id="confirm-password" onBlur={(event) => handleConfirmPassword(event.target.value)} />
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