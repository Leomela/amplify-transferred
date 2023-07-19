import { useState, useCallback, ChangeEvent } from 'react'
import ChartsHead from '../../components/ChartsHead'
import PageContent from '../../components/Common/PageContent'
import WeekPicker from '../../components/WeekPicker'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const [selectedWeek, setSelectedWeek] = useState<Date>(new Date())
  const [inputValue, setInputValue] = useState<string>('')

  const searchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const weekChangeHandler = (date: Date | null) => {
    if (date !== null) {
      setSelectedWeek(date)
    }
  }

  const resetClickHandler = useCallback(() => {
    setInputValue('')
  }, [])

  return (
    <>
      <ChartsHead pageTitle="Issues" />
      <PageContent>
        <div className="h-screen flex items-center">
          <div className="border bg-wash-me p-6 sm:py-16 sm:px-20 w-full max-w-3xl mx-auto rounded-3xl shadow-xl relative space-y-8">
            <div className="mt-8 text-gray-900 font-medium text-xs text-center flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-medium sm:text-4xl text-deep-forest-brown">
                Chart Issues
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-base font-normal text-black">
                Search up a chart to get started
              </p>
            </div>
            <div className=" md:px-8">
              <div>
                <label htmlFor="search format" className="sr-only">
                  search format
                </label>

                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pointer-events-none px-3">
                    <span className="material-symbols-outlined">search</span>
                  </span>
                  <input
                    type="text"
                    className="border border-gray-400 w-full rounded-lg border-gray-200 p-4 pr-12 text-base font-normal shadow-sm pl-12"
                    placeholder="Format"
                    autoComplete="off"
                    onChange={searchChangeHandler}
                    value={inputValue}
                  />
                  {inputValue && (
                    <button
                      className="absolute top-2 right-2 p-2 rounded-3xl"
                      type="reset"
                      onClick={resetClickHandler}
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-4 mb-8">
                <label htmlFor="date" className="sr-only">
                  date
                </label>

                <div className="relative">
                  <WeekPicker
                    selectedDate={selectedWeek}
                    onChange={weekChangeHandler}
                  />
                  <span className="absolute inset-y-0 right-0 grid place-content-center">
                    <span className="material-symbols-outlined absolute top-2 right-2 bg-gray-100 p-2 rounded-3xl">
                      today
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  )
}

export default Home
