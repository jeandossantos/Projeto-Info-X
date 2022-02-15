import { faUsers } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../templates/PageTitle';
import UserForm from './UserForm';

export default function () {
    return (
        <div className="user">
            <PageTitle title="Usuários" icon={faUsers} subTitle="Cadastre, Liste, Atualize e Remova usuários nesta página." />
            <UserForm />
        </div>

    )
}