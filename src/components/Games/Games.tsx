import Image from 'next/image'
import React from 'react'

const Games = ({ getData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="section-title">База игр</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {getData.map((item, index) => {
              return (
                <div key={index} className="w-full rounded-lg overflow-hidden bg-zinc-900">
                  <div className="w-full h-[430px]">
                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={320} height={250} className='w-full h-full object-cover object-center' />
                  </div>
                  <div className="w-full p-3">
                    <h3 className="text-white uppercase">{item.attributes?.name}</h3>
                    <ul className="flex flex-wrap gap-2 pt-2">
                      <li className="inline-flex text-blue-500">
                        жанр
                      </li>
                      <li className="inline-flex text-blue-500">
                        год выпуска
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games
