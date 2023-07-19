import {
  TypeColumn,
  TypeColumnGroup,
  TypeDataGridProps,
  TypeRowProps,
} from '@inovua/reactdatagrid-community/types'
import React from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/base.css'

export type RenderRowContextMenuItemProps = {
  autoDismiss?: boolean
  items?: Array<{ label: React.ReactNode; onClick?: () => void }>
  className?: string
}

export type RenderRowContextMenuProps = (
  menuProps: RenderRowContextMenuItemProps,
  details: {
    rowProps: TypeRowProps
  }
) => void

export type BaseDataItem = {
  [K: string]: any
}

export type DataGridColumn<TDataItem> = TypeColumn & {
  name: keyof TDataItem
}

type DataGridDataAsyncProps<TDataItem> = {
  currentData: TDataItem[]
  filterValue: null //@TODO: figure out the type later when working with filtering
  groupBy?: any
  limit?: number
  skip?: number
  sortInfo?: any
}

export type DataGridSource<TDataItem> =
  | ((props: DataGridDataAsyncProps<TDataItem>) => TDataItem[])
  | ((props: DataGridDataAsyncProps<TDataItem>) => Promise<TDataItem[]>)
  | ((props: DataGridDataAsyncProps<TDataItem>) => Promise<{
      data: TDataItem[]
      count: number
    }>)
  | TDataItem[]
  | Promise<TDataItem[]>
  | Promise<{
      data: TDataItem[]
      count: number
    }>

export type DataGridProps<TDataItem> = Pick<TypeDataGridProps, 'className'> & {
  columns: DataGridColumn<TDataItem>[]
  dataSource: DataGridSource<TDataItem>
  idColumn?: string
  renderRowContextMenu?: RenderRowContextMenuProps
  onCellClick?: (event: MouseEvent, cellProps: any) => void
  groups?: TypeColumnGroup[]
}

const DataGrid = <TDataItem extends BaseDataItem>(
  props: DataGridProps<TDataItem>
) => {
  return (
    <ReactDataGrid
      theme="pmc-chpub"
      idProperty={props.idColumn}
      showHoverRows={false}
      columnUserSelect={true}
      renderRowContextMenu={props.renderRowContextMenu}
      onCellClick={props.onCellClick}
      groups={props.groups}
      {...props}
    />
  )
}

export default DataGrid
