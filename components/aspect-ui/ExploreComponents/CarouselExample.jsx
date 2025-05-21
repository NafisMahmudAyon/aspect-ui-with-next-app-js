import { Carousel, CarouselIndicators, CarouselItem, CarouselSlides } from '../Carousel'
import { NextButton } from '../Carousel'
import { PrevButton } from '../Carousel'

const CarouselExample = () => {
  return (
    <div className='w-full'>
      <Carousel className="w-full pb-0">
        <CarouselSlides className=''>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='flex-[0_0_100%]'>
              <div className="flex items-center justify-center rounded-md border border-gray-400/30 min-h-[200px]">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <div className='flex items-center justify-between gap-2 mt-4'>
          <PrevButton className='' />
          <CarouselIndicators className='flex-1 relative left-0 right-0 translate-x-0 justify-center' />
          <NextButton />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselExample