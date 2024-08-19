import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'


function User() {
  const {userid} = useParams()

  const [data,setData] = useState()
  useEffect(()=>{
    fetch(`https://api.github.com/users/${userid}`)
    .then(reponse => reponse.json())
    .then(data => {
      console.log(data)
      setData(data)
    }) 
  },[])
   
  return (
    
    <div>
      <h1>User : {data?.name}</h1>
      <img src={data?.avatar_url} alt="" />
      </div>
  )
}

export default User
