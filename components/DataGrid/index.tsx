import React from 'react'
import dynamic from 'next/dynamic'
import type {
  DataGridColumn,
  DataGridSource,
  RenderRowContextMenuProps,
} from './DataGrid'
import DataGridStatic from './DataGrid'
export { DataGridSource, DataGridColumn, RenderRowContextMenuProps }

const DataGrid = dynamic(() => import('./DataGrid'), {
  ssr: false,
  loading: () => <>Loading data grid...</>,
}) as typeof DataGridStatic

export default DataGrid
