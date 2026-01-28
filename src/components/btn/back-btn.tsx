'use client'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const BackBtn = () => {
  const router = useRouter()
  return (
    <Button onClick={()=>router.back()} variant={'ghost'}>
      <ArrowLeft/>
      Back to Explore
    </Button>
  )
}

export default BackBtn
