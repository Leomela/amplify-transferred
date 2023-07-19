import React, { FC, useMemo } from 'react'
import { CellProps } from '@inovua/reactdatagrid-community/types'

const ProgressBarCell: FC<CellProps> = ({ value }) => {
  const colorClass = useMemo(() => {
    if (value < 50) {
      return 'bg-red-500 text-white'
    }

    if (value >= 50 && value <= 80) {
      return 'bg-blue-500 text-black'
    }

    return 'bg-green-500 text-white'
  }, [value])

  return (
    <div className="relative h-5 w-full bg-gray-300">
      <div
        className={`absolute top-0 h-5 text-right ${colorClass}`}
        style={{ width: `${value}%` }}
      >
        <span className="px-2">{value}%</span>
      </div>
    </div>
  )
}

export default ProgressBarCell
