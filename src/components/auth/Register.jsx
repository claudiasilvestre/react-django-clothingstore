import Layout from '../../hocs/Layout'

const Register = () => {
  return (
    <Layout>
        <div>
            <div className="card">
                <h1 className="mb-10">Registro</h1>
                <input type="text" className="mb-10" placeholder="Nombre" />
                <input type="text" className="mb-10" placeholder="Apellidos" />
                <input type="email" className="mb-10" placeholder="Correo" />
                <input type="password" className="mb-10" placeholder="Contraseña" />
                <button className="auth-button mb-10" type="submit">Registrarse</button>
                <a className="f-s">Ya tengo una cuenta</a>
            </div>
        </div>
    </Layout>
  )
}

export default Register
