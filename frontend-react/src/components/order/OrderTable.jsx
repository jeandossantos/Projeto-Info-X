import React, { useEffect, useState } from "react";
import { connect } from "react-redux"

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import IconButton from '../templates/IconButtom';
import { remove, load } from "../../store/order/orderActions";
import { search } from "../../store/situation/situationActions";

import { bindActionCreators } from "redux";

const OrderTable = function (props) {

    function renderRows() {
        const list = props.list || [];
        const { remove, load } = props;

        return list.map(order => {
            return (
                <tr key={order.id} >
                    <td>{order.equipment}</td>
                    <td>{order.difect}</td>
                    <td>{order.service}</td>
                    <td>{order.situation.name}</td>
                    <td>{order.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    <td>{order.user.name}</td>

                    <td>
                        <IconButton onClick={() => load(order)} icon={faPencil}
                            btnStyle='warning me-2 mb-2' />
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container table-responsive">
            <table className="table   table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Equipamento</th>
                        <th scope="col">Defeito</th>
                        <th scope="col">Serviço</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ténico</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>

        </div>
    )
}


function mapStateToProps(state) {
    const { list } = state.order;
    return {
        list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ remove, load, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);