import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'


export default function Skills() {
  return (
    <section id="Compétences" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>Mes compétences</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                skillsData.map((skill, index) =>( 
                    <li className="bg-white border boder-black/10 rounded-xl hover:text-sky-200 hover:bg-gray-800 
                    px-5 py-3" key={index}>{skill}</li>

            ))}
        </ul>
    </section>
  )
}
