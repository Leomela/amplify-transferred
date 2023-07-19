import Link from 'next/link'
import type { XOR } from '../../types'
import { useRouter } from 'next/router'
import { FC, useState, useCallback, MouseEvent } from 'react'

export type MenuItemProps = {
  id: string
  label: string
  childrenElements?: { label: string; route: string }[]
} & XOR<{ route: string }, { onClick: () => void }>

export const submenuStyles = {
  menuLabel:
    'flex items-center w-full px-2 py-1 text-base font-normal transition duration-75 rounded group hover:text-night-snow text-white',
  submenuLabel:
    'flex items-center w-full font-normal transition duration-75 rounded pl-6 p-0.5 group hover:text-night-snow text-white capitalize text-sm',
}

const MenuItem: FC<MenuItemProps> = ({
  id,
  label,
  route,
  childrenElements,
  onClick,
}) => {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState<string>('hidden')

  const expandDropdownHandler = useCallback(() => {
    setIsExpanded((navState) => (navState === 'hidden' ? 'block' : 'hidden'))
  }, [])

  const preventPropagationHandler = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  if (typeof onClick !== 'undefined') {
    return (
      <li>
        <button
          type="button"
          className={submenuStyles.menuLabel}
          onClick={onClick}
        >
          <span className="">{label.toUpperCase()}</span>
        </button>
      </li>
    )
  }

  if (!childrenElements) {
    return (
      <li>
        <Link
          href={route}
          className={
            router.pathname === route
              ? 'text-night-snow ' + submenuStyles.menuLabel
              : submenuStyles.menuLabel
          }
        >
          <span className={router.pathname}>{label.toUpperCase()}</span>
        </Link>
      </li>
    )
  }

  return (
    <>
      <li className="relative" onClick={expandDropdownHandler}>
        <button
          type="button"
          className={submenuStyles.menuLabel}
          aria-controls={id}
          data-collapse-toggle={id}
        >
          <span
            className="text-left text-base whitespace-nowrap font-semibold"
            sidebar-toggle-item="true"
          >
            {label.toUpperCase()}
          </span>
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </button>
        <ul id={id} className={isExpanded} onClick={preventPropagationHandler}>
          {childrenElements.map((item) => {
            return (
              <li key={item.label.toLowerCase()} className="my-1 p-0.5">
                <Link
                  href={item.route}
                  className={
                    router.pathname === item.route
                      ? 'text-night-snow ' + submenuStyles.submenuLabel
                      : submenuStyles.submenuLabel
                  }
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    </>
  )
}

export default MenuItem
