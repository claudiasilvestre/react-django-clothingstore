import Layout from '../hocs/Layout'
import { AiOutlineHeart } from "react-icons/ai";
import Select from 'react-select'

const options = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' }
]

const Product = () => {
    return (
        <Layout>
            <div className="product">
                <div className="p-20">
                    <img className="responsive" src="/img/foto2.png" alt="Camiseta oversize" />
                </div>

                <div className="p-20 product-description">
                    <h1>Camiseta oversize</h1>
                    <span className="prize f-l">€20,00</span>
                    <div className="pt-20">
                        <Select className="sizes-select" placeholder="Talla" options={options} />
                        <div className="options-group">
                            <button className="cart-button mr-5 responsive">
                                Añadir a mi cesta
                            </button>
                            <button className="heart-button ml-5">
                                <AiOutlineHeart size="25px" />
                            </button>
                        </div>
                    </div>
                    <div className="pt-20">
                        <h3>Descripción completa</h3>
                        <p>Camiseta básica oversize de manga corta, con cuello redondo y confeccionadas en tejido 100% algodón.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product
