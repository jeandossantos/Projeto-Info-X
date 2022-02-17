import React from "react";
import { connect } from "react-redux"

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import IconButton from '../templates/IconButtom';
import { remove, load } from "../../store/situation/situationActions";

import { bindActionCreators } from "redux";

const SituationTable = function (props) {


    function renderRows() {
        const list = props.list || [];
        const { remove, load } = props;
        return list.map(situation => {
            return (
                <tr key={situation.id} >
                    <th scope="row">{situation.id}</th>
                    <td>{situation.name}</td>
                    <td>
                        <IconButton onClick={() => load(situation)} icon={faPencil}
                            btnStyle='warning me-2' />
                        <IconButton onClick={() => remove(situation.id)} icon={faTrash}
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
    const { list } = state.situation;
    return {
        list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ remove, load }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SituationTable);