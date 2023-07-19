import { FC } from 'react'
import { useIssueContext } from '../../../Context/IssuesContext'

const OperationsNavigation: FC = () => {
  const {
    issue: { finalized_at: finalizedAt, published_at: publishedAt },
  } = useIssueContext()

  return (
    <nav>
      <ol className="sm:inline-flex inline-block items-center">
        {null !== finalizedAt && null !== publishedAt && (
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
              >
                Unpublish
              </a>
            </div>
          </li>
        )}

        {null !== finalizedAt && null === publishedAt && (
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
              >
                Unfinalize
              </a>
            </div>
          </li>
        )}

        {null === finalizedAt && null === publishedAt && (
          <>
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  Delete Issue
                </a>
                <span className="mx-2 text-gray-400">|</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  Clear Comments
                </a>
                <span className="mx-2 text-gray-400">|</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  Renumber
                </a>
                <span className="mx-2 text-gray-400">|</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-2 text-sm font-normal text-apnea-dive text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  Recalculate
                </a>
              </div>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}

export default OperationsNavigation
