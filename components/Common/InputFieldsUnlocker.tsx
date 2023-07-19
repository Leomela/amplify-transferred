import Loader from './Loader'
import { FC, useMemo } from 'react'

export type InputFieldsUnlockerProps = {
  title: string
  isSaving: boolean
  isEditable: boolean
  unLockFields: () => void
}

const InputFieldsUnlocker: FC<InputFieldsUnlockerProps> = ({
  title,
  isSaving,
  isEditable,
  unLockFields,
}) => {
  const unLockTableRows = useMemo(() => {
    if (isSaving) {
      return <Loader label="saving" />
    }

    if (isEditable) {
      return (
        <span className="material-symbols-outlined duration-200 -scale-x-100 text-green-400">
          lock_open
        </span>
      )
    }

    return (
      <span className="material-symbols-outlined duration-200 scale-x-100 text-red-400">
        lock
      </span>
    )
  }, [isSaving, isEditable])

  return (
    <button
      onClick={unLockFields}
      title={title}
      className="right-6 text-black flex p-3 absolute z-10 inline-block transition-opacity duration-300 bg-white rounded-full shadow-sm cursor-pointer"
    >
      {unLockTableRows}
    </button>
  )
}

export default InputFieldsUnlocker
