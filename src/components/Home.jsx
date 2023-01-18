import Layout from '../hocs/Layout'
import { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const url = '/api/products';
            const result = await axios.get(url);

            setProducts(result.data.products);
        }
        getProducts();

    }, []);

    return (
        <Layout>
            <div>
                <img className="responsive" src="/media/neon.jpg" alt="Cartel japonés de neón" />

                <div className="group">
                    {products.map(product => (
                        <div className="clothes">
                            <img className="responsive" src="/media/foto1.png" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span className="prize">€{product.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home
