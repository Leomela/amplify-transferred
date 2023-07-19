import React, { FC } from 'react'
import { CellProps } from '@inovua/reactdatagrid-community/types'
import { getUniqueValues } from '../../../helpers'

const TagsCell: FC<CellProps> = ({ value }) => {
  const uniqueValues = getUniqueValues(value)

  return (
    <div className="flex space-between justify-center">
      {uniqueValues.map((tag: string | number) => (
        <span className="bg-black p-2 text-white mr-1 rounded" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagsCell
