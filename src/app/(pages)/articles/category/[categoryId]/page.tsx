"use client";
import useArticleByCategory from '@/Hooks/useArticleByCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

export default function page({ params }) {

    const getArticles = useArticleByCategory(params.categoryId);

    return (
        <section className='w-full py-12'>
            <div className="container mx-auto">
                <div className="w-full flex flex-col gap-10">
                    <h2 className='section-title'>НАши новости</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {getArticles.map((item, index) => {
                            return (
                                <>
                                    <div className="w-full h-[360px] relative rounded-lg overflow-hidden">
                                        <span className="py-1 px-2 absolute left-2 top-2 rounded-md bg-red-600/70 backdrop-filter text-sm font-medium text-white uppercase">{item?.attributes?.category?.data.attributes?.name}</span>
                                        <div className="absolute left-2 right-2 bottom-2">
                                            <div className="w-full p-5 rounded-2xl bg-zinc-800 flex justify-between gap-5">
                                                <h3 className="text-xl">{item?.attributes?.name.length > 55 ? item?.attributes?.name.slice(0,55) + '...' : item?.attributes?.name}</h3>
                                                <Link href={'/articles/' + item.id} className='aspect-square h-[50px] rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center'>
                                                    <FaAngleRight className='font-medium' />
                                                </Link>
                                            </div>
                                        </div>
                                        <Image className='w-full h-full object-cover object-center' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + ((item?.attributes?.image?.data.attributes?.url ?? ''))} alt={item?.attributes?.name} width={240} height={320} />
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}
