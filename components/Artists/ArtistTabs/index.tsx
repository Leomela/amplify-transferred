import { FC, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

type TabData = {
  label: string
  content: JSX.Element | string
}

export type ArtistTabsProps = {
  tabs: TabData[]
}

const ArtistTabs: FC<ArtistTabsProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const tabSelectHandler = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={tabSelectHandler}
      className="overflow-hidden"
      focusTabOnClick={true}
    >
      <TabList className="flex border-gray-300 bg-boysenberry-shadow">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`px-4 py-3 border cursor-pointer capitalize focus:outline-none ${
              selectedIndex === index
                ? 'border-b-2 border-apnea-dive text-apnea-dive  border-t-0 border-x-0'
                : 'text-ishtar border-kingly-cloud'
            }`}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  )
}

export default ArtistTabs
