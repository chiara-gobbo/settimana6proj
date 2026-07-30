import { useState } from "react";
import data from "../data";
import Info from "./Info";
import Statistics from "./Statistics";
import type { Dev } from "../types/Dev";

import '../styles/SelectCard.css'
import '../styles/MediaQuery.css'


function SelectCard({idA, idB}:{idA:number, idB:number}) {
    const devA = data.find((dev) => dev.id == idA)!
    const devB = data.find((dev) => dev.id == idB)!

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