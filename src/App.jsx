import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import { useForm } from 'react-hook-form'
import AlertModal from './components/AlertModal'

function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [crudOpOk, setCrudOpOk] = useState(false)
  const [closeWarning, setCloseWarning] = useState(true)
  const {register, handleSubmit, reset } = useForm()
  const {   
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()  
  
  }, [])
  
  const handleOpenForm= ()=>{
    setUpdateInfo()
    setFormClose(false)
  } 

  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <div className={`app__title-formSucces ${crudOpOk? 'app__title-formSuccesView' : '' }`}>Operation successfully</div>
        <button onClick={handleOpenForm} className="app__btn">Create new</button>
      </header>
      <AlertModal
      setCloseWarning = {setCloseWarning}
      closeWarning = {closeWarning} 
      deleteUserById = {deleteUserById}
      updateInfo = {updateInfo}
      setUpdateInfo={setUpdateInfo}
      setCrudOpOk={setCrudOpOk}
      reset={reset}

      />

      < FormUser 
      createNewUser={createNewUser}
      updateUserById={updateUserById}
      updateInfo={updateInfo}
      setFormClose={setFormClose}
      formClose={formClose}
      setCrudOpOk={setCrudOpOk}
      register ={register}
      handleSubmit={handleSubmit}
      reset={reset}
      //register, handleSubmit, reset
      />
      <div className='app__user-container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              setCrudOpOk={setCrudOpOk}
              setCloseWarning = {setCloseWarning}
               
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default App
