import Loader from '../../../Common/Loader'
import ErrorModal from '../../../ErrorModal'
import { FC, useState, useCallback } from 'react'
import PublishIssueButton from './PublishIssueButton'
import { useIssueContext } from '../../../Context/IssuesContext'
import FinalizeIssueButton from './FinalizeIssueButton'
import OperationsNavigation from './OperationsNavigation'

const Operations: FC = () => {
  const {
    issue: { finalized_at: finalizedAt, published_at: publishedAt },
  } = useIssueContext()

  const [error, setError] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const toggleConfirmModal = useCallback(() => {
    setShowModal((modalState) => !modalState)
  }, [])

  const renderIssueButton = () => {
    if (isSaving) {
      return (
        <Loader
          label={null === finalizedAt ? 'Finalizing...' : 'Publishing...'}
        />
      )
    }

    if (null === finalizedAt && null === publishedAt) {
      return (
        <FinalizeIssueButton
          showModal={showModal}
          setError={setError}
          setIsSaving={setIsSaving}
          setShowModal={setShowModal}
          toggleConfirmModal={toggleConfirmModal}
        />
      )
    }

    if (null !== finalizedAt && null === publishedAt) {
      return (
        <PublishIssueButton
          showModal={showModal}
          setError={setError}
          setIsSaving={setIsSaving}
          setShowModal={setShowModal}
          toggleConfirmModal={toggleConfirmModal}
        />
      )
    }
  }

  if (error) {
    return (
      <ErrorModal
        icon="error"
        message={`Oops, Failed to ${
          null === finalizedAt ? 'finalize' : 'publish'
        } this issue`}
        buttonText="Retry"
      />
    )
  }

  return (
    <div className="h-96">
      <section className="px-4 py-5 block sm:justify-between sm:flex border-b-2">
        <div className="relative">
          {null !== finalizedAt && null !== publishedAt ? (
            <div className="w-auto px-4 rounded-full text-center flex mt-1 inline-flex items-center gap-1 justify-center">
              <span className="material-symbols-outlined text-green-500">
                check_circle
              </span>
              <span className="sm:text-lg text-xs">Published Issue</span>
            </div>
          ) : (
            renderIssueButton()
          )}
        </div>

        <OperationsNavigation />
      </section>
    </div>
  )
}

export default Operations
