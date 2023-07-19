import { FC } from 'react'

const WorksheetSetting: FC = () => {
  return (
    <>
      <button
        data-popover-target="popover-bottom"
        data-popover-placement="bottom"
        type="button"
        className="hover:bg-gray-100 focus:outline-none font-medium rounded text-2xl text-center text-deep-forest-brown px-2 pt-2"
      >
        <span className="material-symbols-outlined">settings</span>
      </button>
    </>
  )
}

export default WorksheetSetting
