import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from '../templates/IconButtom';

import {
    changeName,
    changeEmail,
    changeCPF,
    changeWHATSAPP,
    changePassword,
    changeConfirmPassword,
    add,
    clear,
    update,
    searchByCPF
} from '../../store/user/userActions';


const UserForm = function (props) {
    const { id, name, email, cpf, whatsapp, password, confirmPassword } = props;
    const { changeName,
        changeEmail,
        changeCPF,
        changeWHATSAPP,
        changePassword,
        changeConfirmPassword,
        add,
        clear,
        update,
        searchByCPF } = props;



    return (
        <div className="container">
            <div role='form' className="row">
                <div className="col-sm-12   col-md-6">
                    <label className="form-label">Nome:</label>
                    <input type="text" value={name} onChange={changeName}
                        placeholder="Informe o Nome" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6">
                    <label className="form-label">Email:</label>
                    <input type="text" value={email} onChange={changeEmail}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>
                <div className="col-sm-8 col-md-3 pe-0">
                    <label className="form-label">CPF:</label>
                    <input type="text" value={cpf} onChange={changeCPF}
                        placeholder="Informe o CPF" className='form-control' />
                </div>
                <div className="col-sm-4 col-md-1 ms-0 ps-0 d-flex justify-content-center align-self-end">
                    <IconButton btnStyle="dark" onClick={() => searchByCPF(cpf)}
                        icon={faMagnifyingGlass} />
                    <br />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Whatsapp:</label>
                    <input type="text" value={whatsapp} onChange={changeWHATSAPP}
                        placeholder="Informe o número Whatsapp" className='form-control' />
                </div>
                <div></div>
                <div className="col-md-3 col-sm-6">
                    <label className="form-label">Senha:</label>
                    <input type="password" value={password} onChange={changePassword}
                        placeholder="Informe o número Whatsapp" className='form-control' />
                </div>
                <div className="col-md-3 col-sm-6">
                    <label className="form-label">Confirmar Senha:</label>
                    <input type="password" value={confirmPassword} onChange={changeConfirmPassword}
                        placeholder="Informe o número Whatsapp" className='form-control' />
                </div>

                <div className="col-md-12 mt-3">
                    {

                        !id
                            ? <button type="button"
                                onClick={() => add(name, email, cpf, whatsapp, password, confirmPassword)}
                                className="me-2 btn btn-primary">Salvar</button>
                            : <button type="button"
                                onClick={() => update(id, name, email, cpf, whatsapp, password, confirmPassword)}
                                className="me-2 btn btn-warning">Atualizar</button>
                    }
                    <button type="button" onClick={clear} className="me-2 btn btn-secondary">Cancelar</button>
                </div>
            </div>
            <hr />
        </div>

    )
}

function mapStateToProps(state) {
    const { id, name, email, cpf, whatsapp, password, confirmPassword } = state.user;
    return {
        id,
        name,
        email,
        cpf,
        whatsapp,
        password,
        confirmPassword
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName,
        changeEmail,
        changeCPF,
        changeWHATSAPP,
        changePassword,
        changeConfirmPassword,
        add,
        clear,
        update,
        searchByCPF
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);