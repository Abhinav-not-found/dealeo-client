"use client"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

// add micro interactions on hover

const Card = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push("/deal/123")}
      className='w-88 h-50 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4 border border-neutral-50 hover:border-neutral-200 hover:-translate-y-1 transition-all cursor-pointer group'
    >
      <Icon />
      <div className='space-y-1 mt-2'>
        <p className='text-xs text-muted-foreground'>Category</p>
        <h2 className='text-lg font-medium tracking-tight'>
          Figma Pro - 50% Off
        </h2>
        <p className='text-sm text-muted-foreground'>
          Design and collaboration platform for teams
        </p>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <div>
          <h3 className='font-medium'>50% Off</h3>
        </div>
        <button className='flex text-sm items-center gap-2 text-muted-foreground group-hover:text-black'>
          {" "}
          View details <ArrowRight className='size-4' />
        </button>
      </div>
    </div>
  )
}

const Icon = () => {
  return (
    <div className='bg-neutral-100 dark:bg-neutral-800 size-12 rounded-lg flex items-center justify-center text-2xl font-semibold text-muted-foreground'>
      T
    </div>
  )
}

export default Card
