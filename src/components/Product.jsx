import Layout from '../hocs/Layout'
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";

const options = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' }
]

const Product = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = '/api/product/'+productId;
        axios.get(url).then((response) => {
            setProduct(response.data.product);
        });

      }, []);

    return (
        <Layout>
            <div className="flex-justify-center">
                <div className="p-20">
                    <img className="responsive" src="/media/foto2.png" alt={product.name} />
                </div>

                <div className="flex-column p-20 w-20">
                    <h1>{product.name}</h1>
                    <span className="price f-l">€{product.price}</span>
                    <div className="pt-20">
                        <Select className="sizes-select" placeholder="Talla" options={options} />
                        <button className="cart-button mr-5 responsive">
                            Añadir a mi cesta
                        </button>
                    </div>
                    <div className="pt-20">
                        <h3>Descripción completa</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product
