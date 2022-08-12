import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Country = ({ country }) => {

  const { flags: { svg }, name: { common }, population, region, capital, cca3 } = country

  return (
    <Link href={`country/${cca3}`}>
      <div className='max-w-[300px] min-h-[340px] m-auto mb-[5rem] shadow-custze hover:cursor-pointer dark:bg-[#2b3945]'>
        <div>
          <Image src={svg} alt={`flag ${common}`} priority='true' width={350} height={200} className='object-cover' />
          <div className='mt-4 ml-6 mr-6'>
            <h2 className='mb-2 text-[1.3rem] font-bold line-clamp-1'>{common}</h2>
            <p className='font-semibold'>Population: <span className='font-light'>{population.toLocaleString('en-US')}</span></p>
            <p className='font-semibold'>Region: <span className='font-light'>{region}</span></p>
            <p className='font-semibold'>Capital: <span className='font-light'>{capital}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Country