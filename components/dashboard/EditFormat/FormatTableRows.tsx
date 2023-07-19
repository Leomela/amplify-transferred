type FormatTableRowProps = {
  title: string
  keyName: string
  value: string | number
  isEditable: boolean
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormatTableRow = ({
  title,
  keyName,
  value,
  isEditable,
  onInputChange,
}: FormatTableRowProps) => {
  return (
    <tr className="border-b border-gray-200">
      <th
        scope="row"
        className="w-36 px-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 capitalize"
      >
        {title}
      </th>
      <td className="bg-white flex items-center">
        <input
          type="text"
          className={`lg:w-52 border-blue-100 focus:ring-blue-500 focus:border-blue-500 block cursor-text ${
            isEditable ? 'border-gray-200' : 'border-transparent'
          }`}
          name={keyName}
          autoComplete="off"
          onChange={onInputChange}
          value={value}
          disabled={!isEditable}
        />
      </td>
    </tr>
  )
}

export default FormatTableRow
