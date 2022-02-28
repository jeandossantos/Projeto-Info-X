import { connect } from "react-redux"
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logout } from "../../store/auth/authActions";

const PrivateRoute = ({ children, logout, isSignedIn }) => {

    if (!isSignedIn) {
        logout();
        return <Navigate to='/signin' />
    }

    return children;
}

function mapStateToProps(state) {
    const { isSignedIn } = state.auth;
    return { isSignedIn }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)