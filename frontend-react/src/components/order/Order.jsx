import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../templates/PageTitle';
import OrderForm from './OrderForm';

export default function () {
    return (
        <div className="order">
            <PageTitle title="Ordens de serviço" icon={faClipboardList}
                subTitle="Cadastre, Liste e Atualize Ordens de Serviço nesta página." />
            <OrderForm />
        </div>

    )
}