import { useState, ChangeEvent, useCallback, FC } from 'react'

const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const searchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const resetClickHandler = useCallback(() => {
    setInputValue('')
  }, [])

  return (
    <div className="relative flex items-center h-14 rounded focus-within:shadow-lg bg-cotton-ball-gray font-normal">
      <div className="grid place-items-center h-full w-12 text-gray-400 pointer-events-none">
        <span className="material-symbols-outlined text-deep-forest-brown">
          search
        </span>
      </div>

      <label htmlFor="search" className="sr-only">
        Search Artist, Titles, and Charts
      </label>
      <input
        className="w-full border-none focus:ring-0 focus:outline-none text-base text-deep-forest-brown bg-cotton-ball-gray px-2 font-normal ml-[-5px]"
        type="text"
        name="search"
        placeholder="Search Artist, Titles, and Charts"
        autoComplete="off"
        onChange={searchChangeHandler}
        value={inputValue}
      />

      {inputValue && (
        <button
          className="border-none bg-none relative w-12 grid place-items-center h-full text-gray-400"
          type="reset"
          onClick={resetClickHandler}
        >
          <span className="material-symbols-outlined text-deep-forest-brown">
            close
          </span>
        </button>
      )}
    </div>
  )
}

export default SearchInput
