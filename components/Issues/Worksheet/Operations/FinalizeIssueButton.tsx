import axios from 'axios'
import { FC } from 'react'
import { useIssueContext } from '../../../Context/IssuesContext'
import ConfirmationModal from './ConfirmationModal'

type FinalizeIssueButtonProps = {
  showModal: boolean
  toggleConfirmModal: () => void
  setError: (error: boolean) => void
  setIsSaving: (isSaving: boolean) => void
  setShowModal: (showModal: boolean) => void
}

const FinalizeIssueButton: FC<FinalizeIssueButtonProps> = ({
  showModal,
  setError,
  setIsSaving,
  setShowModal,
  toggleConfirmModal,
}) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_CHART_API_BASE_URL
  const {
    issue: { id },
    setIssue,
  } = useIssueContext()

  const finalizeIssueHandler = async () => {
    setIsSaving(true)

    await axios
      .post(`${apiBaseUrl}/issues/${id}/finalize`)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            setIssue((previousIssue) => ({
              ...previousIssue,
              ...res.data,
            }))
            setIsSaving(false)
          }, 1000)
        }
      })
      .catch(() => {
        setError(true)
        setIsSaving(false)
      })

    setShowModal(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleConfirmModal}
        className={`w-auto text-white bg-apnea-dive focus:outline-none font-medium px-4 py-2 rounded-full text-center inline-flex items-center h-10 gap-1 ${
          showModal && 'bg-black'
        }`}
      >
        <span className="material-symbols-outlined">done</span>
        <span className="sm:text-sm text-xs">Finalize Issue</span>
      </button>
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to finalize this issue?"
          onConfirm={finalizeIssueHandler}
          onCancel={toggleConfirmModal}
        />
      )}
    </>
  )
}

export default FinalizeIssueButton
