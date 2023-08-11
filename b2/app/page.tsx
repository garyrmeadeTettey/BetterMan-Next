import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import Logout from '@/components/button1'
import { redirect } from 'next/dist/server/api-utils'
import Dashboard from './dashboard/page'
import Access from '@/components/button2'
import Blog from '@/components/blog'
import Hero from '@/components/hero'
import Body from '@/components/body'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

const resources = [
  {
    title: 'Cookie-based Auth and the Next.js App Router',
    subtitle:
      'This free course by Jon Meyers, shows you how to configure Supabase Auth to use cookies, and steps through some common patterns.',
    url: 'https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF',
    icon: 'M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z',
  },
  {
    title: 'Supabase Next.js App Router Example',
    subtitle:
      'Want to see a code example containing some common patterns with Next.js and Supabase? Check out this repo!',
    url: 'https://github.com/supabase/supabase/tree/master/examples/auth/nextjs',
    icon: 'M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8',
  },
  {
    title: 'Supabase Auth Helpers Docs',
    subtitle:
      'This template has configured Supabase Auth to use cookies for you, but the docs are a great place to learn more.',
    url: 'https://supabase.com/docs/guides/auth/auth-helpers/nextjs',
    icon: 'M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528',
  },
]

const examples = [
  { type: 'Client Components', src: 'app/_examples/client-component/page.tsx' },
  { type: 'Server Components', src: 'app/_examples/server-component/page.tsx' },
  { type: 'Server Actions', src: 'app/_examples/server-action/page.tsx' },
  { type: 'Route Handlers', src: 'app/_examples/route-handler.ts' },
]

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()


  const { 
    data: { user },
} = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {session ? (
              <div className="flex items-center gap-4">
                Welcome, {user?.email}!
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
          <div>
            <Logout />
          </div>
          <div>
          <Link
                href="/register"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Sign Up Page
              </Link>
          </div>
        </div>
      </nav>

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <div className="flex gap-8 justify-center items-center">
            <Link href="https://supabase.com/" target="_blank">
              <SupabaseLogo />
            </Link>
            <span className="border-l rotate-45 h-6" />
            <NextJsLogo />
          </div>
          <h1 className="sr-only">BetterMan</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            {' '}
            <strong>Supabase</strong> and <strong>Next.js</strong>
          </p>
          <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background">
            BetterMan<strong>Academy</strong>
          </div>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        

        <div className="flex flex-col gap-8 text-foreground">
          <div className="grid gap-2 justify-center mx-auto text-center">
            

            <div>
            {session ? (
              <div className="">
                Hey, {user?.email}! You are Logged In!
                <LogoutButton />
                <Link
                href="/register"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                <Access />
              </Link>
              <div className='pt-10'>
              <Hero />
              </div>

              <div className="pt-10 mt-10">
              <Body />
              </div>

              <div>
              <Footer />  
              </div>


              
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
          {/* <div className="w-full justify-center border rounded-lg overflow-hidden">
            {examples.map(({ type, src }) => (
              <div
                key={type}
                className="w-full grid grid-cols-3 border-b last:border-b-0 text-sm"
              >
                <div className="flex items-center font-bold p-4 min-h-12 w-full">
                  {type}
                </div>
                <div className="col-span-2 border-l p-4 flex items-center">
                  <code className="text-sm whitespace-pre-wrap">{src}</code>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="flex justify-center text-center text-xs">
          <p>
            Powered by{' '}
            <Link
              href="https://supabase.com/"
              target="_blank"
              className="font-bold"
            >
              Supabase
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
