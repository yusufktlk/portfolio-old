import React from 'react'

function Card(props) {
  return (
    
          <div className='text-center bg-purple-400 flex'>
            <a href={props.link}><img className='rounded-full hover:scale-110 duration-500' src={props.img} /></a>
            <div className='ml-5'>
              <div className='pt-5 text-3xl font-mono underline pb-4'>{props.title}</div>
              <div className='p-2 font-mono text-sm pt-5 ml-5' >{props.desc}</div>
            </div>
           
          </div>
  )
}

export default Card