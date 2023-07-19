import axios from 'axios'
import { debounce } from 'lodash'
import PageTitle from '../../Common/PageTitle'
import PageContent from '../../Common/PageContent'
import { FC, useState, useCallback, ChangeEvent } from 'react'
import InputFieldsUnlocker from '../../Common/InputFieldsUnlocker'
import type {
  EditFormatProps,
  EditFormatDataProps,
} from '../../../pages/formats/[id]'
import ChartsHead from '../../ChartsHead'
import FormatTableRow from './FormatTableRows'

const EditFormat: FC<EditFormatProps> = ({ id, formatData }) => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [editFormatData, setEditFormatData] =
    useState<EditFormatDataProps>(formatData)

  const apiBaseUrl = process.env.NEXT_PUBLIC_CHART_API_BASE_URL
  const formatTableRowsData: {
    title: string
    keyName: string
    value: string | number
  }[] = [
    {
      title: 'description',
      keyName: 'name',
      value: editFormatData.name,
    },
    {
      title: 'format status',
      keyName: 'chart_code',
      value: editFormatData.chart_code,
    },
    {
      title: 'chart size',
      keyName: 'depth',
      value: editFormatData.depth,
    },
  ]

  const updateEditFormatData = async (
    id: number,
    data: EditFormatDataProps
  ) => {
    setIsSaving(true)
    await axios.put(`${apiBaseUrl}/formats/${id}`, data)
    setIsSaving(false)
  }

  const unLockFields = useCallback(() => {
    setIsEditable((prev) => !prev)
  }, [])

  const debounceFn = useCallback(
    debounce((id: number, data: EditFormatDataProps) => {
      updateEditFormatData(id, data)
    }, 1000),
    []
  )

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditFormatData((prev) => ({ ...prev, [name]: value }))
    debounceFn(id, { ...editFormatData, [name]: value })
  }

  return (
    <>
      <ChartsHead pageTitle={`${editFormatData.chart_code} Format`} />
      <PageContent>
        <section>
          <div className="mb-4">
            <PageTitle>{`(${editFormatData.chart_code}) ${editFormatData.name}`}</PageTitle>
          </div>

          <div className="p-5 mx-auto bg-gluon-grey rounded-t-lg relative">
            <InputFieldsUnlocker
              title="Edit Chart Formats"
              isSaving={isSaving}
              isEditable={isEditable}
              unLockFields={unLockFields}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end md:mt-0 mt-16">
              <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded h-fit">
                <table className="w-full text-sm text-left text-gray-500">
                  <tbody>
                    {formatTableRowsData.map((row) => (
                      <FormatTableRow
                        key={row.keyName}
                        title={row.title}
                        keyName={row.keyName}
                        value={row.value}
                        isEditable={isEditable}
                        onInputChange={inputChangeHandler}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default EditFormat
