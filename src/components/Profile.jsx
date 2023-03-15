import Layout from '../hocs/Layout'
import { useState, useEffect } from 'react'

const Profile = () => {
  
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [formDataInfo, setFormDataInfo] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    const { 
        first_name,
        last_name,
        email
    } = formDataInfo;

    const onChangeInfo = e => setFormDataInfo({ ...formDataInfo, [e.target.name]: e.target.value });

    const onSubmitInfo = e =>{
        
    }

    const [formDataPass, setFormDataPass] = useState({
        password: '',
        re_password: ''
    })

    const { 
        password,
        re_password
    } = formDataPass;

    const onChangePass = e => setFormDataPass({ ...formDataPass, [e.target.name]: e.target.value });

    const onSubmitPass = e =>{
        
    }

    return (
        <Layout>
            <div className="card">
                <h1 className="mb-10">Gestionar mi cuenta</h1>

                <form onSubmit={e=>onSubmitInfo(e)} className="pt-20 pb-20 b-b">
                    <h3 className="mb-10">Cambiar información</h3>
                    <input
                    type="text" 
                    onChange={e=>onChangeInfo(e)} 
                    name="first_name" 
                    value={first_name} 
                    className="mb-10" 
                    placeholder="Nombre" 
                    required
                    />
                    <input 
                    type="text"
                    onChange={e=>onChangeInfo(e)}
                    name="last_name"
                    value={last_name}
                    className="mb-10" 
                    placeholder="Apellidos"
                    required
                    />
                    <input 
                    type="email"
                    onChange={e=>onChangeInfo(e)}
                    name="email"
                    value={email}
                    className="mb-10" 
                    placeholder="Correo" 
                    required
                    />
                    <button 
                    type="submit" 
                    className="auth-button mb-10"
                    >
                        Cambiar
                    </button>
                </form>

                <form onSubmit={e=>onSubmitPass(e)} className="pt-20 pb-20 b-b">
                    <h3 className="mb-10">Cambiar contraseña</h3>
                    <input 
                    type="password" 
                    onChange={e=>onChangePass(e)}
                    name="password"
                    value={password}
                    className="mb-10" 
                    placeholder="Contraseña" 
                    required
                    />
                    <input 
                    type="password" 
                    onChange={e=>onChangePass(e)}
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
                        Cambiar
                    </button>
                </form>

                <div className="pt-20 pb-20">
                    <button className="logout-button">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile