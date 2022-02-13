import './clientForm.css';

export default function () {
    return (
        <div className="container">
            <div role='form' className="row">
                <div className="col-md-6">
                    <label className="form-label">Nome:</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email:</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-md-4">
                    <label className="form-label">CPF:</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Whatsapp:</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-md-12 mt-3">
                    <button type="button" className="me-2 btn btn-primary">Salvar</button>
                    <button type="button" className="me-2 btn btn-secondary">Cancelar</button>
                </div>
            </div>
            <hr />
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Whatsapp</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}