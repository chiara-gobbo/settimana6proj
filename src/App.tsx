import { useState } from 'react'
import './App.css'

import data from './data'

import type { Dev } from './types/Dev'
import type { Skill } from './types/Skill'

import Card from './functions/Card'

function App() {
  

  return (
    <>
      <header>
        <h1><span className='title_blue'>DEV</span>WARS</h1>
        <div>Seleziona due sviluppatori, confronta le loro competenze e scopri quale scegliere per il tuo progetto.</div>
      </header>
      <body>
        <section className='hero'>
            <div>
              <button>Seleziona Dev A</button>
              <button>Seleziona Dev B</button>
            </div>
            <section className='cards'>
              {data.map((dev)=>(
                  <Card dev={dev}/>
              ))}
            </section>
        </section>
      </body>
    </>
  )
}

export default App
