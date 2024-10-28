import React from 'react'
type User = {
    id: number
    name: string
    email: string
}

const User = ({id, name, email}: User) => {
  return (
    <>  
    <div>id:{id}</div>
    <div>name: {name}</div>
    <div>email: {email}</div>
    </>
  )
}

export default User