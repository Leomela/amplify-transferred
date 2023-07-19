import type { ArtistTabsProps } from '../ArtistTabs'
import ArtistDetailsTitles from '../ArtistDetailsTitles'
import ArtistExternalIds from '../ArtistExternalIds'

const artistTabsData: ArtistTabsProps['tabs'] = [
  {
    label: 'titles',
    content: <ArtistDetailsTitles />,
  },
  {
    label: 'media',
    content: 'This is the content for media',
  },
  {
    label: 'genre',
    content: 'This is the content for genre',
  },
  {
    label: 'external IDs',
    content: <ArtistExternalIds />,
  },
]

export default artistTabsData
