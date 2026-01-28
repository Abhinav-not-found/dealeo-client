import BackBtn from "@/components/btn/back-btn"
import ClaimBtn from "@/components/btn/claim-btn"

const DealDetailPage = () => {
  return (
    <div className='pt-2'>
      <BackBtn />
      <main className='flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-2/3 h-fit'>
          <Icon />
          <h1 className='text-3xl font-bold mt-4'>Figma Pro - 50% Off</h1>
          <Heading>About This Deal</Heading>
          <p className='text-muted-foreground mt-2'>
            Professional design and collaboration platform for teams of all
            sizes.
          </p>
          <Heading>Key Features</Heading>
          <ul className='list-disc list-inside text-muted-foreground mt-2'>
            <li>Real-time collaboration on designs and prototypes</li>
            <li>Access to premium templates and design assets</li>
            <li>Version control and design system management</li>
          </ul>
        </div>
        <div className='w-full md:w-1/3 h-fit p-4'>
          <div className="text-center md:text-left mt-5 md:mt-0">
            <p className='text-sm text-muted-foreground'>You will save</p>
            <h2 className='text-3xl font-bold mt-2'>50% - Off</h2>
            <ClaimBtn isAuthenticated={false}/>
          </div>
          <div className='mt-8 grid grid-cols-2 md:grid-cols-1 row-auto gap-y-4'>
            <Item name='Category' value='Design' />
            <Item name='Valid Until' value='Dec 31, 2025' />
            <Item name='Claimed By' value='234 startups' />
          </div>
        </div>
      </main>
      <section>
        <Heading>What's Included</Heading>
        <Heading>Eligibility requirements</Heading>
      </section>
    </div>
  )
}
const Icon = () => {
  return (
    <div className='bg-neutral-100 dark:bg-neutral-800 size-20 rounded-xl flex items-center justify-center text-3xl font-semibold text-muted-foreground mt-8'>
      T
    </div>
  )
}

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className='text-xl font-semibold mt-4'>{children}</h2>
}

const Item = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className='w-full h-full flex gap-4 items-center'>
      <div className='size-12 rounded-md bg-neutral-100 dark:bg-neutral-800'></div>
      <div>
        <p className='text-xs text-muted-foreground'>{name}</p>
        <p className='font-medium'>{value}</p>
      </div>
    </div>
  )
}

export default DealDetailPage
