import { FC, useState } from 'react'
import DataGrid from '../../components/DataGrid'
import IconTypeCell from '../DataGrid/Cells/IconTypeCell'
import LinkCell from '../../components/DataGrid/Cells/LinkCell'
import WorksheetFilter from '../../components/dashboard/WorksheetFilter'
import type { DataGridSource, DataGridColumn } from '../../components/DataGrid'

type ArtistDetailsTitlesDataItem = {
  type: string
  title: string
  artist: string
  debut: string
  peak: number | string
  charts: number | string
  credit: string
}

const ArtistDetailsTitles: FC = () => {
  const [columns] = useState<DataGridColumn<ArtistDetailsTitlesDataItem>[]>([
    {
      name: 'type',
      header: 'Type',
      defaultFlex: 1,
      textAlign: 'center',
      render: IconTypeCell,
    },
    { name: 'title', header: 'Title', defaultFlex: 3, render: LinkCell },
    {
      name: 'artist',
      header: 'Artist',
      textAlign: 'center',
      defaultFlex: 1,
      render: LinkCell,
    },
    {
      name: 'debut',
      header: 'Debut',
      maxWidth: 100,
      defaultFlex: 1,
      textAlign: 'center',
    },
    { name: 'peak', header: 'Peak', defaultFlex: 1, textAlign: 'center' },
    {
      name: 'charts',
      header: 'Charts',
      defaultFlex: 1,
      textAlign: 'center',
      render: LinkCell,
    },
    { name: 'credit', header: 'Credit', textAlign: 'center', defaultFlex: 1 },
  ])

  const [dataSource] = useState<DataGridSource<ArtistDetailsTitlesDataItem>>([
    {
      debut: '12-26-2020',
      title: 'Cast Albums',
      artist: 'Taylor Swift',
      type: 'music',
      peak: '12-26-2020',
      charts: 100,
      credit: 'S-scan',
    },
    {
      debut: '12-26-2020',
      title: 'Comedy Albums',
      artist: 'Taylor Swift',
      type: 'music',
      peak: '12-26-2020',
      charts: 100,
      credit: 'S-scan',
    },
    {
      debut: '12-26-2020',
      title: 'Compilation Albums',
      artist: 'Taylor Swift',
      type: 'music',
      peak: '12-26-2020',
      charts: 500,
      credit: 'S-scan',
    },
  ])

  return (
    <>
      <div className="w-full bg-white rounded-lg py-4 h-full flex flex-col flex-grow">
        <div className="flex-none flex justify-between mb-4 text-3xl font-medium">
          <span>Taylor Swift Titles</span>
          <WorksheetFilter />
        </div>
        <DataGrid
          className="flex-1"
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </>
  )
}

export default ArtistDetailsTitles
