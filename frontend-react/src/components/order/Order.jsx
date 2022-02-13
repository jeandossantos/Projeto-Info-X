import PageTitle from '../templates/PageTitle';
import OrderForm from './OrderForm';

export default function () {
    return (
        <div className="order">
            <PageTitle title="Cadastre, Liste e Atualize Ordens de Serviço nesta página." />
            <OrderForm />
        </div>

    )
}