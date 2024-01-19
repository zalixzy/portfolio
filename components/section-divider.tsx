"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className="bg-gray-800 my-20 h-14 w-1 rounded-full hidden sm:block"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.0125}}
    ></motion.div>
  )
}
