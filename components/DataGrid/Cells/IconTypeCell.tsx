import React, { FC } from 'react'
import { CellProps } from '@inovua/reactdatagrid-community/types'

const IconTypeCell: FC<CellProps> = ({ value }) => {
  let icon = ''

  switch (value) {
    case 'success':
      icon = 'done'
      break
    case 'error':
      icon = 'close'
      break
    case 'music':
      icon = 'music_note'
      break
    default:
      icon = ''
      break
  }

  return icon ? (
    <span
      className={`text-${
        value === 'success' ? 'vital-green' : 'black-space'
      } material-symbols-outlined`}
    >
      {icon}
    </span>
  ) : null
}

export default IconTypeCell
