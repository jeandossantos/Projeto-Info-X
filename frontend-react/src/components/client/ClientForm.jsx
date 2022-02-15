import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeName, changeEmail, changeCPF, changeWHATSAPP, add, clear, update } from '../../store/client/clientActions';

const ClientForm = function (props) {
    const { id, name, email, cpf, whatsapp } = props;
    const { changeName, changeEmail, changeCPF, changeWHATSAPP, add, clear, update } = props;

    return (
        <div className="container">
            <div role='form' className="row client-form">
                <div className="col-md-6">
                    <label className="form-label">Nome:</label>
                    <input type="text" value={name} onChange={changeName}
                        placeholder="Informe o Nome" className='form-control' />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email:</label>
                    <input type="text" value={email} onChange={changeEmail}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>
                <div className="col-md-4">
                    <label className="form-label">CPF:</label>
                    <input type="text" value={cpf} onChange={changeCPF}
                        placeholder="Informe o CPF" className='form-control' />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Whatsapp:</label>
                    <input type="text" value={whatsapp} onChange={changeWHATSAPP}
                        placeholder="Informe o número Whatsapp" className='form-control' />
                </div>
                <div className="col-md-12 mt-3">
                    {

                        !id
                            ? <button type="button" onClick={() => add(name, email, cpf, whatsapp)}
                                className="me-2 btn btn-primary">Salvar</button>
                            : <button type="button" onClick={() => update(id, name, email, cpf, whatsapp)}
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
    const { id, name, email, cpf, whatsapp } = state.client;
    return {
        id,
        name,
        email,
        cpf,
        whatsapp
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName,
        changeEmail,
        changeCPF,
        changeWHATSAPP,
        add,
        clear,
        update
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);