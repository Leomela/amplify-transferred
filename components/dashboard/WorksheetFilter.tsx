import { FC, useState, useCallback, useEffect, useRef } from 'react'

export type CheckboxItemProps = {
  slug: string
  label: string
}

const WorksheetFilter: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const mouseClickHandler = useCallback(() => {
    setIsOpen((navState) => !navState)
  }, [])

  useEffect(() => {
    const clickedOutsideHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', clickedOutsideHandler)

    return () => {
      document.removeEventListener('mousedown', clickedOutsideHandler)
    }
  }, [isOpen])

  const filterCheckboxes: CheckboxItemProps[] = [
    {
      slug: 'greatest-gainer',
      label: 'Greatest Gainer',
    },
    {
      slug: 'hot-shot-debut',
      label: 'Hot Shot Debut',
    },
    {
      slug: 're-entry',
      label: 'Re-Entry',
    },
    {
      slug: 'debut',
      label: 'Debut',
    },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={mouseClickHandler}
        className="hover:bg-gray-100 focus:outline-none font-medium rounded text-2xl text-center text-deep-forest-brown px-2 pt-2"
      >
        <span className="material-symbols-outlined">filter_alt</span>
      </button>

      <div
        id="popover-bottom"
        className={`absolute px-5 py-3 m-2 z-10 w-96 h-52 text-sm font-light text-gray-500 transition-opacity duration-200 bg-white border border-gray-200 rounded shadow-sm text-gray-400 border-gray-200 -right-36 sm:-right-10
                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className="flex items-center border-b border-gray-200 pb-3 pt-2">
          <label htmlFor="filter-worksheet" className="sr-only">
            search worksheet
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
              <span className="material-symbols-outlined text-deep-forest-brown">
                search
              </span>
            </div>
            <input
              type="text"
              id="simple-search"
              className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-cotton-ball-gray"
              placeholder="Find Artist and Title" // Later we'll add the search functionality here.
            />
          </div>
        </div>

        <div className="py-2">
          <h3 className="font-semibold text-gray-900 text-black text-lg">
            Bullet/Awards
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filterCheckboxes.map(({ slug, label }: CheckboxItemProps) => {
            return (
              <div className="flex items-center" key={slug}>
                <input
                  id={slug}
                  type="checkbox"
                  value=""
                  className="w-5 h-5 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 border-gray-600 focus:outline-none"
                />
                <label
                  htmlFor={slug}
                  className="ml-2 text-sm font-normal text-black"
                >
                  {label}
                </label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorksheetFilter
