import React from "react";
import './styles/userCard.css'

const UserCard = ({ 
    user,
    deleteUserById,
    setUpdateInfo,
    setFormClose,
    setCrudOpOk,
    setCloseWarning }) => {
  const handleDeleteButton = () => {
    //delete user
    setUpdateInfo(user)
    setCloseWarning(false)
    //deleteUserById(user.id, setCrudOpOk)
    //console.log('borrando: ', user.email)
  }

  const handleUpdateButton = ()=> {
    setUpdateInfo(user)
    setFormClose(false)
  }


  return (
    <article className="user">
      <h2 className="user__name">
          {user.first_name} {user.last_name}
      </h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__label" >Email: </span>
          <span className="user__value" >{user.email}</span>
        </li>
        <li className="user__item">
          <span className="user__label">Birthday: </span>
          <span className="user__value"><i className='bx bx-gift user__icon'></i> {user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer className="user__footer">
        <button onClick={handleDeleteButton} className="user__btn user__delete">
          <i className="bx bx-trash"></i>
        </button>
        <button onClick={handleUpdateButton}  className="user__btn user__update">
          <i className="bx bx-edit "></i>
        </button>
      
      </footer>
    </article>
    
  );
};

export default UserCard;
