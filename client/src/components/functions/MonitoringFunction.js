import axios from "axios"

export const getMonitorings = () => {
    return axios
    .get('api/monitorias' , {
        headers : {'Content-type' : 'application/json'}
    })
    .then(response =>{
        return response.data
    })
}

export const getMonitors = () => {

}

export const addMonitoring = (asignature , classroom , date , monitor_id ) => {
    return axios
    .post('api/monitorias' ,{
        asignature : asignature,
        classroom : classroom,
        date : date,
        monitor_id : monitor_id
    },
    {
        headers : {'Content-Type': 'application/json'}
    }
    )
    .then(response => {
        console.log(response)
    })
}

export const UpdateMonitoring = (asignature, classroom, date, monitor_id, id) => {
    let _id = id.toString()
    return axios
    .put('api/monitoria/'+_id , {
        asignature : asignature,
        classroom : classroom,
        date : date,
        monitor_id : monitor_id,
    },
    {
        headers  : {'Content-Type' : 'application/json'}
    }
    )
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}

export const DeleteMonitoringLogic = (asignature, classroom, date, monitor_id, id) => {
    let _id = id.toString()
    return axios
    .put('api/monitoria/'+_id , {
        asignature : asignature,
        classroom : classroom,
        date : date,
        monitor_id : monitor_id,
        id : id,
        state : 0
    },
    {
        headers  : {'Content-Type' : 'application/json'}
    }
    )
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}

export const DeleteMonitoring = id => {
    let _id = id.toString()
    axios
        .delete('api/monitoria/' + _id , {
            headers : {'Content-Type' : 'application/json'}
        })
        .then(response =>{
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
