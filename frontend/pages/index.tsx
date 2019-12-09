import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import UserList from '../components/userList'
import { UserType } from '../types/types';
import { Title } from '../styles/header';




const IndexPage: NextPage = (props : any) => {

    const [title, setTitle] = useState<string>("Hello Bothrs");
    const [users, setUsers] = useState<UserType[]>(props.users)
    const [newUserName, setNewUserName] = useState<string>("");

   
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTitle("Hello Bothrs 👋")
           
        }
      }, []);
    
      const addUser = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()

          fetch('http://localhost:4000/users', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({user: newUserName})
            }).then(res => res.json()).then(x => {
                setUsers(oldNewUsers => [...oldNewUsers, x]);
            })
            setNewUserName("")
      }

    const changeName =(e:any) => {
        setNewUserName(e.target.value)
    }

    const deleteUser = (_id: string) => {
        fetch('http://localhost:4000/users', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({_id})
          }).then(res => res.json()).then(x => {
           console.log(x)     
           setUsers(oldNewUsers => [...oldNewUsers.filter(x => x._id !== _id)]);     
          })
    }
    
    return <> <Title>{title}</Title>
        <UserList deleteUser={deleteUser} users={users} />
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus esse aspernatur accusantium exercitationem? Libero nostrum maxime dolores harum aliquid, expedita accusantium atque ab placeat voluptatibus iste autem esse eaque.</p>
   
           <form onSubmit={addUser}>
               <label htmlFor="name">Name</label>
                <input value={newUserName} onChange={changeName} type="text" name="name" id="userName"/>
                <input type="submit" value="Add"/>
           </form>
    </>;
};


IndexPage.getInitialProps = async function(): Promise<{users: UserType[]}> {
    const res = await fetch(`http://backend:4000/users`);
    const data = await res.json();
  
    console.log(`Show users fetched. Count: ${data.length}`);

    return {
        users: data
    };
  };
  
export default IndexPage;
