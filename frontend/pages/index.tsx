import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import UserList from '../components/userList'
import { UserType } from '../types/types';
import { Title } from '../styles/header';
import { Form, SubmitButton, TextInput } from '../styles/Form';
import { Button, SecondaryButton } from '../styles/Button';
import Layout from '../components/layout';
import { auth, firebase } from '../firebase'


const IndexPage: NextPage = (props : any) => {

    const [title, setTitle] = useState<string>("Hello Bothrs");
    const [users, setUsers] = useState<UserType[]>(props.users)
    const [newUserName, setNewUserName] = useState<string>("");

   
    useEffect(() => {
       
            setTitle("Hello Bothrs 👋")
           
        
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

    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.signInWithPopup(provider)
        .then(() => {
        alert('You are signed In');
        })
        .catch(err => {
        alert('OOps something went wrong check your console');
        console.log(err);
        });
        }
      const handleLogout = () => {
        auth.signOut().then(function() {
        alert('Logout successful');
        }).catch(function(error) {
        alert('OOps something went wrong check your console');
        console.log(error);
        });
        }
    
    return <Layout> 
    
    <Title>{title}</Title>
        <UserList deleteUser={deleteUser} users={users} />
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus esse aspernatur accusantium exercitationem? Libero nostrum maxime dolores harum aliquid, expedita accusantium atque ab placeat voluptatibus iste autem esse eaque.</p>
   
           <Form onSubmit={addUser}>
               <label htmlFor="name">Name</label>
                <TextInput value={newUserName} onChange={changeName} type="text" name="name" id="userName"/>
                <SubmitButton type="submit" value="Add"/>
           </Form>

           <Button onClick={handleSignIn}>Sign In using google</Button>
            <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>

           <Link href="/admin">
               <a>
                    <h3>Go to Admin&rarr;</h3>
               </a>
            </Link>
    </Layout>;
};


IndexPage.getInitialProps = async function(): Promise<{users: UserType[]}> {

    let backendUrl =`http://backend:4000/users`
    
    if (typeof window !== 'undefined') {
        backendUrl = `http://localhost:4000/users`
    }
    const res = await fetch(backendUrl);
    const data = await res.json();
  
    console.log(`Show users fetched. Count: ${data.length}`);

    return {
        users: data
    };
  };
  
export default IndexPage;
