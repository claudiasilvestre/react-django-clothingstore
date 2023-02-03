import { Navbar } from '../components/navigation/Navbar'
import { check_authenticated, load_user, refresh } from '../redux/actions/auth';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Layout = (props) => {

    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
    }, []);

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null, {
    check_authenticated,
    load_user,
    refresh
}) (Layout)
