import { FC, HTMLProps } from 'react'

const PageContent: FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div
    className="w-full bg-white rounded-lg py-4 h-full flex flex-col flex-grow text-deep-forest-brown"
    {...props}
  />
)

export default PageContent
