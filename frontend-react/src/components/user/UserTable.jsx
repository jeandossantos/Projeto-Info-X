import React from "react";
import { connect } from "react-redux"

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import IconButton from '../templates/IconButtom';
import { remove, load } from "../../store/user/userActions";

import { bindActionCreators } from "redux";

const UserTable = function (props) {


    function renderRows() {
        const list = props.list || [];
        const { remove, load } = props;
        return list.map(user => {
            return (
                <tr key={user.id} >
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.cpf}</td>
                    <td>{user.whatsapp}</td>
                    <td>
                        <IconButton onClick={() => load(user)} icon={faPencil}
                            btnStyle='warning me-2' />
                        <IconButton onClick={() => remove(user.id)} icon={faTrash}
                            btnStyle='danger' />
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
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Whatsapp</th>
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
    const { list } = state.user;
    return {
        list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ remove, load }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);