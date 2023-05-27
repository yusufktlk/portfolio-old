import Link from 'next/link'
import React from 'react'
import Card from '../../../public/components/Card'

function page() {
  return (
    <>
    <div className='absolute right-5 top-5 inline-block w-40 h-14 text-3xl p-2 hover:scale-110 duration-300 bg-fuchsia-950 text-black text-center font-mono font-bold rounded-full'
    >
      
      <Link className='underline ' href={"/"}>Home</Link>
    </div>
    
    <div className='text-center pt-10 pb-6 text-5xl shadow-lg shadow-fuchsia-950 font-mono '>
    Featured Projects
    </div>

    <div className='flex flex-col pt-6 p-44 m-5 text-fuchsia-900 pb-0'>
      <Card 
        img= "/covid.png"
        title = "Covid19 Turkey Datas"
        desc = "This application helps us to see the Covid 19 statistics in Turkey. I specified the start and end date. You can see the number of tests, the number of cases and the number of deaths on the desired date."
        link = "https://covid19-datas-reactjs.netlify.app/"
      />
      <Card />

      <Card 
        img= "/weather.png"
        title = "Weather App"
        desc = "This app helps you see the weather in your desired location. I did it via OpenWeather API. It shows how many degrees the air is in degrees, the minimum and maximum temperature range and weather information (sunny, cloudy, rainy) during the day."
        link = "https://yusufktlk-weatherjs.netlify.app/"

      />
      <Card />

      <Card 
        img= "/got.png"
        title = "Game of Thrones Quotes"
        desc = "I made a random quote application because I love the Game of Thrones series. Each time you press the New Quote button, it prints a random sentence from a random character from the string to the screen."
        link = "https://gameofthrones-random-quotes.netlify.app/"
      />
      <Card />

      <Card 
        img= "/todo3.png"
        title = "ToDo App"
        desc = "Of course, indispensable for projects and my first project todo app. You can add whatever you want to the to-do list, cross it out and delete it with 2 clicks."
        link = "https://yusufktlk.github.io/todolist/"
      />
      <Card />
    </div>

    </>
  )
}

export default page