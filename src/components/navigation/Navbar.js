import { useState } from 'react';
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

import Alert from '../alert'
import Cart from '../Cart'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <Link to="/"><h1>CS</h1></Link>
                <div>
                    <Link to="/account/login"><AiOutlineUser size="25px" /></Link>
                    <button onClick={openCart}><AiOutlineShopping className="nav-m" size="25px" /></button>
                </div>
            </header>

            <Alert />

            <Cart isOpen={isOpen} onChangeIsOpen={openCart} />
        </>
    )
}
