import React, {useRef} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import style from "./authorization.module.css"

const Authorization = () => {

    return (
        <div>
            <main className={style.authorization_page}>
                {/*<img>*/}
                <div className={style.outlet}><Outlet/></div>
                <div className="descriptions">
                    <p></p>
                    <img/>
                    <img/>
                    <p></p>
                </div>
            </main>
            <footer>
                {/*LINKS*/}
            </footer>
        </div>

    )
};

export default Authorization;