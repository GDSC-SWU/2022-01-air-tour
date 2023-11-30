import React, { useState, useEffect } from "react"
import ContentLoader from "react-content-loader"

const PackageLoader = (props) => {
  const [VWIDTH, setVWIDTH] = useState(0)
  const GRID_COLUMNS = 4 // WIP: needs to be responsive
  const COLUMN_GAP = 24
  const TOTAL_PADDING = 80 * 2 // WIP: needs to be responsive

  const onWindowResized = () => {
    setVWIDTH((document.documentElement.clientWidth - TOTAL_PADDING - COLUMN_GAP * (GRID_COLUMNS-1)) / GRID_COLUMNS)
  }

  useEffect(() => {
    onWindowResized()
    window.addEventListener('resize', onWindowResized)
    return () => window.removeEventListener('resize', onWindowResized)
  }, [])

  return (
    <ContentLoader 
      speed={2}
      width={VWIDTH}
      height={VWIDTH+21+91}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="12" ry="12" width={VWIDTH} height={VWIDTH*0.95} /> 
      <rect x="0" y={VWIDTH*0.95+15} rx="4" ry="4" width="180" height="19" /> 
      <rect x="0" y={VWIDTH*0.95+17+19} rx="4" ry="4" width="130" height="19" /> 
      <rect x="0" y={VWIDTH*0.95+19+38} rx="4" ry="4" width="111" height="19" /> 
      <rect x="0" y={VWIDTH*0.95+21+63} rx="4" ry="4" width="96" height="19" /> 
      <rect x={VWIDTH-50} y={VWIDTH*0.95+15} rx="4" ry="4" width="50" height="19" />
    </ContentLoader>
  )
}

export default PackageLoader

