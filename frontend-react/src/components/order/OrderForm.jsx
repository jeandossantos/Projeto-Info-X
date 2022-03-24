import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NumberFormat from 'react-number-format';
import './order.css';

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                    <input type="text" readOnly value={id} onChange={changeID}
                        placeholder="Informe o E-mail" className='form-control' />
                </div>
                <div className="col-sm-4 col-md-1 mt-2 ms-0 ps-0 d-flex justify-content-center align-self-end">
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#orderModal">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Buscar Ordem de Serviço</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <label className="form-label">Código:</label>
                                            <input type="text" value={id} onChange={changeID}
                                                placeholder="Informe o código da Ordem..." className='form-control' />
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={() => searchByID(id)} className="btn btn-primary">Pesquisar</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-8 col-md-2 me-0 pe-0">
                    <label className="form-label">CPF do cliente:</label>
                    <NumberFormat readOnly className='form-control' format="###.###.###-##"
                        value={client.cpf} onChange={changeClient}
                        placeholder="Informe o cliente" />
                    {/* <input type="text" readOnly value={client.cpf} onChange={changeClient}
                        placeholder="Informe o cliente" className='form-control' /> */}
                </div>
                <div className="col-sm-4 col-md-1 mt-2 ms-0 ps-0 d-flex justify-content-center align-self-end">
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#clientModal">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <div className="modal fade" id="clientModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Buscar Cliente</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <label className="form-label">CPF:</label>
                                            <input type="text" value={client.cpf} onChange={changeClient}
                                                placeholder="Informe o cpf do cliente..." className='form-control' />
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={() => searchClientByCpf(client.cpf)} className="btn btn-primary">Pesquisar</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <NumberFormat className='form-control' prefix='R$ '
                        thousandSeparator='.' decimalSeparator=','
                        decimalScale={2} allowNegative={false}
                        value={price} onChange={changePrice}
                        placeholder="Informe o Preço" />
                    {/* <input type="text" value={price} onChange={changePrice}
                        placeholder="Informe o Preço" className='form-control' /> */}
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