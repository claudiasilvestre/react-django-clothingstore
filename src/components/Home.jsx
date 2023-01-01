import Layout from '../hocs/Layout'

const Home = () => {
    return (
        <Layout>
            <div>
                <img className="responsive" src="/img/neon.jpg" alt="Cartel japonés de neón" />

                <div className="group">
                    {/* Se cambia por un bucle for para las prendas */}
                    <div className="clothes">
                        <img className="responsive" src="/img/foto1.png" alt="Camiseta oversize" />
                        <h3>Camiseta oversize</h3>
                        <span className="prize">€20,00</span>
                    </div>
                    {/* Termina bucle */}
                </div>
            </div>
        </Layout>
    )
}

export default Home
