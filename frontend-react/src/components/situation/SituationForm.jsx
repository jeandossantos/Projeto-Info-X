
export default function () {
    return (
        <div className="container">
            <div role='form' className="row">
                <div className="col-md-6">
                    <label className="form-label">Nome:</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-md-6 d-flex align-items-end">
                    <button type="button" className="me-2 btn btn-primary">Salvar</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </div>
            </div>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}