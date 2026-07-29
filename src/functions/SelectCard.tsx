import { useState } from "react";
import data from "../data";
import Info from "./Info";
import Statistics from "./Statistics";
import type { Dev } from "../types/Dev";

import '../styles/SelectCard.css'
import '../styles/MediaQuery.css'


function SelectCard() {
    const [activeBtn, setActiveBtn] = useState<'A' | 'B'>('A')
    const [cardA, setCardA] = useState<number>(data[0].id)
    const [cardB, setCardB] = useState<number>(data[1].id)
    const [hover, setHover] = useState()

    const selectDev = (id: number) => {
        if (activeBtn == 'A') {
            setCardA(id)
            setActiveBtn('B')
        }
        else {
            setCardB(id)
            setActiveBtn('A')
        }
    }

    const devA = data.find((dev) => dev.id == cardA)!
    const devB = data.find((dev) => dev.id == cardB)!

    return (
        <>
            <section className="box">
                <Info dev={devA} letter="A" />
                <div className="vs">VS</div>
                <Info dev={devB} letter="B" />
            </section>
            <Statistics devA={devA} devB={devB} />
        </>
    )
}

export default SelectCard