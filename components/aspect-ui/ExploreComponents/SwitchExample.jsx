'use client'
import { Switch } from '../Switch'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const SwitchExample = () => {
  const [isSwitched, setIsSwitched] = useState(false)

  const handleSwitchChange = (checked) => {
    setIsSwitched(checked)
  }
  return (
    <div>
      <Switch checked={isSwitched}
        onChange={handleSwitchChange}
        activeSwitchIcon={<Moon />}
        deactiveSwitchIcon={<Sun />}
        switchIconEnabled={true}
        size='lg'
      />
    </div>
  )
}

export default SwitchExample