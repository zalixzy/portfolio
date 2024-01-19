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
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
          <div className="flex items-center justify-center">
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
                    object-cover border-[0.35rem]
                    border-white   shadow-xl"
                    />
                  </motion.div>  
                  
              </div>    
            
          </div>
          
          <motion.p className="text-gray-800  mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5]
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
          </motion.p>
          <motion.div className="
          flex flex-col sm:flex-row items-center justify-center 
          gap-2 px-4 text-lg font-medium"
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.1}}
          >
            <Link className="bg-gray-800 text-white px-7 py-1.5 flex items-center gap-2 
            rounded-full outlin-none focus:scale-105 hover:scale-105
             hover:bg-gray-950 active:scale-105 transition
            " href="#contact">Me contacter <BsArrowRight />
            </Link>
            <a className="bg-gray-200 text-gray-950 px-7 py-1.5 flex items-center gap-2 
            rounded-full 
            ">Télécharger CV <HiDownload />
            </a>
            <a className="bg-gray-800 text-gray-100 p-4 flex items-center gap-2 
            rounded-full ">
              <BsLinkedin />

            </a>
            <a className="bg-gray-200 text-gray-950 p-4 flex items-center gap-2  
            rounded-full ">
              <FaGithubSquare />

            </a>

          </motion.div>

         

      </section>
    )
  }
