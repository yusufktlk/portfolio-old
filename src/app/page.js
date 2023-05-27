import Image from 'next/image'
import yusuf from '../app/yusuf.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { faTwitter, faGithub, faLinkedin, faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Navbar from "./Navbar"

export const metadata = {
  title: 'Yusuf Kıtlık',
};

 


export default function Home() {
  return (
    <main className=" bg-black font">

      <Navbar />
      
      <div className=' flex flex-col space-y-5 space-x-5 p-5 w-80 m-auto justify-center'>
        <Image className='rounded-full ml-10 hover:scale-110 duration-500'
          src={yusuf}
          width={200}
          height={200}
          alt="Coding with Yusuf"
        />

        <div>
            <div className='text-3xl bg-yellow-200 text-black font-mono font-bold inline-block rounded-sm m-5 p-1 '>Yusuf Kıtlık</div><br/>
            <div className='text-2xl font-mono text-black bg-yellow-200 inline-block rounded-sm p-1 '>Frontend Developer</div>
        </div>

        <div className='flex justify-between flex-1 mr-6 pt-5'>
          <a href='https://twitter.com/YKtlk' target='_blank'> <FontAwesomeIcon className=' text-5xl text-blue-400 transition ease-in-out duration-500 hover:-translate-y-5' icon={faTwitter} /></a>
          <a href='https://github.com/yusufktlk' target='_blank'> <FontAwesomeIcon className='text-5xl text-white transition ease-in-out duration-500 hover:-translate-y-5' icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/yusuf-kıtlık' target='_blank'> <FontAwesomeIcon className='text-5xl text-blue-400 transition ease-in-out duration-500 hover:-translate-y-5' icon={faLinkedin} /></a>
        </div>

        </div>
        <div className="inline-flex flex-col items-center justify-center w-full">
            <hr className="w-96 h-px  border-0 dark:bg-yellow-100" />
            <p className='mt-5 font-mono text-lg w-2/4 text-center'>I am studying for a B.S. in Management Information Systems in the Antalya Belek University of Turkey. I expect to graduate in Spring, 2024.</p>
            <button className='mt-5 text-xl font-bold underline cursor-default' >Tech I use</button>
        </div>
        
        <div className='flex flex-row justify-center ml-5 pt-5 text-6xl '>
          <a href='#' className='mr-10 cursor-default text-orange-500 transition ease-in-out duration-400 hover:scale-125 duration-500'> <FontAwesomeIcon icon={faHtml5} /></a>
          <a href='#' className='mr-5 cursor-default text-blue-400 transition ease-in-out duration-400 hover:scale-125 duration-500'> <FontAwesomeIcon icon={faCss3} /></a>
          <a href='#' className='ml-5 cursor-default text-yellow-300 transition ease-in-out duration-400 hover:scale-125 duration-500'> <FontAwesomeIcon icon={faJs} /></a>
          <a href='#' className='ml-10 cursor-default text-blue-400 transition ease-in-out duration-400 hover:scale-125 duration-500'> <FontAwesomeIcon icon={faReact} /></a>
        </div>
        
        
    </main>
  )
}
