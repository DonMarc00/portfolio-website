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
      title='Demo'
      body='This is a 3d card wow!'
      src='/ph20.webp' />
      </Link>
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />  
    </div>
    </div>
  )
}
