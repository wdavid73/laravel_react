import axios from "axios"

export const getList = () => {
    return axios
    .get('api/monitores', {
        headers : {'Content-Type' : 'application/json'}
    })
    .then(res => {
        return res.data
    })
}

export const addItem = (first_name , second_name , first_lastname , second_lastname , cellphone, document, email , academic_program , semester) => {
    return axios
    .post('api/monitores', {
        first_name : first_name,
        second_name : second_name,
        first_lastname : first_lastname,
        second_lastname : second_lastname,
        academic_program : academic_program,
        semester : semester,
        document : document,
        email : email,
        cellphone : cellphone
        },
        {
            headers : {'Content-Type' : 'application/json'}
        }
    )
    .then( res => {
        console.log(res)
    })
}

export const UpdateItem = (first_name , second_name , first_lastname , second_lastname , cellphone, document, email , academic_program , semester , id) => {
    let _id = id.toString()
    return axios
    .put('api/monitor/'+_id, {
            first_name : first_name,
            second_name : second_name,
            first_lastname : first_lastname,
            second_lastname : second_lastname,
            academic_program : academic_program,
            semester : semester,
            document : document,
            email : email,
            cellphone : cellphone
        },
        {
            headers : {'Content-Type' : 'application/json'}
        }
    )
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteItem = id => {
    let _id = id.toString()
    axios
        .delete('api/monitor/'+_id, {
            headers : {'Content-Type' : 'application/json'}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}





