import PageTitle from '../templates/PageTitle';
import './client.css';
import ClientForm from './ClientForm';

export default function () {
    return (
        <div className="client">
            <PageTitle title="Cadastre, Liste, Atualize e Remova clientes nesta página." />
            <ClientForm />
        </div>

    )
}