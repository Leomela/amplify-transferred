import axios from 'axios'
import DataGrid from '../DataGrid'
import { useRouter } from 'next/router'
import PageBreakdown from '../PageBreakdown'
import ContextMenu from '../DataGrid/ContextMenu'
import LinkCell from '../DataGrid/Cells/LinkCell'
import TagsCell from '../DataGrid/Cells/TagsCell'
import React, { FC, useState, useCallback } from 'react'
import { applyColumnStylesBasedOnSelection } from '../../helpers'
import type {
  DataGridSource,
  DataGridColumn,
  RenderRowContextMenuProps,
} from '../DataGrid'

enum PointsGroupName {
  Rank = 'rank',
  Thumbnail = 'thumbnail',
  Title = 'title',
  Tags = 'tags',
  Points = 'points',
  Radio = 'radio',
  Sales = 'sales',
  Social = 'social',
  Stream = 'stream',
}

type PageBreakdownDataItem = {
  lw: number
  tw: number
  wks: number
  title: string
  artist: string
  thumbnail: string
  tags: string
  thisWeek: number
  lastWeek: number
  weekChange: string
  weekChangePercentage: string
  radioThisWeek: number
  radioLastWeek: number
  radioChange: string
  radioPercentage: string
  salesThisWeek: number
  salesChange: string
  socialThisWeek: number
  socialChange: string
  streamThisWeek: number
  streamChange: string
}

const PointGroups = [
  { name: PointsGroupName.Rank, header: 'Rank' },
  { name: '', header: '' },
  {
    name: PointsGroupName.Title,
    header: 'Title',
    headerClassName: 'text-center',
  },
  { name: '', header: '' },
  { name: PointsGroupName.Points, header: 'Points' },
  { name: PointsGroupName.Radio, header: 'Radio' },
  { name: PointsGroupName.Sales, header: 'Sales' },
  { name: PointsGroupName.Social, header: 'Social' },
  { name: PointsGroupName.Stream, header: 'Stream' },
]

type CustomDataGridColumn<TDataItem> = DataGridColumn<TDataItem> & {
  headerClassName?: string
}

