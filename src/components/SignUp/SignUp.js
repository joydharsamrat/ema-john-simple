import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)
    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return
        }
        if (password !== confirm) {
            setError("Password didn't match");
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='confirm password' required />
                </div>
                <p className='error-message'><small>{error}</small></p>
                <button className='btn-submit' type="confirm">Sign Up</button>
            </form>
            <p className='login-toggle-link'>Already have an account ? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;