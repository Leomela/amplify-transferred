import ProgressGrid from '../../Worksheets/ProgressGrid'
import PointsBreakdownDemoChart from '../../Worksheets/PointsBreakdownDemoChart'
import type { NestedTabsProps } from './NestedTabs'
import Operations from '../Worksheet/Operations'

export const tabs: NestedTabsProps['tabs'] = [
  {
    label: 'browse',
    content: [
      {
        title: 'Chart (1-200)',
        content: <PointsBreakdownDemoChart />,
        range: [1, 200],
      },
      {
        title: 'Chart+ (1-250)',
        content: <ProgressGrid />,
        range: [1, 250],
      },
      {
        title: 'Chart+100 (1-300)',
        content: <ProgressGrid />,
        range: [1, 300],
      },
      {
        title: 'AWOL',
        content: <ProgressGrid />,
      },
      {
        title: '200-300',
        content: 'This is the content for 200-300',
        range: [200, 300],
      },
      {
        title: '300-400',
        content: 'This is the content for 300-400',
        range: [300, 400],
      },
      {
        title: 'All',
        content: 'This is the content for All',
        range: [0, 0],
      },
    ],
  },
  {
    label: 'operations',
    content: <Operations />,
  },
  {
    label: 'rules',
    content: [],
  },
  {
    label: 'export',
    content: [],
  },
  {
    label: 'add titles',
    content: [],
  },
  {
    label: 'sources',
    content: [],
  },
  {
    label: 'diagnostics',
    content: [],
  },
  {
    label: 'source dates',
    content: [],
  },
  {
    label: 'charts history',
    content: [],
  },
  {
    label: 'charts images',
    content: [],
  },
]
