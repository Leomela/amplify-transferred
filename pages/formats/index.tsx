import React, { useState } from 'react'
import { NextPage } from 'next'
import DataGrid from '../../components/DataGrid'
import type { DataGridSource, DataGridColumn } from '../../components/DataGrid'
import LinkCell from '../../components/DataGrid/Cells/LinkCell'
import PageContent from '../../components/Common/PageContent'
import PageTitle from '../../components/Common/PageTitle'
import ChartsHead from '../../components/ChartsHead'
import SearchInput from '../../components/dashboard/SearchInput'
import WorksheetFilter from '../../components/dashboard/WorksheetFilter'

type FormatsListDataItem = {
  id: string
  chart_name: string
  genre: string
  type: string
  depth: number | string
  worksheet: number | string
  content: string
  current_number_one: string
}

const FormatsList: NextPage = () => {
  const [columns] = useState<DataGridColumn<FormatsListDataItem>[]>([
    {
      name: 'id',
      header: 'ID',
      maxWidth: 100,
      defaultFlex: 1,
      render: LinkCell,
      textAlign: 'center',
    },
    { name: 'chart_name', header: 'Chart Name', defaultFlex: 3 },
    { name: 'genre', header: 'Genre', defaultFlex: 1.5 },
    { name: 'type', header: 'Type', defaultFlex: 1, textAlign: 'center' },
    { name: 'depth', header: 'Depth', defaultFlex: 1, textAlign: 'center' },
    {
      name: 'worksheet',
      header: 'Worksheet',
      defaultFlex: 1,
      textAlign: 'center',
    },
    { name: 'content', header: 'Content', defaultFlex: 1 },
    { name: 'current_number_one', header: 'Current #1', defaultFlex: 3 },
  ])

  const [dataSource] = useState<DataGridSource<FormatsListDataItem>>([
    {
      id: 'BRW',
      chart_name: 'Cast Albums',
      genre: 'Additional',
      type: 'Album',
      depth: 15,
      worksheet: 100,
      content: 'S-scan',
      current_number_one: '01/21/23 Original Broadway Cast Recording',
    },
    {
      id: 'GIG',
      chart_name: 'Comedy Albums',
      genre: 'Additional',
      type: 'Album',
      depth: 10,
      worksheet: 100,
      content: 'S-scan',
      current_number_one: '01/21/23 Bo Burnham',
    },
    {
      id: 'CMP',
      chart_name: 'Compilation Albums',
      genre: 'Additional',
      type: 'Album',
      depth: 15,
      worksheet: 500,
      content: 'S-scan',
      current_number_one: '01/21/23 Various Artists',
    },
    {
      id: 'DSI',
      chart_name: 'Dance Club Songs',
      genre: 'Additional',
      type: 'Single',
      depth: 50,
      worksheet: 200,
      content: 'Survey',
      current_number_one: '03/28/20 Diana Ross',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
    {
      id: 'XXX',
      chart_name: 'Chart Name',
      genre: 'Genre',
      type: 'XXX',
      depth: 'XX',
      worksheet: 'XXX',
      content: 'XXXXX',
      current_number_one: '----',
    },
  ])

  return (
    <>
      <ChartsHead pageTitle="Formats" />
      <SearchInput />
      <PageContent>
        <div className="flex-none flex justify-between mb-4">
          <PageTitle>Chart Formats</PageTitle>
          <WorksheetFilter />
        </div>

        <DataGrid
          className="flex-1"
          columns={columns}
          dataSource={dataSource}
        />
      </PageContent>
    </>
  )
}

export default FormatsList
