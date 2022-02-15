import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './client.css';

import PageTitle from '../templates/PageTitle';
import ClientForm from './ClientForm';
import ClientTable from './ClientTable';
import Pagination from "react-js-pagination";
import { search, changePage } from '../../store/client/clientActions';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Client extends Component {
    constructor(props) {
        super(props);
        this.changePageHandle = this.changePageHandle.bind(this);
    }

    componentDidMount() {
        this.props.search();
    }

    changePageHandle(page) {
        this.props.changePage(page);
        this.props.search(page);
    }

    render() {
        const { page, limit, count } = this.props;

        return (
            <div className="client">
                <PageTitle title="Clientes" icon={faUser}
                    subTitle="Cadastre, Liste, Atualize e Remova clientes nesta página." />
                <ClientForm />
                <ClientTable />
                <Pagination itemClass="page-item" itemsCountPerPage={limit}
                    onChange={this.changePageHandle} activePage={page} totalItemsCount={count}
                    innerClass="pagination"
                    pageRangeDisplayed={3} linkClass="page-link" />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search, changePage }, dispatch);
}

function mapStateToProps(state) {
    const { page, limit, list, count } = state.client;
    return {
        page,
        limit,
        list,
        count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);