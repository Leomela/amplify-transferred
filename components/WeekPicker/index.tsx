import { useState, useCallback } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { isSameWeek, getNthDayOfWeek } from '../../helpers'
import WeekPickerHeader from './WeekPickerHeader'

interface WeekPickerProps
  extends Omit<ReactDatePickerProps, 'onChange' | 'selected'> {
  selectedDate: Date | null
  onChange: (date: Date | null) => void
}

const WeekPicker = ({ selectedDate, onChange, ...props }: WeekPickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(selectedDate)

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const saturday = getNthDayOfWeek(date, 6)
      setStartDate(saturday)
      onChange(saturday)
    } else {
      setStartDate(null)
      onChange(null)
    }
  }

  const currentWeekClassName = useCallback(
    (currentDate: Date) => {
      if (null === startDate) {
        return ''
      }
      return isSameWeek(currentDate, startDate)
        ? 'bg-blue-200 react-datepicker__selected-weekdays text-white m-0'
        : ''
    },
    [startDate]
  )

  return (
    <DatePicker
      className="flex-end justify-self-end rounded-lg h-14 w-full p-1 pl-2 border border-gray-400 w-full rounded-lg border-gray-200 p-4 pr-12 text-base font-normal shadow-sm"
      calendarClassName="weekpicker"
      selected={selectedDate}
      onChange={handleDateChange}
      renderCustomHeader={WeekPickerHeader}
      dateFormat="MM/dd/yyyy"
      showYearDropdown
      showMonthDropdown
      showPopperArrow={false}
      yearDropdownItemNumber={15}
      dayClassName={currentWeekClassName}
      {...props}
    />
  )
}

export default WeekPicker
