import React from 'react'
import prisma from '../../lib/prisma'

const Page = async () => {
  const users = await prisma.user.findMany()
  return (
    <div className='flex justify-center items-center h-screen'>
      {JSON.stringify(users)}
    </div>
  )
}

export default Page
