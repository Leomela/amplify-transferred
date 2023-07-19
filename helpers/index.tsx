/**
 * Determines if a given date falls within the same week as the current date.
 * @param {Date} date - The date to check.
 * @param {Date} currentDate - The current date.
 * @returns {boolean} - True if the given date falls within the same week as the current date, otherwise false.
 */
export const isSameWeek = (date: Date, currentDate: Date): boolean => {
  const startOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  )
  const endOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay() + 6
  )
  return date >= startOfWeek && date <= endOfWeek
}

/**
 * Returns the specified day of the week of the week that a given date falls in.
 *
 * @param {Date} date - The date to find the day of the week for.
 * @param {number} dayOfWeek - The day of the week to find (0 for Sunday, 1 for Monday, ..., 6 for Saturday).
 * @returns {Date} The Date object representing the specified day of the week.
 */
export const getNthDayOfWeek = (date: Date, dayOfWeek: number): Date => {
  const diff = dayOfWeek - date.getDay()
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff)
}

/**
 * Returns an array containing only the unique values in the given array.
 *
 * @template T The type of the elements in the input array.
 * @param {T[]} arr The array to filter.
 * @returns {T[]} An array containing only the unique values in the input array.
 */
export const getUniqueValues = <T extends string | number>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

/**
 * Applies column styles based on the current selected cell.
 * The column of the selected cell will have the specified CSS classes applied.
 * Other columns will have their styles reset.
 *
 * @param {any[]} columns - The array of columns to apply styles to.
 * @param {number} columnIndex - The index of the selected cell's column.
 * @param {number} rowIndex - The index of the selected cell's row.
 * @param {string} highlightClass - The highlight CSS class for selected columns.
 * @returns {any[]} - The updated array of columns with applied styles.
 */
export const applyColumnStylesBasedOnSelection = (
  columns: any[],
  columnIndex: number,
  rowIndex: number,
  highlightClass: string
) => {
  return columns.map((c, index) => {
    if (index === columnIndex) {
      return Object.assign({}, c, {
        className: (cellProps: any) => {
          if (cellProps.rowIndex === rowIndex) {
            return highlightClass
          }
        },
      })
    } else {
      return Object.assign({}, c, { style: null })
    }
  })
}
