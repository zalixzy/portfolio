"use client";
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id ="A propos">

        <SectionHeading>A propos de moi</SectionHeading>

        <p className="mb-3 opacity-100 ">
            Je recherche actuellement une{" "}
            <span className="font-medium">école d'ingénieur ou équivalent bac+3</span> en technologies de l'information pour la santé, génie biomédical et santé ou informatique.
        </p>
        <p className="mb-3">
            <span className="italic">Dans mon temps libre</span>, j'aime faire de la randonnée, 
            m'intéresser à la géopolitique, la finance et passer du temps avec mes proches. J'aime aussi{" "}
            <a href="https://www.youtube.com/watch?v=FxfTaQOJHsA" target="_blank" className="font-medium text-blue-400 hover:text-gray-800">apprendre de nouvelles choses car tout m'interesse</a><span className="font-medium"> ( en ce moment je me documente sur l'impression 3D, le traitement d'image avec Matlab et la photométrie )</span>. Je participe également en tant que bénévole pour l'association{" "}
            <span className="font-medium">les Blouses Roses de Nîmes.</span> Enfin, je cherche chaque jour à devenir une meilleure 
            version de moi-même et donner du sourire autour de moi. 
        </p>
        <p className="mb-3">
            Je compte tout mettre en œuvre pour à terme devenir <span className="font-medium">Chef de projet 
            , Ingénieur Biomédical ou Ingénieur en imagerie médicale</span>.
        </p>
    </motion.section>
  )
}
