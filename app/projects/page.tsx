import React from 'react';
import dynamic from 'next/dynamic';
import { RxArrowLeft } from 'react-icons/rx';
import Link from 'next/link';

const Custom3dCard = dynamic(() => import('@/components/sub/custom-3d-card'), { ssr: false });

export default function page() {
  return (
    <div className='h-full w-full'>
    <div className='flex flex-row justify-center flex-wrap pt-20'>
      <Link href={'/projects/flutter'}>
      <Custom3dCard 
      title='Project H²O'
      body='An app that helps you stay hydrated and healthy.'
      src='/ph20.webp' />
      </Link>
      <Link href={'/projects/homelab'}>
        <Custom3dCard
        title='Homelab'
        body='My personal homelab setup where I host my services.'
        src='/homelab.jpg' />
      </Link>
      <Link href={'/projects/website'}>
        <Custom3dCard
        title='Website'
        body='Portfolio website built with Next.js and TailwindCSS.'
        src='/website.png' />
      </Link>
      <Link href={'/projects/donut'}>
        <Custom3dCard
        title='AI/ML Donut'
        body='A transformer model for document understanding.'
        src='/donut.png' />
      </Link>
      <Link href={'/projects/editor'}>
        <Custom3dCard
        title='Vue Editor'
        body='My latest enterprise project that enables collaboration.'
        src='/editor.png' />
      </Link>
      <Link href={'/projects/wip'}>
        <Custom3dCard
        title='Work in progress'
        body='Who knows what will be here next?'
        src='/wip.webp' />
      </Link>  
    </div>
    </div>
  )
}
