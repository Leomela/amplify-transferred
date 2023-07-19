import 'flowbite'
import '../styles/globals.css'
import '../styles/data-grid-theme.scss'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/main.scss'

import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { SessionProvider, useSession } from 'next-auth/react'
import AppLayout from '../components/AppLayout'
import Loader from '../components/Common/Loader'
import Unauthorized from '../components/Unauthorized'
import { FC, ReactElement } from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

type AuthProps = {
  children: ReactElement
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // Disable layout for 404 pages.
  const router = useRouter()

  if (router.pathname === '/_error') {
    return (
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <main className={roboto.className}>
      <div className="h-screen overflow-x-hidden">
        {
          <SessionProvider session={session}>
            <Auth>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </Auth>
          </SessionProvider>
        }
      </div>
    </main>
  )
}

const Auth: FC<AuthProps> = ({ children }) => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader label="loading..." />
      </div>
    )
  }

  if (!session || status !== 'authenticated') {
    return <Unauthorized />
  }

  return children
}
