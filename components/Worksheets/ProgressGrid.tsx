import DataGrid from '../DataGrid'
import type { DataGridSource, DataGridColumn } from '../DataGrid'
import LinkCell from '../DataGrid/Cells/LinkCell'
import ProgressBarCell from '../DataGrid/Cells/ProgressBarCell'
import TagsCell from '../DataGrid/Cells/TagsCell'
import StatusCell from '../DataGrid/Cells/StatusCell'
import React, { FC, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

type FormatsListDataItem = {
  format_id: string
  actions: string[]
  initial_date: string
  chart: string
  progress: number
  worksheet: number | string
  bullet: string[]
  artists: boolean
  artist_credit: boolean
  labels: boolean
}

const ProgressGrid: FC = () => {
  const [columns] = useState<DataGridColumn<FormatsListDataItem>[]>([
    {
      name: 'format_id',
      header: 'Format ID',
      maxWidth: 100,
      defaultFlex: 1,
      render: LinkCell,
      textAlign: 'center',
    },
    {
      name: 'actions',
      header: 'Actions',
      defaultFlex: 1,
      textAlign: 'center',
      render: TagsCell,
    },
    { name: 'initial_date', header: 'Initial Date', defaultFlex: 1 },
    { name: 'chart', header: 'Chart', defaultFlex: 2 },
    {
      name: 'progress',
      header: 'Progress',
      defaultFlex: 1,
      textAlign: 'center',
      render: ProgressBarCell,
    },
    {
      name: 'worksheet',
      header: 'Worksheet',
      defaultFlex: 1,
      textAlign: 'center',
    },
    {
      name: 'bullet',
      header: 'Bullet',
      defaultFlex: 0.4,
      textAlign: 'center',
      render: TagsCell,
    },
    {
      name: 'artists',
      header: 'Artists',
      defaultFlex: 0.5,
      textAlign: 'center',
      render: StatusCell,
    },
    {
      name: 'artist_credit',
      header: 'Artist Credit',
      defaultFlex: 0.5,
      textAlign: 'center',
      render: StatusCell,
    },
    {
      name: 'labels',
      header: 'Labels',
      defaultFlex: 0.5,
      textAlign: 'center',
      render: StatusCell,
    },
  ])

  const [dataSource] = useState<DataGridSource<FormatsListDataItem>>([
    {
      format_id: 'A02',
      actions: ['foo', 'qux'],
      initial_date: '12/14 12:48 PM',
      chart: 'Album (Cassette)',
      progress: 90,
      worksheet: '2000',
      bullet: ['62', '62', '63'],
      artists: true,
      artist_credit: true,
      labels: false,
    },
    {
      format_id: 'A03',
      actions: ['foo', 'bar'],
      initial_date: '12/14 01:20 PM',
      chart: 'Album (CD)',
      progress: 50,
      worksheet: '928',
      bullet: [],
      artists: true,
      artist_credit: true,
      labels: true,
    },
    {
      format_id: 'A04',
      actions: ['foo', 'bar'],
      initial_date: '12/14 01:48 PM',
      chart: 'Album (Digital)',
      progress: 70,
      worksheet: '1999',
      bullet: ['6'],
      artists: true,
      artist_credit: true,
      labels: true,
    },
  ])

  const selectedClassName =
    'border-b-4 border-b-apnea-dive text-apnea-dive bg-white border-l-gray-300'

  const tabData = [
    { label: 'Albums' },
    { label: 'Singles' },
    { label: 'Video' },
    { label: 'Albums' },
    { label: 'Singles' },
    { label: 'Video' },
    { label: 'Albums Sales' },
    { label: 'Artist 50' },
    { label: 'Biz Year-End Charts' },
    { label: 'Consumption' },
    { label: 'HOWT' },
    { label: 'S&P' },
    { label: 'Single Cells' },
    { label: 'Top Alternative Artist' },
    { label: 'Top Artist' },
    { label: 'Top Christian Artist' },
  ]

  return (
    <div className="full">
      <Tabs className="border border-gray-300 overflow-hidden">
        <TabList className="flex bg-white border-b border-gray-300">
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              className="px-4 py-3 cursor-pointer capitalize focus:outline-none border-l border-gray-300"
              selectedClassName={selectedClassName}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanel>
          <div className="w-full">
            <DataGrid
              className="flex-1"
              columns={columns}
              dataSource={dataSource}
            />
          </div>
        </TabPanel>
        {/* Add more tab panels here */}
      </Tabs>
    </div>
  )
}

export default ProgressGrid
