"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { useTranslation } from 'react-i18next';


  export default function Intro() {
    const { t } = useTranslation();
    return (
      <section>
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
          
          <motion.p className="text-white text-center"
          initial ={{opacity:0, scale: 0}}
          animate= {{opacity:1, scale:1}}>
            <div>
              <span className="font-bold">Bonjour, Je m'appelle Thomas
                {/* {t('Intro1')} */}
              </span>
            </div> 
            <div>
            {/* {t('Intro2')} */}
            Je suis un{" "}
              <span className="font-bold">étudiant
                {/* {t('Intro3')} */}
              </span>  passionné par l'informatique
              {/* {t('Intro4')} */}
            </div>
          </motion.p>
         

      </section>
    )
  }
