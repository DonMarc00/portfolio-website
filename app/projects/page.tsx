import React from 'react';
import dynamic from 'next/dynamic';

const Custom3dCard = dynamic(() => import('@/components/sub/custom-3d-card'), { ssr: false });

export default function page() {
  return (
    <main className='h-full w-full'>
    <div className='flex flex-row justify-center flex-wrap pt-20'>
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
      <Custom3dCard 
      title='Demo'
      body='This is a 3d card wow!'
      src='/NextWebsite.png' />  
    </div>
    </main>
  )
}
