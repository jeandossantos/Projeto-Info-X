import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from '../templates/IconButtom';

import {
    changeID,
    changeEquipment,
    changeDifect,
    changeService,
    changePrice,
    changeSituation,
    add,
    clear,
    update,
    searchByID,
    searchClientByCpf,
    changeClient
} from '../../store/order/orderActions';


const OrderForm = function (props) {
    const { id, equipment, difect, service, price, situation, situationList, client } = props;
    const {
        changeID,
        changeEquipment,
        changeDifect,
        changeService,
        changePrice,
        changeSituation,
        add,
        clear,
        update,
        searchClientByCpf,
        searchByID,
        changeClient } = props;

    function renderSelectionOptions() {
        return situationList.map(s => {
            return (
                <option key={s.id} value={s.id}>{s.name}</option>
            )
        })
    }

    return (
        <div className="container">
            <div role='form' className="row">
                <div className="col-sm-8 col-md-2 me-0 pe-0">
                    <label className="form-label">Código:</label>
                    <input type="text" readOnly={id} value={id} onChange={changeID}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>
                <div className="col-sm-4 col-md-1 mt-2 ms-0 ps-0 d-flex justify-content-center align-self-end">
                    <IconButton btnStyle="dark" onClick={() => searchByID(id)}
                        icon={faMagnifyingGlass} />
                </div>
                <div className="col-sm-8 col-md-2 me-0 pe-0">
                    <label className="form-label">CPF do cliente:</label>
                    <input type="text" value={client.cpf || ""} onChange={changeClient}
                        placeholder="Informe o cliente" className='form-control' />
                </div>
                <div className="col-sm-4 col-md-1 mt-2 ms-0 ps-0 d-flex justify-content-center align-self-end">
                    <IconButton btnStyle="dark" onClick={() => searchClientByCpf(client.cpf)}
                        icon={faMagnifyingGlass} />
                </div>
                <div className='col-md-6'>
                    <label className="form-label">Nome do Cliente:</label>
                    <input type="text" className='form-control' readOnly value={client.name} />
                </div>
                <div className="col-sm-12 mt-2 col-md-10">
                    <label className="form-label">Equipamento:</label>
                    <input type="text" value={equipment} onChange={changeEquipment}
                        placeholder="Informe o Nome" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                    <label className="form-label">Defeito:</label>
                    <textarea type="text" value={difect} onChange={changeDifect}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>

                <div className="col-sm-12 col-md-6 mt-2">
                    <label className="form-label">Serviço/Solução:</label>
                    <textarea type="text" value={service} onChange={changeService}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>
                <div></div>
                <div className="col-md-3 mt-2">
                    <label className='form-label'>Situação:</label>
                    <select value={situation.id} onChange={changeSituation} className="form-select">
                        <option value={0}>Escolha...</option>
                        {renderSelectionOptions()}
                    </select>
                </div>

                <div className="col-sm-8 col-md-2 pe-0 mt-2">
                    <label className="form-label">Preço:</label>
                    <input type="text" value={price} onChange={changePrice}
                        placeholder="Informe o Preço" className='form-control' />
                </div>
                <div className="col-md-12 mt-3">
                    {

                        !id
                            ? <button type="button" onClick={() => add()}
                                className="me-2 btn btn-primary">Salvar</button>
                            : <button type="button" onClick={() => update()}
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
    const { id, equipment, difect, service, price, situation, client, situationList } = state.order;
    return {
        id, equipment, difect, service, price, situation, situationList, client
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeID,
        changeEquipment,
        changeDifect,
        changeService,
        changePrice,
        changeSituation,
        add,
        clear,
        update,
        searchByID,
        searchClientByCpf,
        changeClient
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);