const PointsBreakdownDemoChart: FC = () => {
  const router = useRouter()

  const [columns, setColumns] = usePointsBreakdownColumns()
  const [dataSource] = useState<DataGridSource<PageBreakdownDataItem>>([
    {
      lw: 1,
      tw: 1,
      wks: 439,
      title: 'Midnights',
      artist: 'Taylor Swift',
      thumbnail: 'IMG',
      tags: 'T',
      thisWeek: 2323423,
      lastWeek: 233434,
      weekChange: '23%',
      weekChangePercentage: '10%',
      radioThisWeek: 223545,
      radioLastWeek: 334344,
      radioChange: '-',
      radioPercentage: '-',
      salesThisWeek: 23234,
      salesChange: '-283,823',
      socialThisWeek: 988,
      socialChange: '-',
      streamThisWeek: 16988,
      streamChange: '-221,253',
    },
  ])

  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedCell, setSelectedCell] = useState(null)
  const [absoluteDivPosition, setAbsoluteDivPosition] = useState({
    top: 0,
    left: 0,
  })

  const onCellClick = useCallback(
    (event: MouseEvent, cellProps: any) => {
      const { columnIndex, rowIndex } = cellProps
      const { clientY } = event
      const parentElement = document.querySelector('#grid-parent') || null
      const parentBounds = parentElement?.getBoundingClientRect()

      if (parentBounds && parentBounds.top) {
        setAbsoluteDivPosition({
          top: clientY - parentBounds.top + 15,
          left: 0,
        })
      }

      setColumns(
        applyColumnStylesBasedOnSelection(
          columns,
          columnIndex,
          rowIndex,
          'bg-jet text-white'
        )
      )
      setSelectedCell(cellProps)
      setShowModal(true)
    },
    [columns, setColumns]
  )

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedCell(null)
  }

  const handleRowDelete = (rowIndex: number) => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_CHART_API_BASE_URL
    axios.delete(`${apiBaseUrl}/rows/${rowIndex}/delete`)
  }

  const renderRowContextMenu: RenderRowContextMenuProps = (
    menuProps,
    details
  ) => {
    const rowId = details.rowProps.rowIndex + 1

    const addContextMenuItems = [
      {
        label: 'Add row',
        icon: 'playlist_add',
        onClick: () => {
          // do something
        },
        needMenuClasses: true,
      },
      {
        label: 'Delete row',
        icon: 'delete',
        onClick: () => {
          handleRowDelete(rowId)
        },
        needMenuClasses: true,
      },
      {
        label: 'Artist Details',
        icon: 'person',
        onClick: () => {
          router.push(`/artists/${rowId}`)
        },
        needMenuClasses: true,
      },
      {
        label: 'Album Details',
        icon: 'library_music',
        onClick: () => {
          router.push(`/albums/${rowId}`) // Todo: Album Details page (currently not implemented - 404)
        },
        needMenuClasses: true,
      },
      {
        label: 'Song Details',
        icon: 'music_note',
        onClick: () => {
          router.push(`/songs/${rowId}`)
        },
        needMenuClasses: false,
      },
    ]

    return ContextMenu(menuProps, addContextMenuItems)
  }

  return (
    <div id="grid-parent" className="w-full h-full relative">
      <DataGrid
        className="flex-1 h-[600px]"
        columns={columns}
        dataSource={dataSource}
        onCellClick={onCellClick}
        groups={PointGroups}
        renderRowContextMenu={renderRowContextMenu}
      />
      {selectedCell && showModal && (
        <div
          style={{
            position: 'absolute',
            top: absoluteDivPosition.top,
            left: absoluteDivPosition.left,
            width: '100%',
          }}
        >
          <PageBreakdown
            selectedCell={selectedCell}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  )
}

const usePointsBreakdownColumns = () => {
  return useState<CustomDataGridColumn<PageBreakdownDataItem>[]>([
    {
      name: 'tw',
      header: 'TW',
      textAlign: 'center',
      group: 'rank',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'lw',
      header: 'LW',
      textAlign: 'center',
      group: 'rank',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'wks',
      header: 'wks',
      textAlign: 'center',
      group: 'rank',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'thumbnail',
      textAlign: 'center',
      group: 'thumbnail',
      sortable: false,
      header: <span className="material-symbols-outlined">imagesmode</span>,
      defaultFlex: 0.9,
    },
    {
      name: 'title',
      header: 'Title',
      textAlign: 'start',
      group: 'title',
      defaultFlex: 3,
      headerClassName: 'bg-white',
    },
    {
      name: 'artist',
      header: 'Artist',
      textAlign: 'end',
      headerAlign: 'end',
      render: LinkCell,
      group: 'title',
      defaultFlex: 3,
      headerClassName: 'text-right bg-white',
    },
    {
      name: 'tags',
      textAlign: 'center',
      group: 'tags',
      defaultFlex: 0.7,
      sortable: false,
      render: TagsCell,
      header: (
        <div className="flex space-between justify-center">
          <span className="bg-black p-2 text-white mr-1 rounded">S</span>
        </div>
      ),
    },
    {
      name: 'thisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'lastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'weekChange',
      header: '+/-',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'weekChangePercentage',
      header: '%',
      textAlign: 'center',
      group: 'points',
      defaultFlex: 0.8,
      headerClassName: 'bg-white',
    },
    {
      name: 'radioThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'radioLastWeek',
      header: 'LW',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'radioChange',
      header: '+/-',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'radioPercentage',
      header: '#',
      textAlign: 'center',
      group: 'radio',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'salesThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'sales',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'salesChange',
      header: '+/-',
      textAlign: 'center',
      group: 'sales',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'socialThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'social',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'socialChange',
      header: '+/-',
      textAlign: 'center',
      group: 'social',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'streamThisWeek',
      header: 'TW',
      textAlign: 'center',
      group: 'stream',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
    {
      name: 'streamChange',
      header: '+/-',
      textAlign: 'center',
      group: 'stream',
      defaultFlex: 1,
      headerClassName: 'bg-white',
    },
  ])
}

export default PointsBreakdownDemoChart
