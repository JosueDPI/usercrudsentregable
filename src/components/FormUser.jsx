import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo,  updateUserById,
  setFormClose, formClose, setCrudOpOk, register, handleSubmit, reset }) => {

  //const {register, handleSubmit, reset } = useForm()

  const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
  }

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const submit = (data) => {
    if(updateInfo){
        //update
      updateUserById(updateInfo.id, data, setCrudOpOk)
      
    }else{
      createNewUser(data, setCrudOpOk)
    }
    reset(defaultValues)
    //console.log(data)
  }
  
  const handleExit =  ()=>{
    reset(defaultValues)
    setFormClose(true)
  }

  const handleUpdateCreate = ()=>{
    setFormClose(true)
  }

  return (
    <div className={`form-container ${formClose? 'close' : '' }`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <h3 className='form__title'>{updateInfo ? 'Update User Information' :'create new user'}</h3>
        <span onClick={handleExit} className='form__exit'>x</span>
        <div className='form__item'>
          <label  className='form__label' htmlFor="email">Email</label>
          <input  className='form__input' {...register("email")} type="email" id="email" />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="password">Password</label>
          <input className='form__input' {...register("password")} type="password" id="password" />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="first_name">First Name</label>
          <input className='form__input' {...register("first_name")} type="text" id="first_name" />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="last_name">Last Name</label>
          <input className='form__input' {...register("last_name")} type="text" id="last_name" />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="birthday">Birthday</label>
          <input className='form__input' {...register("birthday")} type="date" id="birthday" />
        </div>
        <button onClick={handleUpdateCreate} className='form__btn'>{updateInfo? 'Update' : 'Create'}</button>
      </form>                                              
    </div>
    
  )
}

export default FormUser