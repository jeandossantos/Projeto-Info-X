import './home.css';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import PageTitle from '../templates/pageTitle';
import Card from '../templates/Card';


export default function () {
    return (
        <div className="home">
            <PageTitle title="Bem vindo(a), Jean!" icon={faHome}
                subTitle="Comece a Navegador por aqui." />
            <div className="cards">
                <Link to='/clients'>
                    <Card icon={faUser} title="Clientes" />
                </Link>
                <Link to='/users'>
                    <Card icon={faUsers} title="Usuários" />
                </Link>
                <Link to='/situations'>
                    <Card icon={faCodeMerge} title="Estados" />
                </Link>
                <Link to='/orders'>
                    <Card icon={faClipboardList} title="Ordens" />
                </Link>
            </div>
        </div>
    )
}