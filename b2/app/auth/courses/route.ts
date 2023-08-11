import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const supabase = createRouteHandlerClient({ cookies })

  await supabase.auth.signOut()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return NextResponse.redirect(`${requestUrl.origin}/courses`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })

  if (session) {
    return NextResponse.redirect(
    `${requestUrl.origin}/courses?success=You have successfully logged in`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    })
  }
}
