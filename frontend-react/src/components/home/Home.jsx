import './home.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

import Card from '../templates/Card';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <div className="home">
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