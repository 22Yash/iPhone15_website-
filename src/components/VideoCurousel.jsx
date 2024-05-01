import React from 'react'
import {hightlightsSlides} from '../constants'

function VideoCurousel() {
  return (
    <>
    <div className='flex items-center '>
        {hightlightsSlides.map((list,i) =>(
            <div key={list.id} id="slider">
                <div className='video-carousel_container'></div>
                edffr </div>
        ))}
    </div>
    </>
  )
}

export default VideoCurousel
