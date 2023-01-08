import Layout from '../../hocs/Layout'

const Login = () => {
  return (
    <Layout>
        <div>
            <div className="card">
                <h1 className="mb-10">Inicio de sesión</h1>
                <input type="email" className="mb-10" placeholder="Correo" />
                <input type="password" className="mb-10" placeholder="Contraseña" />
                <button className="auth-button mb-10" type="submit">Iniciar sesión</button>
                <a className="f-s">Crear nueva cuenta</a>
            </div>
        </div>
    </Layout>
  )
}

export default Login
