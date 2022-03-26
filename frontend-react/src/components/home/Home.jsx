import './home.css';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PageTitle from '../templates/pageTitle';
import Card from '../templates/Card';


const Home = function (props) {
    const { name, admin } = props;

    return (
        <div className="home">
            <PageTitle title={`Bem-vindo(a), ${name || 'Usuário(a)'}`} icon={faHome}
                subTitle="Comece a trabalhar por aqui." />
            <div className="cards">
                <Link to='/clients' >
                    <Card icon={faUser} title="Clientes" />
                </Link>
                <Link to={admin ? `/users` : '#'} className={!admin ? 'admin-link' : ''}>
                    <Card icon={faUsers} title="Usuários" />
                </Link>
                <Link to={admin ? `/situations` : '#'} className={!admin ? 'admin-link' : ''}>
                    <Card icon={faCodeMerge} title="Status" />
                </Link>
                <Link to='/orders'>
                    <Card icon={faClipboardList} title="Ordens" />
                </Link>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { name, admin } = state.auth.user;
    return {
        name,
        admin
    }
}

export default connect(mapStateToProps)(Home);