import data from "../data";
import type { Dev } from "../types/Dev";
import type { Skill } from "../types/Skill";

import '../styles/Card.css'

function Card({ dev }: { dev: Dev }) {
    return (
        <div className="card">
            <div className="lil_img" style={{backgroundImage: `url(${dev.imageUrl})` }}></div>
            <div className="lil_name">{dev.firstname} {dev.lastname}</div>
        </div>
    )
}

export default Card