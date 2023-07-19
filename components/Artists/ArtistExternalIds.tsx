import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useArtistContext } from '../Context/ArtistContext'

type ArtistExternalId = {
  artist_id: number
  external_type: string
  external_id: number
}

const ArtistExternalIds: FC = () => {
  const {
    artist: { id: artistID },
  } = useArtistContext()

  const [artistExternalIds, setArtistExternalIds] =
    useState<ArtistExternalId[]>()

  useEffect(() => {
    const fetchArtistExternalIds = async () => {
      const apiBaseUrl = process.env.NEXT_PUBLIC_CHART_API_BASE_URL

      const { data } = await axios.get(
        `${apiBaseUrl}/artists/${artistID}/external-ids`
      )

      setArtistExternalIds(data.data)
    }

    fetchArtistExternalIds()
  }, [artistID])

  return (
    <div className="w-full bg-white rounded-lg py-4 h-full flex flex-col flex-grow">
      <div className="mb-4 text-3xl font-medium">External IDs</div>
      <div className="lg:w-1/2 relative border border-gray-300 overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left">
          <tbody>
            {artistExternalIds &&
              artistExternalIds.map(({ external_type, external_id }) => (
                <tr
                  className="border-b border-gray-300"
                  key={`${external_type}-${external_id}`}
                >
                  <th
                    scope="row"
                    className="px-5 py-2 lg:w-52 w-36 font-semibold whitespace-nowrap bg-snowflake capitalize"
                  >
                    {external_type}
                  </th>
                  <td className="px-5 py-2">{external_id}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ArtistExternalIds
