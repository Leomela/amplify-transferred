import { FC } from 'react'

type FormatTableRowProps = {
  title: string
  keyName: string
  value: string | number
  isEditable: boolean
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DetailsTableRows: FC<FormatTableRowProps> = ({
  title,
  keyName,
  value,
  isEditable,
  onInputChange,
}) => {
  return (
    <tr className="border-b border-gray-200">
      <th
        scope="row"
        className="w-36 pl-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 capitalize"
      >
        {title}
      </th>
      <td className="bg-white flex items-center">
        <input
          type="text"
          className={`w-36 sm:w-56 border-blue-100 focus:ring-blue-500 focus:border-blue-500 block cursor-text ${
            isEditable ? 'border-gray-200' : 'border-transparent'
          }`}
          name={keyName}
          value={value}
          onChange={onInputChange}
          disabled={!isEditable}
          autoComplete="off"
        />
      </td>
    </tr>
  )
}

export default DetailsTableRows
