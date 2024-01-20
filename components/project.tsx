
import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './projects';


export default function Projects() {
  return (
    <section id="Projets" className="scroll-mt-28 mb-28">
        <SectionHeading>Mes projets</SectionHeading>
        <div>
          {
            projectsData.map((project, index) =>(
              <React.Fragment key={index}>
              <Project {...project}/>
              </React.Fragment>
            ))

            
          }
        </div>

    </section>
  )
}

