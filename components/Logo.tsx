import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: FC = () => {
  return (
    <div className="shrink-0 flex items-center bg-porpoise bg-white py-9 px-10 pt-16 h-44">
      <Link href="/">
        <div>
          <Image
            className="relative"
            src="/assets/images/Billboard_logo.svg"
            alt="Billboard logo"
            width={196}
            height={35}
            priority
          />
        </div>
        <div>
          <Image
            className="mt-3.5 relative"
            src="/assets/images/chart_publisher.svg"
            alt="Billboard logo"
            width={185}
            height={15}
          />
        </div>
      </Link>
    </div>
  )
}

export default Logo
