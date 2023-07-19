import { FC } from 'react'

export type ConfirmationModalProps = {
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="absolute z-50 w-64 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-3xl bg-white-smoke">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          <div className="relative p-4 pb-3 flex-auto">
            <p className="text-black font-normal text-base leading-relaxed text-center">
              {message}
            </p>
          </div>
          <div className="flex items-center justify-around pb-4 px-3 rounded-b">
            <button
              type="button"
              onClick={onCancel}
              className="w-24 font-medium text-sm text-apnea-dive text-center border border-apnea-dive focus:outline-none font-medium px-4 py-2 rounded-full text-center items-center"
            >
              <span className="sm:text-sm text-xs">Cancel</span>
            </button>

            <button
              type="button"
              onClick={onConfirm}
              className="w-24 font-medium text-sm text-white text-center bg-apnea-dive focus:outline-none font-medium px-4 py-2 rounded-full text-center items-center"
            >
              <span className="sm:text-sm text-xs">Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
