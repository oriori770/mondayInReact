import React, { useEffect, useState, useRef } from 'react'
import OneUser from '../User'

type User = {
    id: number
    name: string
    email: string
}

const Users = () => {
    const [users, setusers] = useState<User[]>([])
    const newName = useRef<HTMLInputElement>(null)
    const newEmail = useRef<HTMLInputElement>(null)
    useEffect(() => {
        setusers([{id: 1, name: 'test', email: 'ori@gmail.com'}, {id: 2, name: 'jon doe', email: 'test@gmail.com'}, {id: 3, name: 'shneor', email: 'test'}])
    },[])
  return (
    <>
    <div>add user</div>

    <input type="text" ref={newName} />
    <input type="text" ref={newEmail} />
    <button onClick={() => {if(newName.current && newEmail.current) {setusers([...users, {id: users.length+1, name: newName.current?.value, email: newEmail.current?.value}])}}}>add</button>
         {users.map((user) => <OneUser key={user.id} id={user.id} name={user.name} email={user.email}/>) }
    </>
  )
}

export default Users