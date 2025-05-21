import { CircularProgressBar } from '../CircularProgressBar'
import React from 'react'

const CircularProgressBarExample = () => {
  return (
    <div>
      <CircularProgressBar value={75} onVisible={true} duration={2} />
    </div>
  )
}

export default CircularProgressBarExample