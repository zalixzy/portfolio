"use client";

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import React, {useRef} from 'react'
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];


 export default function  Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps){

 

  return <motion.section 
  className="group bg-gray-100 border rounded-t-lg border-black/5 max-w-[42rem] 
  sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
    group-even:ml-[18rem]">
    <h3>{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag,index) => (
        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
        text-white rounded-full" key={index}>{tag}</li>
      ))}
    </ul>
    </div>
    

    <Image className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
    group-even:-right-[initial] transition 
    group-hover:-translate-x-3 group-hover:scale-[1.04]
    group-hover:translate-y-3 group-hover:-rotate-2 group-even:right-[initial]
    group-even:-left-40 

    group-even:group-hover:translate-y-3
    group-even:group-hover:translate-x-3
    group-even:group-hover:rotate-2
    " 
    src={imageUrl} alt={title}  quality={95}  />

  </motion.section>
}
