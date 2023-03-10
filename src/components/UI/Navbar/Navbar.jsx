import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import cl from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <MyButton><Link className={cl.button} to="/about">О сайте</Link></MyButton>
                <MyButton><Link className={cl.button} to="/posts">Посты</Link></MyButton>
            </div>
        </div>
    );
};

export default Navbar;
