import type { Dev } from "../types/Dev";
import Average from "./Average";
import '../styles/Statistics.css'
import '../styles/MediaQuery.css'

function Statistics({devA, devB}:{devA:Dev, devB:Dev}){
    const AavgBE = Number(Average({ subj: 'back-end', skills: devA.skills }))
    const AavgFE = Number(Average({ subj: 'front-end', skills: devA.skills }))
    const Aoverall = ((AavgBE + AavgFE) / 2).toFixed(1)

    const BavgBE = Number(Average({ subj: 'back-end', skills: devB.skills }))
    const BavgFE = Number(Average({ subj: 'front-end', skills: devB.skills }))
    const Boverall = ((BavgBE + BavgFE) / 2).toFixed(1)
    
    return(
        <section className="fin_container">
            <h2 className="title">Chi dovresti scegliere?</h2>
            <div className="final_box">
                {devA.skills.map((skill)=>{
                    const skillB=devB.skills.find((sk)=>sk.label==skill.label)!

                    return(
                        <div>
                            <div className="div" style={{borderLeft:'4px solid #973197'}}>Se vuoi il migliore in {skill.label}, scegli {(skill.value>skillB?.value)? `${devA.firstname} ${devA.lastname}` : `${devB.firstname} ${devB.lastname}`}.</div>
                        </div>
                    )
                })}
                <div className="div" style={{borderLeft:'4px solid #2ead08'}}>Per il front-end, scegli {(AavgFE>BavgFE)? `${devA.firstname} ${devA.lastname}` : `${devB.firstname} ${devB.lastname}`}.</div>

                <div className="div" style={{borderLeft:'4px solid #2ead08'}}>Per il back-end, scegli {(AavgBE>BavgBE)? `${devA.firstname} ${devA.lastname}` : `${devB.firstname} ${devB.lastname}`}.</div>

                <div className="div" style={{borderLeft:'4px solid goldenrod', fontWeight:'bold', backgroundColor:'#3b3939c2'}}>Complessivamente, scegli {(Aoverall>Boverall)? `${devA.firstname} ${devA.lastname}` : `${devB.firstname} ${devB.lastname}`}.</div>
            </div>
        </section>
    )
}

export default Statistics