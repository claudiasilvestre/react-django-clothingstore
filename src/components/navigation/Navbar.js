import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import Alert from '../alert'

export const Navbar = () => {
    return (
        <>
            <header>
                <Link to="/"><h1>CS</h1></Link>
                <div>
                    <Link to="/account/login"><AiOutlineUser size="25px" /></Link>
                    <a href="#"><AiOutlineShopping className="nav-m" size="25px" /></a>
                </div>
            </header>
            <Alert />
        </>
    )
}
