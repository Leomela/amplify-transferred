import { FC } from 'react'
import ProgressBar from './ProgressBar'

type ChartsItem = {
  id: number
  title: string
  maxScore: number
  actualScore: number
}

type ChartProps = {
  title: string
  data: ChartsItem[]
}

const ProgressBarChart: FC<ChartProps> = (props) => {
  return (
    <div className="blocks flex-1 w-80XX">
      <h3 className="text-xl text-white">{props.title}</h3>
      <div className="results">
        {props.data.map((item: ChartsItem) => {
          return (
            <div className="progress my-3" key={item.id}>
              <h4 className="text-white uppercase text-xs">{item.title}</h4>
              <ProgressBar
                maxScore={item.maxScore}
                actualScore={item.actualScore}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBarChart
