import { Artist } from '../../types/entities'
import { createContext, useContext } from 'react'

export type ArtistContextType = {
  artist: Artist
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

export const useArtistContext = () => {
  const artistContext = useContext(ArtistContext)
  if (!artistContext) {
    throw new Error(
      'useArtistContext must be used within the ArtistContext.Provider'
    )
  }
  return artistContext
}

export default ArtistContext
