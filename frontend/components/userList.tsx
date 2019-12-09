import React from 'react';
import { UserType } from '../types/types';

const UserList = (props : any) => {

return(
        <ul>
            {props.users.map((user:UserType) => {
                    return <li key={user._id}>{user.user} <button onClick={() => props.deleteUser(user._id)}>x</button></li>
                })}
            </ul>
            )


        }
        export default UserList