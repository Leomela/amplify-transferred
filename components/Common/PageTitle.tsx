import React, { FC, HTMLProps } from 'react'

const PageTitle: FC<HTMLProps<HTMLHeadingElement>> = (props) => (
  <h2 className="text-4xl font-medium" {...props} />
)

export default PageTitle
