import type { Skill } from "../types/Skill";

function Average({subj, skills}:{subj:string;skills:Skill[]}){
    let sum=0
    const filtered:Skill[]=skills.filter((skill:Skill)=>skill.type==subj)

    filtered.forEach((mark)=>sum+=mark.value)

    return Number((sum/filtered.length).toFixed(1))  
}

export default Average