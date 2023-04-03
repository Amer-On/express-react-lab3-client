// import Table from 'react-bootstrap/Table'

function DBTable(props) {
    return (
        <section className="table">
            <div className="bg-image h-100 backer">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card shadow-2-strong">
                                    <div className="card-body p-0">
                                        <div className="table-responsive table-scroll wrapper" data-mdb-perfect-scrollbar="true">
                                            <table className="table table-dark mb-0">
                                                {/*<caption>{props.title}</caption>*/}
                                                <thead className="tableHead">
                                                <tr className="text-uppercase header">
                                                    {props.columns.map(column => (
                                                        <th scope='col' key={column}> {column}</th>
                                                    ))}
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {props.rows.map(row => (
                                                        <tr key={row.id}>
                                                            {Object.entries(row).map(el => (
                                                                <td key={el[0]}>{el[1]}</td>
                                                            ))}
                                                        </tr>
                                                    )
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default DBTable;