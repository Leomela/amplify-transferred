import React, { FC } from 'react'
import { CellProps } from '@inovua/reactdatagrid-community/types'

const StatusCell: FC<CellProps> = ({ value }) => {
  return value ? (
    <span className="text-vital-green material-symbols-outlined">done</span>
  ) : (
    <span className="text-red-500 material-symbols-outlined">close</span>
  )
}

export default StatusCell
