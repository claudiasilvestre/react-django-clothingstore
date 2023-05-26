import Layout from '../../hocs/Layout'
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'

const Login = ({
  login
}) => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { 
    email,
    password,
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    login(email, password);
    navigate('/');
  }

  return (
    <Layout>
        <div>
          <form onSubmit={e=>onSubmit(e)} className="card">
                <h1 className="mb-10">Inicio de sesión</h1>
                <input 
                  type="email"
                  onChange={e=>onChange(e)}
                  name="email"
                  value={email}
                  className="mb-10" 
                  placeholder="Correo" 
                  required
                />
                <input 
                  type="password" 
                  onChange={e=>onChange(e)}
                  name="password"
                  value={password}
                  className="mb-10" 
                  placeholder="Contraseña" 
                  required
                />
                <button className="auth-button mb-10" type="submit">Iniciar sesión</button>
                <Link to="/account/register" className="f-s">Crear nueva cuenta</Link>
          </form>
        </div>
    </Layout>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  login
}) (Login)
