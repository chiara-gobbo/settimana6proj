import type { Dev } from "../types/Dev";
import Average from "./Average";
import Subj from "./Subj";
import '../styles/Info.css'

function Info({ dev, letter }: { dev: Dev; letter: string }) {
    const genderDev = (g: string): string => {
        if (g == 'm') return 'Maschile'
        if (g == 'f') return 'Femminile'
        return 'Sconosciuto'
    }

    const avgBE = Average({ subj: 'back-end', skills: dev.skills })
    const avgFE = Average({ subj: 'front-end', skills: dev.skills })
    const overall = ((avgBE + avgFE) / 2).toFixed(1)

    return (
        <div className="Info" style={{border: (letter=='B')? '2px solid rgb(230, 26, 53)' : ''}}>
            <div className="img" style={{ backgroundImage: `url(${dev.imageUrl})` }}>
                <div className="btn_dev" style={{backgroundColor: (letter=='B')? 'rgb(230, 26, 53)' : ''}}>DEV {letter}</div>
                <div className="personalDtls">
                    <h2 className="big_Name">{dev.firstname} {dev.lastname}</h2>
                    <div className="birth_gender">
                        <div>Nato/a il {dev.birthDate}</div>
                        <div>Genere: {genderDev(dev.gender)}</div>
                    </div>
                </div>
            </div>

            <section className="scores">
                <div className="score">
                    <div className="type">FRONT-END</div>
                    <div className="mark">{avgFE}</div>
                </div>
                <div className="score">
                    <div className="type">BACK-END</div>
                    <div className="mark">{avgBE}</div>
                </div>
                <div className="score">
                    <div className="type">OVERALL</div>
                    <div className="mark">{overall}</div>
                </div>
            </section>
            <Subj dev={dev} />
        </div>
    )
}

export default Info