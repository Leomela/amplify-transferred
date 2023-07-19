import React, { createContext, useContext } from 'react'
import { Issue } from '../../types/entities'

export type IssueContextType = {
  issue: Issue
  setIssue: React.Dispatch<React.SetStateAction<Issue>>
}

const IssueContext = createContext<IssueContextType | undefined>(undefined)

export const useIssueContext = () => {
  const issueContext = useContext(IssueContext)
  if (!issueContext) {
    throw new Error(
      'useIssueContext must be used within the IssueContext.Provider'
    )
  }
  return issueContext
}

export default IssueContext
