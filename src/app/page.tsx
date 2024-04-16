import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './lib/auth'
import { redirect } from 'next/navigation'

const page = async() => {
   const session = await getServerSession(authOptions)
   console.log(session)
  return (
    <div>
      {
        session===null?(<>{redirect('/login')}</>):(<>{redirect('/')}</>)
      }
    </div>
  )
}
  
export default page
