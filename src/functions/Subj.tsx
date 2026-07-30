import type { Dev } from "../types/Dev";
import '../styles/Subj.css'

function Subj({ dev }: { dev: Dev }) {
    return (
        <div className="container">
            {dev.skills.map((skill) => (
                <div className="rect">
                    <section>
                        <section className="horiz spacebetween">
                            <div className="horiz">
                                <div className="subj_name">{skill.label}</div>
                                <div className="subj_type">{skill.type}</div>
                            </div>
                            <div className="subj_name">{skill.value}/100</div>
                        </section>
                    </section>
                    <div className="bar_box">
                        <div className="longBar">
                            <div className="bar" style={{width: `${skill.value}%`, backgroundColor: (skill.type == 'front-end') ? '#973197' : '#2ead08' }}></div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Subj