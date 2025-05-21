'use client'
import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '../Avatar'
import { useEffect, useState } from 'react'

// https://localhost:3000/examples/data/components/avatar/avatar-group
const AvatarExample = () => {
  const [avatarData, setAvatarData] = useState([])
  useEffect(() => {
    const data = async () => {
      const res = await fetch('https://api.nafisbd.com/api/person?limit=6')
      const data = await res.json()
      setAvatarData(data.data)
    }
    data()
  }, [])
  return (
    <div className='w-full flex justify-center'>
      <AvatarGroup>
        {avatarData.map((item, index) => (
          <Avatar key={index} className='border'>
            <AvatarImage
              src={item.avatar}
              altText={item.first_name}
            />
            <AvatarBadge status='success' iconEnabled />
          </Avatar>
        ))}
      </AvatarGroup>
    </div>
  )
}

export default AvatarExample