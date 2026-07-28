import type { Skill } from "./Skill"

export type Dev={
    id: number,
    imageUrl: string,
    firstname: string,
    lastname: string,
    birthDate: string,  //tipo aaaa-mm-dd
    gender: 'm' | 'f' | 'unknown',
    skills: Skill[]
}