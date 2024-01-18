"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

import { useTranslation } from 'react-i18next';
import Link from 'next/link';


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
          
          <motion.p className="text-gray-950  mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5]
           sm:text-2xl "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <span className="font-bold">
              Bonjour, Je m'appelle Thomas
              {/* {t('Intro1')} */}
            </span>
            <br />
            {/* {t('Intro2')} */}
            {" "}Je suis un{" "}
            <span className="font-bold">
              étudiant
              {/* {t('Intro3')} */}
            </span>{" "}
            passionné par l'informatique
            {/* {t('Intro4')} */}
          </motion.p>
          <div>
            <Link className="bg-gray-950 text-white px-7 py-3 flex items-center gap-2 
            rounded-full
            " href="#contact">Me contacter <BsArrowRight />
            </Link>
            <a className="bg-gray-200 text-gray-950px-7 py-3 flex items-center gap-2 
            rounded-full
            ">Télécharger CV <HiDownload />
            </a>
            <a className="bg-gray-950 text-gray-100 p-4 flex items-center gap-2 
            rounded-full">
              <BsLinkedin />

            </a>

          </div>

         

      </section>
    )
  }
