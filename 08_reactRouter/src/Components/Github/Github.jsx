import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data,setData] = useState()
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/tabishbostami')
  //   .then(reponse => reponse.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   }) 
  // },[])

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Name: {data.name}
      <img className='h-[300px] m-5' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/tabishbostami')
  return response.json()
}
