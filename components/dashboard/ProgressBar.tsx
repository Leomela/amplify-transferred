import { FC, useMemo } from 'react'

type ProgressBarProps = {
  actualScore: number
  maxScore: number
}

const calculatePercentage = ({
  actualScore,
  maxScore,
}: ProgressBarProps): number => {
  if (actualScore && maxScore) {
    return (actualScore / maxScore) * 100
  }
  return 0
}

const ProgressBar: FC<ProgressBarProps> = ({ actualScore, maxScore }) => {
  const scorePercentage = useMemo(
    () => calculatePercentage({ actualScore, maxScore }),
    [actualScore, maxScore]
  )

  return (
    <div className="w-full bg-ishtar h-3 my-1 relative">
      <div
        className="bg-punch-out-glove h-3"
        style={{ width: `${scorePercentage}%` }}
      ></div>
      {actualScore && maxScore && (
        <span className="text-white absolute top-px right-0.5 mr-1 text-2xs leading-none">
          {actualScore} / {maxScore}
        </span>
      )}
    </div>
  )
}

export default ProgressBar
