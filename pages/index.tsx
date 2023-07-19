import { FC, useState } from 'react'
import WeekPicker from '../components/WeekPicker'
import ChartsHead from '../components/ChartsHead'
import PageContent from '../components/Common/PageContent'
import SearchInput from '../components/dashboard/SearchInput'
import ProgressGrid from '../components/Worksheets/ProgressGrid'
import ProgressBarChart from '../components/dashboard/ProgressBarChart'

type ChartsItem = {
  id: number
  title: string
  maxScore: number
  actualScore: number
}

const Home: FC = () => {
  const [chartsData] = useState<ChartsItem[]>([
    {
      id: 1,
      title: 'In Progress',
      maxScore: 193,
      actualScore: 6,
    },
    {
      id: 2,
      title: 'Read To Release',
      maxScore: 196,
      actualScore: 57,
    },
    {
      id: 3,
      title: 'Released',
      maxScore: 100,
      actualScore: 20,
    },
  ])
  const [selectedWeek, setSelectedWeek] = useState<Date>(new Date())
  const handleWeekChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedWeek(date)
    }
  }

  return (
    <>
      <ChartsHead pageTitle="Dashboard" />
      <SearchInput />
      <PageContent>
        <div className="flex gap-4 items-center">
          <h1 className="sm:text-4xl font-medium text-base">Chart Workflow</h1>
          <button
            type="button"
            className="sm:w-64 w-20 text-white bg-apnea-dive focus:outline-none font-medium px-6 py-2 rounded-full text-center inline-flex items-center h-10 gap-1"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="invisible lg:visible sm:text-sm text-xs">
              Manage Auto-Publish Days
            </span>
          </button>
          <div className="relative ml-auto w-1/4">
            <WeekPicker
              selectedDate={selectedWeek}
              onChange={handleWeekChange}
            />
            <span className="absolute text-xs text-blue-600 bg-white top-[-7px] left-5 px-1">
              Issue Date
            </span>
            <span className="material-symbols-outlined absolute top-2 right-3 bg-gray-50 p-2 rounded-3xl">
              today
            </span>
          </div>
        </div>
        <div className="w-full flex py-4 px-6 justify-between gap-24 rounded-t-lg mt-3 text-white bg-gluon-grey grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 items-end">
          <ProgressBarChart title="Single Charts" data={chartsData} />
          <ProgressBarChart title="Album Charts" data={chartsData} />
          <ProgressBarChart title="Video Charts" data={chartsData} />
        </div>
        <ProgressGrid />
      </PageContent>
    </>
  )
}

export default Home
