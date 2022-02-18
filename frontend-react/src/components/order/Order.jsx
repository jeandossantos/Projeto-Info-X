import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './order.css';

import PageTitle from '../templates/PageTitle';
import OrderForm from './OrderForm';
import OrderTable from './OrderTable';
import Pagination from "react-js-pagination";

import { search, getSituationList, changePage } from '../../store/order/orderActions';

class Client extends Component {
    constructor(props) {
        super(props);
        this.changePageHandle = this.changePageHandle.bind(this);
    }

    componentDidMount() {
        this.props.search();
        this.props.getSituationList();
    }

    changePageHandle(page) {
        this.props.changePage(page);
        this.props.search(page);
    }

    render() {
        const { page, limit, count } = this.props;

        return (
            <div className="client">
                <PageTitle title="Ordens" icon={faUser}
                    subTitle="Cadastre, Liste e Atualize Ordens de Serviço nesta página." />
                <OrderForm />
                <OrderTable />
                <Pagination itemClass="page-item" itemsCountPerPage={limit}
                    onChange={this.changePageHandle} activePage={page} totalItemsCount={count}
                    innerClass="pagination"
                    pageRangeDisplayed={3} linkClass="page-link" />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search, getSituationList, changePage }, dispatch);
}

function mapStateToProps(state) {
    const { page, limit, list, count } = state.order;
    return {
        page,
        limit,
        list,
        count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);