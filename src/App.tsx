import { useState } from 'react'
import './App.css'
import './styles/MediaQuery.css'

import data from './data'

import Card from './functions/Card'
import SelectCard from './functions/SelectCard'

function App() {
  const [activeBtn, setActiveBtn] = useState<'A' | 'B'>('A')
  const [cardA, setCardA] = useState<number>(data[0].id)
  const [cardB, setCardB] = useState<number>(data[1].id)

  const selectDev = (id: number) => {
    if (activeBtn === 'A') {
      setCardA(id)
      setActiveBtn('B')
    }
    else {
      setCardB(id)
      setActiveBtn('A')
    }
  }

  return (
    <>
      <header>
        <h1><span className='title_blue'>DEV</span>WARS</h1>
        <div>Seleziona due sviluppatori, confronta le loro competenze e scopri quale scegliere per il tuo progetto.</div>
      </header>
      <body>
        <section className='hero'>
          <div className='btns'>
            <button className={(activeBtn === 'A') ? 'btnA activeb' : 'btnA'} onClick={() => setActiveBtn('A')}>Seleziona Dev A</button>
            <button className={(activeBtn === 'B') ? 'btnB activered' : 'btnB'} onClick={() => setActiveBtn('B')}>Seleziona Dev B</button>
          </div>
          <section className='cards'>
            {data.map((dev) => (
              <Card dev={dev} key={dev.id} selectDev={selectDev} selectedType={
                cardA === dev.id ? "A" :
                  cardB === dev.id ? "B" :
                    null
              }
              />
            ))}
          </section>
        </section>
        <SelectCard idA={cardA} idB={cardB} />
      </body>
    </>
  )
}

export default App
