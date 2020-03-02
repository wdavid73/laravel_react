import React from "react"
import {getList, addItem , UpdateItem , deleteItem} from "./functions/MonitorFunctions"

export default class Monitor extends React.Component{
    constructor(){
        super()
        this.state = {
            id : '',
            first_name : '',
            second_name : '',
            first_lastname : '',
            second_lastname : '',
            academic_program : '',
            semester : '',
            document : '',
            email : '',
            cellphone : '',
            editDisable : false,
            state : 1,
            items:[]
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getAll = () =>{
        getList().then(data =>{
            this.setState({
                first_name : '',
                second_name : '',
                first_lastname : '',
                second_lastname : '',
                academic_program : '',
                semester : '',
                document : '',
                email : '',
                cellphone : '',
                items:[...data]
            },
            () => {
                console.log(this.state.items)
            })
        })
    }

    onSubmit = e =>{
        e.preventDefault()
        addItem(
            this.state.first_name ,
            this.state.second_name ,
            this.state.first_lastname ,
            this.state.second_lastname ,
            this.state.cellphone,
            this.state.document,
            this.state.email ,
            this.state.academic_program ,
            this.state.semester
        )
        .then( () => {
            this.getAll()
        })
        this.setState({
                first_name : '',
                second_name : '',
                first_lastname : '',
                second_lastname : '',
                academic_program : '',
                semester : '',
                document : '',
                email : '',
                cellphone : ''
        })
    }

    onUpdate = e => {
        e.preventDefault()
        UpdateItem(
            this.state.first_name ,
            this.state.second_name ,
            this.state.first_lastname ,
            this.state.second_lastname ,
            this.state.cellphone,
            this.state.document,
            this.state.email ,
            this.state.academic_program ,
            this.state.semester,
            this.state.id
        )
        .then(
            () => {
                this.getAll()
            }
        )
        this.setState({
            first_name : '',
            second_name : '',
            first_lastname : '',
            second_lastname : '',
            academic_program : '',
            semester : '',
            document : '',
            email : '',
            cellphone : '',
            editDisable : ''
        })
        this.getAll()
    }

    onEdit = (itemId , e) => {
        e.preventDefault()
        let data = [...this.state.items]
        data.forEach( (item , index) => {
            if ( item.id === itemId ){
                this.setState({
                    id : item.id,
                    first_name : item.first_name,
                    second_name : item.second_name,
                    first_lastname : item.first_lastname,
                    second_lastname : item.second_lastname,
                    academic_program : item.academic_program,
                    semester : item.semester,
                    document : item.document,
                    email : item.email,
                    cellphone : item.cellphone,
                    editDisable : true
                })
            }
        })
    }

    onDelete = (val , e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter(function(item, index) {
            if (item.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
    }

    render(){
        return(
            <div className="row m-2">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card bg-dark text-white">
                        <div className="card-header"><h2 className="text-center"> Monitor </h2></div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="row ">
                                            <div className="col mt-2">
                                                <label htmlFor="first_name">Primer Nombre</label>
                                                <input  type="text"   className="form-control" id="first_name"
                                                        name="first_name" value={this.state.first_name || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Primer Nombre"
                                                        required/>
                                            </div>
                                            <div className="col mt-2">
                                                <label htmlFor="second_name">Segundo Nombre</label>
                                                <input  type="text"   className="form-control" id="second_name"
                                                            name="second_name" value={this.state.second_name || '' }
                                                            onChange={this.onChange.bind(this)}
                                                            placeholder="Segundo Nombre"/>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col mt-2">
                                            <label htmlFor="first_lastname">Primer Apellido</label>
                                            <input  type="text"   className="form-control" id="first_lastname"
                                                        name="first_lastname" value={this.state.first_lastname || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Primer Apellido"
                                                        required/>
                                            </div>
                                            <div className="col mt-2">
                                            <label htmlFor="second_lastname">Segundo Apellido</label>
                                            <input  type="text"   className="form-control" id="second_lastname"
                                                        name="second_lastname" value={this.state.second_lastname || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Segundo Apellido"/>
                                            </div>
                                        </div>
                                        <label htmlFor="academic_program">Programa Academico</label>
                                        <div className="row ">
                                            <div className="col mt-2">
                                            <input  type="text"   className="form-control" id="academic_program"
                                                        name="academic_program" value={this.state.academic_program || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Programa Academico"
                                                        required/>
                                            </div>
                                        </div>

                                        <label htmlFor="semester">Semestre</label>
                                        <div className="row ">
                                            <div className="col mt-2">
                                            <input  type="number" className="form-control" id="semester"
                                                        name="semester" value={this.state.semester || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Semestre"
                                                        required/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col mt-2">
                                            <label htmlFor="document">Cedula</label>
                                            <input  type="number" className="form-control" id="document"
                                                        name="document" value={this.state.document || '' }
                                                        onChange={this.onChange.bind(this)}
                                                        placeholder="Cedula"
                                                        required/>
                                            </div>
                                        </div>
                                        <h3 className="text-center mt-2">Informacion de Contacto</h3>
                                        <div className="row ">
                                            <div className="col mt-2">
                                                <label htmlFor="email">E-Mail</label>
                                                <input  type="email"  className="form-control" id="email"
                                                            name="email" value={this.state.email || '' }
                                                            onChange={this.onChange.bind(this)}
                                                            placeholder="E-Mail"
                                                            required/>
                                            </div>
                                            <div className="col mt-2">
                                                <label htmlFor="cellphone">Telefono</label>
                                                <input  type="number" className="form-control" id="cellphone"
                                                            name="cellphone" value={this.state.cellphone || '' }
                                                            onChange={this.onChange.bind(this)}
                                                            placeholder="Telefono"
                                                            required/>
                                            </div>
                                        </div>
                                    </div>
                                    {!this.state.editDisable ? (
                                        <button type="submit"
                                                className="btn btn-success btn-block mb-2"
                                                onClick={this.onSubmit.bind(this)}>
                                            Submit
                                        </button>
                                        ) : ('')
                                    }
                                    {this.state.editDisable ? (
                                        <button type="submit"
                                                className="btn btn-primary btn-block"
                                                onClick={this.onUpdate.bind(this)}>
                                            Update
                                        </button>
                                        ) : ('')
                                    }
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 mt-2">
                    <p className="h1 text-center">Lista de Monitores</p>
                    <table className="table table-hover table-bordered">
                        <caption>Lista de Monitores Registrados</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre Completo</th>
                                <th scope="col">Programa Academico</th>
                                <th scope="col">Semestre</th>
                                <th scope="col">Cedula</th>
                                <th scope="col">Contacto</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-left">{item.first_name} {item.second_name} {item.first_lastname} {item.second_lastname}</td>
                                        <td className="text-left">{item.academic_program}</td>
                                        <td className="text-left">{item.semester}</td>
                                        <td className="text-left">{item.document}</td>
                                        <td className="text-left">{item.email} - {item.cellphone}</td>
                                        <td className="text-right">
                                            <button
                                                href=""
                                                className="btn btn-info btn-block"
                                                disabled={this.state.editDisabled}
                                                onClick={this.onEdit.bind(
                                                    this,
                                                    item.id
                                                )}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                href=""
                                                className="btn btn-danger btn-block"
                                                disabled={this.state.editDisabled}
                                                onClick={this.onDelete.bind(
                                                    this,
                                                    item.id
                                                )}
                                            >
                                                Delete
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
