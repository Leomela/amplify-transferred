import { FC, HTMLProps } from 'react'
import SideNavigation from './navigation/SidebarNavigation'

const AppLayout: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div className="min-h-screen flex space-between">
      <SideNavigation />
      <div className="p-4 px-6 w-full flex flex-col" {...props} />
    </div>
  )
}

export default AppLayout
