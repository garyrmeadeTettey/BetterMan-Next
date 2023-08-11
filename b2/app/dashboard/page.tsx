import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'

import LogoutButton from '@/components/LogoutButton'
import { redirect } from 'next/dist/server/api-utils'

import Access from '@/components/button2'

export default async function Dashboard() {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()


  const { 
    data: { user },
} = await supabase.auth.getUser()

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      
      <div className="bg-foreground py-3 px-2 rounded-lg font-mono text-sm text-background mt-40 max-w-none:">
            BetterMan<strong>Dashboard</strong>
            
          </div>
          <div>
          <div>
            {session ? (
              <div className="flex items-center gap-4">
                Hey, {user?.email}!
                <LogoutButton />
                <Link
                href="/register"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                <Access />
              </Link>
              
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Not Logged In
              </Link>
            )}
          </div>
          </div>
    </div>
  )
}
