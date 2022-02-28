import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../templates/PageTitle';
import './signin.css';

import { changeEmail, changePassword } from '../../store/user/userActions';
import { login } from '../../store/auth/authActions';

const Signin = function (props) {
    const { email, password } = props;
    const { changeEmail, changePassword, login } = props;

    const token = localStorage.getItem('my_user');
    if (token) window.location.pathname = '/home';

    return (
        <div className="signin">
            <PageTitle title="Login" subTitle="Faça a autenticação aqui." icon={faUserLock} />
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail:</label>
                    <input type="email" value={email} onChange={changeEmail}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                    <input type="password" value={password} onChange={changePassword} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={() => login(email, password)}
                    className="btn btn-primary">Entrar</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { email, password } = state.user;

    return { email, password }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeEmail, changePassword, login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);