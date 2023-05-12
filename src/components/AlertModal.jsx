import React, { useState } from 'react'
import './styles/AlertModal.css'


const AlertModal = ({deleteUserById,
     setCloseWarning ,
     closeWarning,
     updateInfo,
     setUpdateInfo,
     setCrudOpOk,
     reset 
    }) => {
    
      const defaultValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      }
    
    
    const handleWarningYes = ()=>{
        setCloseWarning(true)
        deleteUserById(updateInfo.id, setCrudOpOk)
        reset(defaultValues)
    }

    const handleWarningCancel = ()=>{
        
        setCloseWarning(true)
        setUpdateInfo()
        reset(defaultValues)
        
    }

  return (
    <div className={`warning__container ${closeWarning? 'close' : ''} `}> 
        <div className="warning">
            <div>Do you really want to <b>delete</b>  this User?</div>
            <div className='warning__user'>{updateInfo?.first_name} {updateInfo?.last_name} </div>
            <div className="button__container">
                <button onClick={handleWarningYes} className='warning__btn warning__btn-yes'>Really, really</button>
                <button onClick={handleWarningCancel} className='warning__btn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AlertModal
