import axios from 'axios'
import Image from 'next/image'
import { debounce } from 'lodash'
import ArtistTabs from '../ArtistTabs'
import ChartsHead from '../../ChartsHead'
import PageTitle from '../../Common/PageTitle'
import DetailsTableRows from './DetailsTableRows'
import PageContent from '../../Common/PageContent'
import artistTabsData from '../ArtistTabs/TabsData'
import SearchInput from '../../dashboard/SearchInput'
import { Artist } from '../../../types/entities'
import { FC, useState, useCallback, ChangeEvent } from 'react'
import InputFieldsUnlocker from '../../Common/InputFieldsUnlocker'

type ArtistDetailsTableProps = {
  artistID: number
  artistData: Artist
}

const ArtistDetailsTable: FC<ArtistDetailsTableProps> = ({
  artistID,
  artistData,
}) => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [editArtistData, setEditArtistData] = useState<Artist>(artistData)

  const apiBaseUrl = process.env.NEXT_PUBLIC_CHART_API_BASE_URL

  const artistTableRowsData: {
    title: string
    keyName: string
    value: string
  }[] = [
    {
      title: 'artist name',
      keyName: 'artist_name',
      value: editArtistData.artist_name,
    },
    {
      title: 'artist short name',
      keyName: 'artist_short_name',
      value: editArtistData.artist_short_name,
    },
    {
      title: 'reverse name',
      keyName: 'reverse_name',
      value: editArtistData.reverse_name,
    },
    {
      title: 'gender',
      keyName: 'gender',
      value: editArtistData.gender,
    },
    {
      title: 'type',
      keyName: 'artist_type',
      value: editArtistData.type,
    },
    {
      title: 'ensemble size',
      keyName: 'ensemble_size',
      value: editArtistData.ensemble_size,
    },
  ]

  const updateArtistData = async (artistID: number, data: Artist) => {
    setIsSaving(true)
    await axios.put(`${apiBaseUrl}/artists/${artistID}`, data)
    setIsSaving(false)
  }

  const debounceFn = useCallback(
    debounce((artistID: number, data: Artist) => {
      updateArtistData(artistID, data)
    }, 1000),
    []
  )

  const unLockFields = useCallback(() => {
    setIsEditable((prev) => !prev)
    setIsSaving(false)
  }, [])

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditArtistData((prev) => ({ ...prev, [name]: value }))
    debounceFn(artistID, { ...editArtistData, [name]: value })
  }

  return (
    <>
      <ChartsHead pageTitle={`Artist: ${editArtistData.artist_short_name}`} />
      <SearchInput />
      <PageContent>
        <section>
          <p className="font-medium text-soft-savvy text-sm py-1">
            ARTIST DETAILS
          </p>
          <div className="mb-4 text-black">
            <PageTitle>{editArtistData.artist_name}</PageTitle>
          </div>

          <div className="p-5 mx-auto bg-gluon-grey rounded-t-xl relative">
            <InputFieldsUnlocker
              title="Edit Artist Details"
              isSaving={isSaving}
              isEditable={isEditable}
              unLockFields={unLockFields}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end md:mt-0 mt-16">
              <div className="flex justify-center items-center border border-2-gray-500">
                <Image
                  className="row-span-3"
                  alt="Picture of the author"
                  src={require('../../../public/assets/images/taylor.jpeg')} // static for all artists just for now.
                  placeholder="blur"
                  width={250}
                  height={250}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              <div className="relative overflow-x-auto overflow-y-auto shadow-md rounded h-fit flex-initial">
                <table className="w-full text-sm text-left text-gray-500">
                  <tbody>
                    {artistTableRowsData.map((row) => (
                      <DetailsTableRows
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

        <section>
          <ArtistTabs tabs={artistTabsData} />
        </section>
      </PageContent>
    </>
  )
}

export default ArtistDetailsTable
