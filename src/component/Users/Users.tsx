import React, { useEffect, useState } from 'react'
import OneUser from '../User'

type User = {
    id: number
    name: string
    email: string
}

const Users = () => {
    const [users, setusers] = useState<User[]>([])
    useEffect(() => {
        setusers([{id: 1, name: 'test', email: 'ori@gmail.com'}, {id: 2, name: 'jon doe', email: 'test@gmail.com'}, {id: 3, name: 'shneor', email: 'test'}])
    },[])
  return (
    <>
    <div>add user</div>

         {users.map((user) => <OneUser key={user.id} id={user.id} name={user.name} email={user.email}/>) }
    </>
  )
}

export default Users