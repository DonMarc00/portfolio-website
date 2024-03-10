"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '@/components/sub/3d-card';
import Link from 'next/link';

interface Custom3dCardProps {
    title: string;
    body: string;
    src: string;
  }
  

const Custom3dCard = ({title, body, src}: Custom3dCardProps) => {
  useEffect(() => {}, [])
  return (
    <CardContainer className="inter-var">
        <CardBody className="card-body  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-[#422f67] border-[#2A0E61] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border m-2 ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {body}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white dark:text-white"
            >
              <Link href={'/projects/flutter'}>
              Try now →
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
  )
}

export default Custom3dCard