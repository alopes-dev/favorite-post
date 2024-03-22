'use client'

import { MdGpsFixed } from 'react-icons/md'
import { useMap } from '../hooks/useMap'

export const MyLocation = () => {
  const { handleCenterToUserCoords } = useMap()

  return (
    <button
      className="fixed top-36 right-4 z-[1000] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md text-blue-500"
      onClick={handleCenterToUserCoords}
    >
      <MdGpsFixed size={30} />
    </button>
  )
}
