import axios from "axios"
import { useState } from "react"
// import "..components/InfoOk.jsx"


const useUserCrud = () =>{
    const [users, setUsers] = useState()
    const url = 'https://users-crud.academlo.tech/users/'

    //get

    const getAllUsers = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }
     
    //post
    const createNewUser = (data, setCrudOpOk) => {
        axios.post(url, data)
        .then(res => {
            setCrudOpOk(true)
            getAllUsers()
            setTimeout(() => {
                setCrudOpOk(false)
            }, 1500);
        })
        .catch(err => console.log(err))
    }

    //delete
    const deleteUserById = (id, setCrudOpOk) => {
        const urlDelete = `${url}${id}/`
        axios.delete(urlDelete)
            .then(res => {
                console.log('borrado Ok:', id);
                setCrudOpOk(true)
                getAllUsers()
                setTimeout(() => {
                    setCrudOpOk(false)
                }, 1500);
            })
            .catch(err => {
                
                console.log('delete fail',err)
            })
    }

    //update

    const updateUserById = (id, data, setCrudOpOk) => {
        const urlUpdate = `${url}${id}/`
        axios.patch(urlUpdate, data)
            .then(res => {
                setCrudOpOk(true)
                getAllUsers()
                setTimeout(() => {
                    setCrudOpOk(false)
                }, 1500);
                
            })
            .catch(err => console.log(err))

    }

    return {  
        users,  
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById
    }
}

export default useUserCrud