import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';


export default function Projects() {
  return (
    <section>
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

type ProjectProps = (typeof projectsData)[number];


function  Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps){
  return <section className="bg-gray-100 border border-black/5 max-w-[42rem] overflow:hidden
  sm:pr-8">
    <h3>{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul>
      {tags.map((tag,index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>

    <Image src={imageUrl} alt={title} width={300} height={200} quality={95}  />

  </section>
}
