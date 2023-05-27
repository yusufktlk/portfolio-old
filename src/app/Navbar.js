import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { faSpotify} from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  return (
        <>
        <div className='absolute left-5 top-5 inline-block w-40 h-14 text-3xl p-2 hover:scale-110 duration-300 bg-fuchsia-950  text-black text-center font-mono font-bold rounded-2xl '
        >
          <Link className='underline' href={"/projects"}>Projects</Link>
          
        </div>

        <div>
        <a className='absolute right-5 top-5' target='_blank' href='https://open.spotify.com/user/yusufkuchiki'> <FontAwesomeIcon className=' text-7xl text-green-600 transition ease-in-out duration-500 hover:scale-125 ' icon={faSpotify} /></a>
        </div>
        </>
  )
}

export default Navbar