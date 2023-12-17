import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import style from "./registration.module.css"

const wordPattern = "[A-Za-zА-Яа-яЁё]"

const Registration = () => {
    const emailInput = useRef(null)
    const passwordInput = useRef(null)
    const firstNameInput = useRef(null)
    const secondNameInput = useRef(null)
    const passwordCheckInput = useRef(null)

    function submitForm()
    {
        if(passwordInput.current.value === passwordCheckInput.current.value)
        {

        }
        else {
            alert("Password mismatch")
        }
    }

    return (
        <div className={style.registration}>
            <h2>Registration</h2>
            <form>
                <input className={style.def_input} ref={firstNameInput} type='text' required name='first_name' placeholder="First name" pattern={wordPattern}/>
                <input className={style.def_input} ref={secondNameInput} type='text' required name='second_name' placeholder="Second name" pattern={wordPattern}/>
                <input className={style.email_input} ref={emailInput} type='email' required name='email' placeholder="Email"/>
                <input className={style.def_input} ref={passwordInput} type='password' required name='password' placeholder='Password'/>
                <input className={style.def_input} ref={passwordCheckInput} type='password' required name='password' placeholder='Confirm password'/>
                <button className={style.def_input} type='submit' name="login" onClick={() => submitForm()}>Registration</button>
            </form>
            <span> Already have an account?
                   <Link to='/authorization/login'> Sign in</Link>
            </span>
        </div>
    );
};

export default Registration;