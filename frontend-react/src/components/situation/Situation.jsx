import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../templates/PageTitle';
import SituationForm from './SituationForm';

export default function () {
    return (
        <div className="situation">
            <PageTitle title="Situações/Estados" icon={faCodeMerge} subTitle="Cadastre, Liste, Atualize e Remova os estados para as orders de serviço nesta página." />
            <SituationForm />
        </div>

    )
}