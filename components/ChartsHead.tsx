import { FC } from 'react'
import Head from 'next/head'

type ChartsHeadProps = {
  pageTitle: string
}

const ChartsHead: FC<ChartsHeadProps> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{`Chart Publisher | ${pageTitle}`}</title>
      <meta
        name="description"
        content="Dummy layout for demonstrating purposes, to be replaced later"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/images/Billboard_favicon.svg" />
    </Head>
  )
}

export default ChartsHead
