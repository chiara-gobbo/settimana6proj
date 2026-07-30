import type { Dev } from "../types/Dev";

import '../styles/Card.css'

function Card({ dev, selectDev, selectedType }: { dev: Dev, selectDev: (id: number)=>void, selectedType: 'A'|'B'|null}) {

    return (
        <div className={
            selectedType === "A"
            ? "card selectedA"
            : selectedType === "B"
            ? "card selectedB"
            : "card"
        } onClick={()=>selectDev(dev.id)}>
            <div className="lil_img" style={{backgroundImage: `url(${dev.imageUrl})` }}>
                {selectedType && (
                <div className={
                    selectedType==='A'?'badge badgeA':'badge badgeB'
                }>{selectedType==='A'?'A':'B'}</div>
            )}
            </div>
            <div className="lil_name">{dev.firstname} {dev.lastname}</div>
        </div>
    )
}

export default Card