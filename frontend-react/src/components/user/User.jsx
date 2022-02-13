import PageTitle from '../templates/PageTitle';
import UserForm from './UserForm';

export default function () {
    return (
        <div className="user">
            <PageTitle title="Cadastre, Liste, Atualize e Remova usuários nesta página." />
            <UserForm />
        </div>

    )
}