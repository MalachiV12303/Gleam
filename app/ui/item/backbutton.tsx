'use client'

import { useRouter } from 'next/navigation'
 
export default function BackButton() {
  const router = useRouter();
 
  return (
    <div className='fixed mt-20 md:mt-24 w-11/12 flex justify-end'>
      <button className={''} type="button" onClick={() => router.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
        </svg>
      </button>
    </div>
  )
}