import React, { FC, HTMLProps } from 'react'

const Link: FC<HTMLProps<HTMLAnchorElement>> = (props) => (
  <a className="text-apnea-dive" {...props} />
)

export default Link
