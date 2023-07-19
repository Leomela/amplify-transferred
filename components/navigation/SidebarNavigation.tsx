import Link from 'next/link'
import Image from 'next/image'
import MenuItem from './MenuItem'
import { FC, useState, useEffect } from 'react'
import { menuItemsData, menuAdminItemsData } from './menuItemsData'

const SideNavigation: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  const navToggleClickHandler = () => {
    setIsExpanded((navState) => !navState)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <aside
        id="logo-sidebar"
        className={`${
          !isExpanded
            ? 'w-[48px] h-[50px] rounded-tr rounded-br mt-4 fixed z-50'
            : ''
        } bg-gluon-grey`}
        aria-label="Sidebar"
      >
        <div
          className={`${
            isExpanded
              ? 'h-full py-4 overflow-y-auto overflow-x-hidden w-60'
              : ''
          } `}
        >
          <div
            className={`flex justify-between ${
              isExpanded ? 'border-b border-black-space pl-5' : ''
            } `}
          >
            <Link href="/">
              <div
                className={`${
                  isExpanded
                    ? 'items-center bg-porpoise p-2.5 mb-2 flex justify-between'
                    : ''
                } `}
              >
                <div
                  className={`${
                    isExpanded ? 'block' : 'hidden'
                  } logo-container flex flex-col `}
                >
                  <div>
                    <Image
                      className="relative text-white"
                      src="/assets/images/billboard_logo_rev.svg"
                      alt="Billboard"
                      width={156}
                      height={35}
                      priority
                    />
                  </div>
                  <div>
                    <Image
                      className="mt-3.5 relative"
                      src="/assets/images/chart_publisher_rev.svg"
                      alt="Chart Publisher"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      width={145}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <button
              className="m-auto ml-3 text-pale-grey"
              onClick={navToggleClickHandler}
            >
              {isExpanded ? (
                <span className="material-symbols-outlined text-4xl mr-2">
                  arrow_back_ios_new
                </span>
              ) : (
                <span className="material-symbols-outlined text-xxl mt-2.5 mr-2">
                  arrow_forward_ios
                </span>
              )}
            </button>
          </div>
          <div className={`${isExpanded ? 'block' : 'hidden'} `}>
            <div className="border-b border-black-space">
              <ul className="space-y-2 py-4 pl-5">
                {menuItemsData.map((props) => (
                  <MenuItem key={props.id} {...props} />
                ))}
              </ul>
            </div>
            <div>
              <ul className="mt-5 space-y-2 pl-5">
                {menuAdminItemsData.map((props) => (
                  <MenuItem key={props.id} {...props} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideNavigation
