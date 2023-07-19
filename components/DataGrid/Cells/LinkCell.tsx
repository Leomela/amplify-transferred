import React, { FC } from 'react'
import { CellProps } from '@inovua/reactdatagrid-community/types'
import Link from '../../Common/Link'

const LinkCell: FC<CellProps> = ({ value }) => <Link href="#">{value}</Link>

export default LinkCell
