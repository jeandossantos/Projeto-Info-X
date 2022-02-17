import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeName, add, update, clear } from '../../store/situation/situationActions';

function SituationForm(props) {
    const { id, name, changeName, add, update, clear } = props;

    return (
        <div className="container">
            <div role='form' className="row">
                <div className="col-sm-12   col-md-6">
                    <label className="form-label">Nome:</label>
                    <input type="text" value={name} onChange={changeName}
                        placeholder="Informe o Nome" className='form-control' />
                </div>
                <div className="col-md-12 mt-3">
                    {

                        !id
                            ? <button type="button" onClick={() => add(name)}
                                className="me-2 btn btn-primary">Salvar</button>
                            : <button type="button" onClick={() => update(id, name)}
                                className="me-2 btn btn-warning">Atualizar</button>
                    }
                    <button type="button" onClick={clear} className="me-2 btn btn-secondary">Cancelar</button>
                </div>
            </div>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

function mapStateToProps(state) {
    const { id, name } = state.situation;
    return {
        id,
        name
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeName, add, update, clear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SituationForm);