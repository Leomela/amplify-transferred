import { NextPage } from 'next'
import { useState } from 'react'
import { Issue } from '../../types/entities'
import type { GetServerSideProps } from 'next'
import ErrorModal from '../../components/ErrorModal'
import ChartsHead from '../../components/ChartsHead'
import PageContent from '../../components/Common/PageContent'
import { tabs } from '../../components/Issues/Tabs/IssueTabs'
import NestedTabs from '../../components/Issues/Tabs/NestedTabs'
import IssueContext from '../../components/Context/IssuesContext'
import WorksheetFilter from '../../components/dashboard/WorksheetFilter'
import WorksheetSetting from '../../components/dashboard/WorksheetSetting'

const chartCodeStyles = {
  codes:
    'w-6 h-10 rounded border bg-shade-of-grey text-white text-xs flex items-center justify-center flex flex-col',
}

type WorksheetDataProps = {
  issueData: Issue
  errorCode: boolean
}

const WorkSheet: NextPage<WorksheetDataProps> = (props) => {
  const [issue, setIssue] = useState(props.issueData)

  if (props.errorCode) {
    return (
      <ErrorModal
        icon="error"
        message="Oops, Something went wrong"
        buttonText="Retry"
      />
    )
  }

  return (
    <>
      <IssueContext.Provider value={{ issue, setIssue }}>
        <ChartsHead pageTitle="Worksheet" />
        <PageContent>
          <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex gap-4 items-center md:justify-start justify-center">
              <h1 className="sm:text-4xl text-xl font-medium text-base">
                (TLP) Billboard 200
              </h1>
              <span className="sm:text-4xl text-xl">|</span>
              <button className="text-black rounded-lg sm:text-2xl text-xl inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Week of 08/17/2022
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>

            <div className="flex gap-4 items-center md:justify-end justify-center">
              <div className="bg-gray-100 flex gap-1 p-1 rounded-lg px-3 cursor-pointer">
                <div className={chartCodeStyles.codes}>
                  <span>B</span>
                  <span>8</span>
                </div>
                <div className={chartCodeStyles.codes}>
                  <span>Y</span>
                  <span>10</span>
                </div>
                <div className={chartCodeStyles.codes}>
                  <span>z</span>
                  <span>1</span>
                </div>
                <div className="w-8 h-10 rounded border bg-black text-white text-xs flex items-center justify-center flex flex-col">
                  <span>BUL</span>
                  <span>19</span>
                </div>
              </div>

              <WorksheetFilter />
              <WorksheetSetting />
            </div>
          </section>
          <section>
            <NestedTabs tabs={tabs} />
          </section>
        </PageContent>
      </IssueContext.Provider>
    </>
  )
}

export default WorkSheet

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { issueID } = context.query

  // until we have a proper API endpoint for issues, we'll use this dummy data
  return {
    props: {
      issueData: {
        id: issueID,
        format_id: Math.floor(Number(Math.random().toFixed(2)) * 100),
        date: '2021-08-17',
        published_at: null,
        finalized_at: null,
      },
      errorCode: false,
    },
  }
}
