import { Fragment } from 'react'
import { connect } from 'react-redux'

function Alert ({ alert }) {

    const displayAlert = () => {
        if (alert !== null){
            return (
                <div className={`alert-${alert.alertType}`}>
                    <span>{alert.msg}</span>
                </div>
            )
        } else {
            return(
                <Fragment></Fragment>
            )
        }
    }

    return (
        <Fragment>
            {displayAlert()}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    alert: state.Alert.alert
})

export default connect(mapStateToProps)(Alert)
