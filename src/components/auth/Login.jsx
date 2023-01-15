import Layout from '../../hocs/Layout'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
        <div>
            <div className="card">
                <h1 className="mb-10">Inicio de sesión</h1>
                <input type="email" className="mb-10" placeholder="Correo" />
                <input type="password" className="mb-10" placeholder="Contraseña" />
                <button className="auth-button mb-10" type="submit">Iniciar sesión</button>
                <Link to="/account/register" className="f-s">Crear nueva cuenta</Link>
            </div>
        </div>
    </Layout>
  )
}

export default Login
