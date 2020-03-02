import React from "react"
import {getMonitorings, addMonitoring, UpdateMonitoring, DeleteMonitoring} from "./functions/MonitoringFunction"

export default class Monitoring extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            asignature: '',
            classroom: '',
            date: '',
            monitor_id: '',
            editDisable: false,
            state: 1,
            monitoring: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll()
    }

    onSubmit = e => {
        e.preventDefault()
        addMonitoring(
            this.state.asignature,
            this.state.classroom,
            this.state.date,
            this.state.monitor_id
        )
            .then(() => {
                this.getAll()
            })
        this.setState({
            asignature: '',
            classroom: '',
            date: '',
            monitor_id: '',
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll = () => {
        getMonitorings().then(data => {
            this.setState({
                    asignature: '',
                    classroom: '',
                    date: '',
                    monitor_id: '',
                    monitoring: [...data]
                },
                () => {
                    console.log(this.state.monitoring)
                })
        })
    }

    onUpdate = e => {
        e.preventDefault()
        UpdateMonitoring(
            this.state.asignature,
            this.state.classroom,
            this.state.date,
            this.state.monitor_id,
            this.state.id
        )
            .then(
                () => {
                    this.getAll()
                }
            )
        this.setState({
            asignature: '',
            classroom: '',
            date: '',
            monitor_id: '',
            editDisable : ''
        })
        this.getAll()
    }

    onEdit = (monitoringId , e) => {
        console.log(monitoringId)
        e.preventDefault()
        let data = [...this.state.monitoring]
        data.forEach( (monitoring , index) => {
            if (monitoring.id === monitoringId) {
                console.log(monitoring)
                this.setState({
                    id : monitoring.id,
                    asignature : monitoring.asignature,
                    classroom : monitoring.classroom,
                    date : monitoring.date,
                    monitor_id : monitoring.monitor_id,
                    editDisable : true
                })
            }
        })
    }

    onDelete = ( val , e ) => {
        e.preventDefault()
        DeleteMonitoring(val)


        var data = [...this.state.monitoring]
        data.filter(function(monitoring, index) {
            if (monitoring.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ monitoring: [...data] })

    }

    render(){
        return(

                <div className="row m-2">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card bg-dark text-white">
                            <div className="card-header"><h2 className="text-center"> Monitorias </h2></div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="asignature">Materia o Asignatura </label>
                                                <input  type="text" className="form-control" id="asignature"
                                                        name="asignature"
                                                        value={this.state.asignature || ''}
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Ingrese la Asignatura"
                                                        required/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="date_monitoring"> Fecha de Monitoria </label>
                                                <input  type="date" className="form-control" id="date_monitoring"
                                                        name="date"
                                                        value={this.state.date || ''}
                                                        onChange={this.onChange.bind(this)}
                                                        required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="classroom">Salon o Aula </label>
                                                <input  type="text" className="form-control" id="classroom"
                                                        name = "classroom"
                                                        value={this.state.classroom || ''}
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Ingrese el Salon o Aula"
                                                        required/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="monitor_id"> Monitor </label>
                                                <input  type="text" className="form-control" id="monitor_id"
                                                        name = "monitor_id"
                                                        value={this.state.monitor_id || ''}
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="monitor_id"
                                                        required/>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        !this.state.editDisable ? (
                                            <button type="submit"
                                            className="btn btn-success btn-block mb-2"
                                            onClick={this.onSubmit.bind(this)}>Submit</button>
                                        ) : ('')
                                    }
                                    {
                                        this.state.editDisable ? (
                                            <button type="submit"
                                            className="btn btn-primary btn-block mb-2"
                                            onClick={this.onUpdate.bind(this)}>Update</button>
                                        ) : ('')
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2">
                        <p className="h1 text-center">Lista de Monitorias</p>
                        <table className="table table-hover table-bordered">
                            <caption>Lista de Monitorias Registradas</caption>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Asignatura</th>
                                    <th scope="col">Aula</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Monitor</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.monitoring.map((monitoring , index) => (
                                    <tr key={index}>
                                        <td className="text-left">{monitoring.asignature}</td>
                                        <td className="text-left">{monitoring.classroom}</td>
                                        <td className="text-left">{monitoring.date}</td>
                                        <td className="text-left">{monitoring.monitor_id}</td>
                                        <td className="text-right">
                                            <button
                                                href=""
                                                className="btn btn-info btn-block"
                                                disabled={this.state.editDisable}
                                                onClick={this.onEdit.bind(this,monitoring.id)}>
                                                    Editar
                                            </button>
                                            <button
                                                href=""
                                                className="btn btn-danger btn-block"
                                                disabled={this.state.editDisable}
                                                onClick={this.onDelete.bind(this,monitoring.id)}>
                                                    Eliminar
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}
