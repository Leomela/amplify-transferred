import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'
import EditFormat from '../../components/dashboard/EditFormat'

export type EditFormatDataProps = {
  id: number
  name: string
  chart_code: string
  depth: number
}

export type EditFormatProps = {
  id: number
  formatData: EditFormatDataProps
}

const Formats: NextPage<EditFormatProps> = (props) => {
  const router = useRouter()
  const { id } = router.query

  return <EditFormat id={Number(id)} formatData={props.formatData} />
}

export default Formats

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const { NEXT_PUBLIC_CHART_API_BASE_URL: chartApiBaseUrl = '' } = process.env
  try {
    const response = await axios.get(`${chartApiBaseUrl}/formats/${id}`)
    return {
      props: {
        formatData: response.data.data,
      },
    }
  } catch {
    return {
      props: {},
    }
  }
}
