import React, { useState, FC } from 'react'
import DataGrid from './DataGrid'
import type { DataGridSource, DataGridColumn } from './DataGrid'

type PageBreakdownDataItem = {
  source: string
  raw: string
  change: string
  percentage: string
  thisWeek: string
  lastWeek: string
  weekChange: string
  weekChangePercentage: string
  radioThisWeek: string
  radioLastWeek: string
  salesThisWeek: string
  salesLastWeek: string
  socialThisWeek: string
  socialLastWeek: string
  streamThisWeek: string
  streamLastWeek: string
}

type ModalProps = {
  selectedCell: any
  onClose: () => void
}

enum GroupName {
  Points = 'points',
  Radio = 'radio',
  Sales = 'sales',
  Social = 'social',
  Stream = 'stream',
}

const PageBreakdown: FC<ModalProps> = ({ onClose }) => {
  const groups = [
    { name: GroupName.Points, header: 'Points' },
    { name: GroupName.Radio, header: 'Radio' },
    { name: GroupName.Sales, header: 'Sales' },
    { name: GroupName.Social, header: 'Social' },
    { name: GroupName.Stream, header: 'Stream' },
  ]

  const [columns] = useState<DataGridColumn<PageBreakdownDataItem>[]>([
    {
      name: 'source',
      header: 'Source',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 3,
    },
    {
      name: 'raw',
      header: 'Raw',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'change',
      header: '+/-',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'percentage',
      header: '%',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'thisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'lastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'weekChange',
      header: '+/-',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'weekChangePercentage',
      header: '%',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
    },
    {
      name: 'radioThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
    },
    {
      name: 'radioLastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
    },
    {
      name: 'salesThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'sales',
      defaultFlex: 1,
    },
    {
      name: 'salesLastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'sales',
      defaultFlex: 1,
    },
    {
      name: 'socialThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'social',
      defaultFlex: 1,
    },
    {
      name: 'socialLastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'social',
      defaultFlex: 1,
    },
    {
      name: 'streamThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'stream',
      defaultFlex: 1,
    },
    {
      name: 'streamLastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'stream',
      defaultFlex: 1,
    },
  ])

  const [dataSource] = useState<DataGridSource<PageBreakdownDataItem>>([
    {
      source: 'BRW',
      raw: '3,337',
      change: '+1046',
      percentage: '',
      thisWeek: '34,931',
      lastWeek: '22,091',
      weekChange: '+989',
      weekChangePercentage: '45%',
      radioThisWeek: '3,434',
      radioLastWeek: '2,343',
      salesThisWeek: '2,543',
      salesLastWeek: '4,565',
      socialThisWeek: '9,344',
      socialLastWeek: '4,454',
      streamThisWeek: '5,455',
      streamLastWeek: '1,232',
    },
  ])

  return (
    <div className="w-full border-t-8 border-l-8 border-r-8 border-jet pb-30">
      <DataGrid
        className="flex-1 w-full"
        columns={columns}
        dataSource={dataSource}
        groups={groups}
      />
      <div className="text-center bg-jet">
        <button onClick={onClose} className="text-white p-2 w-full">
          Close
        </button>
      </div>
    </div>
  )
}

export default PageBreakdown
