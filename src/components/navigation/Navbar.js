import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";

export const Navbar = () => {
    return (
        <header>
            <a href="/"><h1>CS</h1></a>
            <div>
                <a href="#"><AiOutlineUser size="25px" /></a>
                <a href="#"><AiOutlineShopping className="nav-m" size="25px" /></a>
            </div>
        </header>
    )
}
