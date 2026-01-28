import Card from "@/components/general/card"

const ExplorePage = () => {
  return (
    <main>
      <div className='mt-10'>
        <h1 className='text-5xl font-semibold'>Explore Deals</h1>
        <p className='mt-4 text-muted-foreground text-lg'>
          Discover exclusive SaaS discounts available right now
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 mt-10">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}

export default ExplorePage
