import { FC } from 'react'
import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const Unauthorized: FC = () => {
  return (
    <div className="h-screen w-screen grid bg-apnea-dive bg-hero-pattern bg-cover bg-center content-center justify-center">
      <div className="w-100 rounded-lg border border-gray-300 bg-white p-11 flex flex-col items-center">
        <Logo />
        <button
          className="h-10 w-48 leading-5 text-sm font-medium text-white bg-apnea-dive hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-blue-500/50"
          type="button"
          onClick={() => signIn('okta')}
        >
          Login with Okta
        </button>
        <div className="top-10 relative pt-16">
          <Link
            href="https://www.pmc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer"
              src="/assets/images/brand-logo.svg"
              width={80}
              height={60}
              alt="Brand Logo - PMC"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
