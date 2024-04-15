import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './lib/auth'

const page = async() => {
   const session = await getServerSession(authOptions)
   console.log(session)
  return (
    <div>page</div>
  )
}
  
export default page
