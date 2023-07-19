import { FC } from 'react'
import { useRouter } from 'next/router'

type ErrorModalProps = {
  icon: string
  message: string
  buttonText: string
}

const ErrorModal: FC<ErrorModalProps> = ({ icon, message, buttonText }) => {
  const router = useRouter()

  return (
    <div className=" top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full flex justify-center items-center">
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="p-6 text-center">
            <span className="material-symbols-outlined">{icon}</span>
            <h3 className="mt-3 mb-4 text-lg font-normal text-gray-500">
              {message}
            </h3>
            <button
              type="button"
              onClick={() => router.reload()}
              className="text-white border-bg-apnea-dive bg-apnea-dive focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
