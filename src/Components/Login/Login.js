import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='auth-form-container'>
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Login</h1>
                    <form>
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

                    <button className="google-auth">
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;