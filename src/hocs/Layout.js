import { Navbar } from '../components/navigation/Navbar'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout
