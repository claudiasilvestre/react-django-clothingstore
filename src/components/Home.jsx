import Layout from '../hocs/Layout'

const Home = () => {
    return (
        <Layout>
            <div>
                <img className="responsive" src="/img/wall.jpg" alt="Muro morado" />

                <div className="group">
                    <div className="clothes">
                        <img className="responsive img" src="/img/foto1.png" alt="Muro morado" />
                        <a>Camiseta oversize</a>
                        <span className="prize">€20,00</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
