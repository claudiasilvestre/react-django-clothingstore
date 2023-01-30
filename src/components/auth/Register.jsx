import Layout from '../../hocs/Layout'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../redux/actions/auth'

const Signup = ({
  signup
}) => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  })

  const { 
    first_name,
    last_name,
    email,
    password,
    re_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    signup(first_name, last_name, email, password, re_password);
    window.scrollTo(0,0)
  }

  return (
    <Layout>
        <div>
            <form onSubmit={e=>onSubmit(e)} className="card">
                <h1 className="mb-10">Registro</h1>
                <input
                  type="text" 
                  onChange={e=>onChange(e)} 
                  name="first_name" 
                  value={first_name} 
                  className="mb-10" 
                  placeholder="Nombre" 
                  required
                />
                <input 
                  type="text"
                  onChange={e=>onChange(e)}
                  name="last_name"
                  value={last_name}
                  className="mb-10" 
                  placeholder="Apellidos"
                  required
                />
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
                <input 
                  type="password" 
                  onChange={e=>onChange(e)}
                  name="re_password"
                  value={re_password}
                  className="mb-10" 
                  placeholder="Repetir contraseña" 
                  required
                />
                <button 
                  type="submit" 
                  className="auth-button mb-10"
                >
                  Registrarse
                </button>
                <Link to="/account/login" className="f-s">Ya tengo una cuenta</Link>
            </form>
        </div>
    </Layout>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  signup
}) (Signup)
