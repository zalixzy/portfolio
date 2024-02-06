"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';





  export default function Intro() {
    const { t } = useTranslation();
    return (
      <section id="Accueil" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] ">
          <div className="flex items-center justify-center ">
              <div className="">
                <motion.div 
                  initial ={{opacity:0, scale: 0}}
                  animate= {{opacity:1, scale:1}}
                  transition={{ type: "tween", duration: 0.2 }}
                  >
                  <Image
                    src="/moi.jpg"  alt="Thomas Travier" 
                    width="192" 
                    height="192" 
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full 
                    object-cover border-[0.25rem]
                    border-gray-200   shadow-xl"
                    />
                  </motion.div>  
                  
              </div>    
            
          </div>
          
          <motion.h1 className="text-gray-800  mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5]
           sm:text-2xl "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <span className="font-bold">
              Bonjour, Je m'appelle Thomas
              {/* {t('Hello, my name is Thomas')} */}
            </span>
            <br />
            {/* {t('I am a')} */}
            {" "}Je suis un{" "}
            <span className="font-bold">
              étudiant
              {/* {t('student')} */}
            </span>{" "}
            passionné par l'informatique
            {/* {t('passionate about computer science')} */}
          </motion.h1>
          <motion.div className="
          flex flex-col sm:flex-row items-center justify-center 
          gap-2 px-4 text-lg font-medium"
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.1}}
          >
            <Link className="group bg-gray-800 text-white px-7 py-1 flex items-center gap-2 
            rounded-full outline-none focus:scale-105 hover:scale-105
             hover:bg-gray-950 active:scale-105 transition border border-white/10
            " href="#Contact">Me contacter 

            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition translate-y-0.5" />
            </Link>

            <a className="group bg-gray-200 text-gray-950 px-7 py-1 flex items-center gap-2 
            rounded-full outline-none hover:scale-105 focus:scale-105
            hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10
            " href="/CV.pdf" download>Télécharger CV 
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition
            " />

            </a>
           
            <a className="bg-gray-800 text-gray-100 p-3 flex items-center gap-2 
            rounded-full hover:scale-105 focus:scale-105 
            hover:bg-gray-950 active:scale-105 transition border border-white/10 cursor-pointer "
            href="https://www.linkedin.com/in/thomas-travier-2502a7192/" target="_blank">
              <BsLinkedin />

            </a>
            <a className="bg-gray-200 text-gray-950 p-3 flex items-center gap-2  
            rounded-full hover:scale-105 focus:scale-105
            hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10"
            href="http://github.com/zalixzy" target="_blank">
              <FaGithubSquare />

            </a>

          </motion.div>
         
          <a className="block mx-auto bg-gray-200 text-gray-950 px-7 py-1 items-center gap-2 justify-center  
            rounded-full outline-none hover:scale-105 focus:scale-105 font-semibold text-center w-[17rem] h-[2.5rem]
            hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10 mt-8"
            href="/recommandation_f.pdf" download>
            Lettre de recommandation
          </a>

         

      </section>
    )
  }
