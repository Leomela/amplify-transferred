import { NextPage } from 'next'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'
import { Artist } from '../../types/entities'
import type { GetServerSideProps } from 'next'
import ErrorModal from '../../components/ErrorModal'
import ArtistContext from '../../components/Context/ArtistContext'
import ArtistDetailsTable from '../../components/Artists/ArtistDetailsTable'

type ArtistDetailsProps = {
  artistData: Artist
  errorCode: number | boolean
}

const ArtistDetails: NextPage<ArtistDetailsProps> = (props) => {
  const router = useRouter()
  const { artistID } = router.query

  if (props.errorCode) {
    return (
      <ErrorModal
        icon="error"
        message="Oops, Something went wrong"
        buttonText="Retry"
      />
    )
  }

  return (
    <ArtistContext.Provider value={{ artist: props.artistData }}>
      <ArtistDetailsTable
        artistID={Number(artistID)}
        artistData={props.artistData}
      />
    </ArtistContext.Provider>
  )
}

export default ArtistDetails

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { artistID } = context.query
  const { NEXT_PUBLIC_CHART_API_BASE_URL: apiBaseUrl = '' } = process.env

  try {
    const artistResponse = await axios.get(`${apiBaseUrl}/artists/${artistID}`)
    const artistData = artistResponse.data.data

    return {
      props: {
        artistData,
        errorCode: false,
      },
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        props: {
          artistData: {},
          errorCode: error.response?.status || 500,
        },
      }
    }

    return {
      props: {
        artistData: {},
        errorCode: 500,
      },
    }
  }
}
