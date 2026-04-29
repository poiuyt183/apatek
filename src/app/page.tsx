import { requireAuth } from '@/lib/auth-untils'
import { caller } from '@/trpc/server'
import React from 'react'
import { LogoutButton } from './logout'

const Page = async () => {
  await requireAuth()
  const users = await caller.getUsers()

  return (
    <div className='flex justify-center items-center h-screen'>
      {JSON.stringify(users)}
      <LogoutButton />
    </div>
  )
}

export default Page
