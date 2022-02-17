import './situation.css';
import React from 'react';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../templates/PageTitle';
import SituationForm from './SituationForm';
import SituationTable from './SituationTable';

import { search, changePage } from '../../store/situation/situationActions';
import Pagination from 'react-js-pagination';

class Situation extends React.Component {

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
            <div className="situation">
                <PageTitle title="Situações/Estados" icon={faCodeMerge}
                    subTitle="Cadastre, Liste, Atualize e Remova os estados para as orders de serviço nesta página." />
                <SituationForm />
                <SituationTable />
                <Pagination itemClass="page-item" itemsCountPerPage={limit}
                    onChange={this.changePageHandle} activePage={page} totalItemsCount={count | 0}
                    innerClass="pagination"
                    pageRangeDisplayed={3} linkClass="page-link" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { page, limit, list, count } = state.situation;
    return {
        page,
        limit,
        list,
        count
    }
}

function mapDispacthToProps(dispactch) {
    return bindActionCreators({ search, changePage }, dispactch)
}

export default connect(mapStateToProps, mapDispacthToProps)(Situation);