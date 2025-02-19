import {FC} from 'react';
import {IUser} from "@/interfaces/IUser";
import css from './UserInfo.module.css'

interface IProps {
    user: IUser
}

const UserInfo :FC<IProps> = ({user}) => {

 return (
  <div className={css.info}>
      <img src={user.image} alt={user.username}/>
      <p>Id: {user.id}</p>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>BirthDate: {user.birthDate}</p>
      <p>Height: {user.height}</p>
      <p>Weight: {user.weight}</p>
  </div>
 );
};

export {UserInfo};