"use client";

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Button } from './ui/button';

type ProjectProps = (typeof projectsData)[number];


 export default function  Project({
  title,
  description,
  tags,
  imageUrl,
  redirect
}: ProjectProps){

  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    if( redirect.endsWith("jpg") || redirect.endsWith("png" )){
      window.open(redirect, '_blank');
      
    }else{
      // if (redirect !== "") {
      //   // Affiche la boîte de dialogue
      //   setShowDialog(true);
      // }
      setShowDialog(true);
  
    }
    
  };

  const handleConfirm = () => {
    // Redirection si l'utilisateur clique sur "Oui"
    window.open(redirect, '_blank');
    // Ferme la boîte de dialogue
    setShowDialog(false);
  };
  const handleCancel = () => {
    // Ferme la boîte de dialogue si l'utilisateur clique sur "Non"
    setShowDialog(false);
  };

  return <motion.section 
  className="group bg-gray-100 border rounded-t-lg border-black/5 max-w-[45rem] 
  sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
    group-even:ml-[18rem]">
    <h3 className="font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag,index) => (
        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
        text-white rounded-full" key={index}>{tag}</li>
      ))}
    </ul>
    </div>
    {showDialog && (
        <div className="dialog fixed inset-0 z-20 backdrop-blur-md bg-slate-50 dark:bg-slate-800 bg-opacity-25 dark:bg-opacity-25 flex flex-col items-center justify-center select-none">
           <div className='  max-w-3xl z-30 p-5 drop-shadow-lg'>
              <div className=' w-[18rem] h-[10rem] mb-5 items-center justify-between p-4 rounded-lg bg-sky-100 dark:bg-slate-800'>
                <h2 className='place-self-start font-semibold font-handwriting self-start py-5 px-4'>Voulez-vous être redirigé ?</h2>
                    <div className="px-12 space-y-2 space-x-5 ">
                      <Button onClick={handleConfirm}>Oui</Button>
                      <Button onClick={handleCancel}>Non</Button>
                    </div>
              </div>
          </div>
        </div>
      )}
    

    <Image onClick={handleClick} className="absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl  
    group-even:-right-[initial] transition 
    group-hover:-translate-x-3 group-hover:scale-[1.04]
    group-hover:translate-y-3 group-hover:-rotate-2 group-even:right-[initial]
    group-even:-left-40 

    group-even:group-hover:translate-y-3
    group-even:group-hover:translate-x-3
    group-even:group-hover:rotate-2
    " 
    src={imageUrl} alt={title}  quality={95} style={{cursor: 'pointer'}}  />

  </motion.section>
}
