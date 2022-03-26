import { connect } from "react-redux"
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logout } from "../../store/auth/authActions";

const PrivateRoute = ({ children, logout, isSignedIn, admin, role }) => {

    if (!admin && role === 'admin') {
        return <Navigate to='/home' />
    }

    if (!isSignedIn) {
        logout();
        return <Navigate to='/' />
    }

    return children;
}

function mapStateToProps(state) {
    const { isSignedIn, user } = state.auth;
    return { isSignedIn, admin: user.admin }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)