import Layout from '../hocs/Layout'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = '/api/products';
        axios.get(url).then((response) => {
            setProducts(response.data.products);
        });

      }, []);

    return (
        <Layout>
            <div>
                <img className="responsive" src="/media/neon.jpg" alt="Cartel japonés de neón" />

                <div className="group">
                    {products.map(product => (
                        <div className="clothes">
                            <Link to={`/products/${product.id}`}>
                                <img className="responsive" src="/media/foto1.png" alt={product.name} />
                            </Link>
                            <Link to={`/products/${product.id}`}>
                                <h3>{product.name}</h3>
                            </Link>
                            <span className="price">€{product.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home
