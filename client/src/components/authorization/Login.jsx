import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import style from "./login.module.css"

const Login = () => {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    return (
        <div className={style.login}>
            <h2>Sign in</h2>
            <form>
                <input className='email_input' ref={emailInput} type='email' required name='email' placeholder="Enter your email..."/>
                <input className='psw_input' ref={passwordInput} type='password' required name='password' placeholder='Enter your password...'/>
                <button className='login_button' type='submit'  name="login" onClick={() => login()}>Login</button>
            </form>
            <span> Don't have an account yet?
                   <Link to='/authorization/registration'> Register</Link>
            </span>
        </div>
    );
};

export default Login;