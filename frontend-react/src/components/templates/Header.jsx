import './header.css';

import { Link } from 'react-router-dom';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { logout } from '../../store/auth/authActions';
import { connect } from 'react-redux';
import IF from './IF';

const Header = function (props) {
    return (
        <header className='header'>
            <p className='title'>
                <Link to='/home' > Projeto Info <span className='x'>X</span></Link>
            </p>

            <IF isVisible={props.isSignedIn}>
                <div className="logout">
                    <button className="btn btn-danger" data-bs-toggle="modal" title='Sair'
                        data-bs-target="#logout-modal" > <FontAwesomeIcon icon={faPowerOff} /> </button>

                    <div className=" modal" id="logout-modal" tabIndex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Confirmação</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Tem certeza que deseja sair da aplicação?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={props.logout} className="btn btn-primary" data-bs-dismiss="modal" >Sair</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </IF>
        </header>
    )

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}

function mapStateToProps(state) {
    const { isSignedIn } = state.auth;
    return { isSignedIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);