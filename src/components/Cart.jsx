import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const Cart = props => {
    const [products, setProducts] = useState([]);

    const count = 111;

    const refOne = useRef(null);

    useEffect(() => {
        const url = '/api/products';
        axios.get(url).then((response) => {
            setProducts(response.data.products);
        });

        document.addEventListener("click", handleClickOutside, true);

        return () => document.removeEventListener("click", handleClickOutside, true);
      }, []);

    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target)) {
            props.onChangeIsOpen();
        }
    };

    return (
        <div className="sidebarMask">
            <div className="sidebar" ref={refOne}>
                <div className="flex-row-space pb-20">
                    <h1>Tu carrito</h1>
                    <button onClick={props.onChangeIsOpen} className="close-button"><AiOutlineClose size="20px" /></button>
                </div>

                {products.map(product => (
                    <div className="flex-row pb-20">
                        <Link to={`/products/${product.id}`}>
                            <img src="/media/foto1.png" alt={product.name} width="100" height="150" />
                        </Link>

                        <div className="flex-column-space">
                            <div className="flex-column">
                                <Link to={`/products/${product.id}`}>
                                    <a>{product.name}</a>
                                </Link>
                                <span className="price">S</span>
                                <span className="price">€{product.price}</span>
                            </div>
                            <div className="options-group">
                                <div className="count-box mb-5">
                                    <button className="count-button"><AiOutlineMinus size="13px" /></button>
                                    <input type="text" defaultValue={count} className="cart-input" />
                                    <button className="count-button"><AiOutlinePlus size="13px" /></button>
                                </div>
                                <a href="#"><AiOutlineDelete size="20px" /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
