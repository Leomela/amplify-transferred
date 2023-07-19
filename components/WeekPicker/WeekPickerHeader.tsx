import { FC } from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

const WeekPickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  increaseYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className="datepicker-header">
    <div>
      <button
        className="arrow-button m-2 pr-2"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        {'<'}
      </button>
      <span>{date.toLocaleString('default', { month: 'long' })}</span>
      <button
        className="arrow-button m-2 pl-2"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        {'>'}
      </button>
    </div>
    <div>
      <button className="arrow-button m-2 pr-2" onClick={decreaseYear}>
        {'<'}
      </button>
      <span>{date.getFullYear()}</span>
      <button className="arrow-button m-2 pl-2" onClick={increaseYear}>
        {'>'}
      </button>
    </div>
  </div>
)

export default WeekPickerHeader
