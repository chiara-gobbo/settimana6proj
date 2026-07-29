import { useState } from 'react'
import './App.css'
import './styles/MediaQuery.css'

import data from './data'

import type { Dev } from './types/Dev'
import type { Skill } from './types/Skill'

import Card from './functions/Card'
import SelectCard from './functions/SelectCard'

function App() {

  return (
    <>
      <header>
        <h1><span className='title_blue'>DEV</span>WARS</h1>
        <div>Seleziona due sviluppatori, confronta le loro competenze e scopri quale scegliere per il tuo progetto.</div>
      </header>
      <body>
        <section className='hero'>
            <div className='btns'>
              <button className='btnA'>Seleziona Dev A</button>
              <button className='btnB'>Seleziona Dev B</button>
            </div>
            <section className='cards'>
              {data.map((dev)=>(
                  <Card dev={dev} key={dev.id}/>
              ))}
            </section>
        </section>
        <SelectCard/>
      </body>
    </>
  )
}

export default App
