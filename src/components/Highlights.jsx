import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

function Highlights() {
  useGSAP(() => {
  gsap.to('#title')
  },[])
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
     <div>
      <h1 id='title' className='section-heading'></h1>
     </div>
    </section>
  )
}

export default Highlights
