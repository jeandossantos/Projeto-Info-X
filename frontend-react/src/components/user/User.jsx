import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './user.css';

import PageTitle from '../templates/PageTitle';
import UserForm from './UserForm';
import UserTable from './UserTable';
import Pagination from "react-js-pagination";
import { search, changePage } from '../../store/user/userActions';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class User extends Component {
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
            <div className="user">
                <PageTitle title="Usuários" icon={faUsers}
                    subTitle="Cadastre, Liste, Atualize e Remova usuários nesta página." />
                <UserForm />
                <UserTable />
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
    const { page, limit, list, count } = state.user;
    return {
        page,
        limit,
        list,
        count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);