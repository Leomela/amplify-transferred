import { useState, FC, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

type TabRange = [number, number]

interface NestedTabData {
  title: string
  content: string | JSX.Element
  range?: TabRange
}

interface TabData {
  label: string
  content: NestedTabData[] | JSX.Element
}

export interface NestedTabsProps {
  tabs: TabData[]
}

const NestedTabs: FC<NestedTabsProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedNestedIndex, setSelectedNestedIndex] = useState(0)

  // To be used in API call to get the ranged data
  const [, setRange] = useState<TabRange | undefined>()

  const tabSelectHandler = (index: number) => {
    setSelectedIndex(index)
    setSelectedNestedIndex(0)
  }

  const nestedTabSelectHandler = (index: number) => {
    setSelectedNestedIndex(index)
  }

  useEffect(() => {
    const content = tabs[selectedIndex].content
    if (Array.isArray(content)) {
      const range = content[selectedNestedIndex].range
      setRange(range)
    } else {
      setRange(undefined)
    }
  }, [tabs, selectedNestedIndex, selectedIndex])

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={tabSelectHandler}
      className="border border-gray-300 rounded overflow-hidden mt-5"
      focusTabOnClick={true}
    >
      <TabList className="flex border-b border-gray-300 bg-boysenberry-shadow divide-x">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`px-4 py-3 cursor-pointer capitalize focus:outline-none ${
              selectedIndex === index
                ? 'border-b-2 border-b-apnea-dive text-apnea-dive'
                : 'text-ishtar border-kingly-cloud'
            }`}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={index}>
          {Array.isArray(tab.content) ? (
            <Tabs
              selectedIndex={selectedNestedIndex}
              onSelect={nestedTabSelectHandler}
              focusTabOnClick={true}
            >
              <TabList className="flex flex-wrap border border-gray-300">
                {tab.content.map((nestedTab, nestedIndex) => (
                  <Tab
                    key={nestedIndex}
                    className={`px-2 py-3 cursor-pointer border focus:outline-none ${
                      selectedNestedIndex === nestedIndex
                        ? 'border-b-2 border-apnea-dive text-apnea-dive border-t-0 border-x-0'
                        : 'hover:bg-gray-100 border-kingly-cloud'
                    }`}
                  >
                    {nestedTab.title}
                  </Tab>
                ))}
              </TabList>
              {tab.content.map((nestedTab, nestedIndex) => (
                <TabPanel key={nestedIndex}>{nestedTab.content}</TabPanel>
              ))}
            </Tabs>
          ) : (
            tab.content
          )}
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default NestedTabs
