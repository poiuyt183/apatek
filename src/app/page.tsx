import React from 'react'
import prisma from '../../lib/prisma'
import { caller } from '@/trpc/server'

const Page = async () => {
  const users = await caller.getUsers()
  return (
    <div className='flex justify-center items-center h-screen'>
      {JSON.stringify(users)}
    </div>
  )
}

export default Page
