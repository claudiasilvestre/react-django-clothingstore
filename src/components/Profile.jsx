import Layout from '../hocs/Layout'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth'
import { useNavigate } from 'react-router-dom';

const Profile = ({
    logout
  }) => {
  
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const navigate = useNavigate();

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

    const onSubmitInfo = e => {
        
    }

    const [formDataPass, setFormDataPass] = useState({
        new_password: '',
        re_password: '',
        current_password: ''
    })

    const { 
        new_password,
        re_password,
        current_password
    } = formDataPass;

    const onChangePass = e => setFormDataPass({ ...formDataPass, [e.target.name]: e.target.value });

    const onSubmitPass = e => {
        
    }

    const onClickLogout = e => {
        e.preventDefault();
        logout();
        window.scrollTo(0,0);
        navigate('/');
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
                    name="new_password"
                    value={new_password}
                    className="mb-10" 
                    placeholder="Nueva contraseña" 
                    required
                    />
                    <input 
                    type="password" 
                    onChange={e=>onChangePass(e)}
                    name="re_password"
                    value={re_password}
                    className="mb-10" 
                    placeholder="Repetir nueva contraseña" 
                    required
                    />
                    <input 
                    type="password" 
                    onChange={e=>onChangePass(e)}
                    name="current_password"
                    value={current_password}
                    className="mb-10" 
                    placeholder="Contraseña actual" 
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
                    <button onClick={onClickLogout} className="logout-button">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  logout
}) (Profile)
