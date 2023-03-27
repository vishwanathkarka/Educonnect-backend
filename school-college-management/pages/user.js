import React from 'react'

export default function user({users}) {
  return (
   <>
   <h1>List of user</h1>
   {
    users.map(user=>{
        return (
            <div key = {user.id}>{user.name}</div>
        )
    })
   }
   </>
  )
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
    return{
        props:{
            users:data,
        }
    }
}