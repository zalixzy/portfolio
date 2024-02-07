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

        <p className="mb-3">
            Après plusieurs expériences professionnelles{" "}
            , j'ai décidé de poursuivre <span className="font-medium">ma passion</span>{" "}
            pour la programmation et l'informatique. J'ai rejoint le BTS SIO Cybersécurité option Mathématiques Approfondies en 2022{" "}
            <span className="font-medium">(Solutions logicielles et Applications métiers)</span>.{" "}
            <span className="italic">Ce que je préfère dans ces domaines</span> sont leur vaste champ d'applications
            et les nombreux services qui leurs sont liés <span className="underline">mais aussi</span> les innombrables
            façons différentes de parvenir à résoudre une même problématique. 
                {" "}
            <span className="font-medium">
            PHP, C#, JavaScript  {" "}
            </span>
            sont pour le moment les langages que je maîtrise le mieux.
            J'ai déjà pu travailler avec Typescript, GO et suis toujours curieux de 
            découvrir de nouvelles technologies permettant d'ajouter des cordes à mon arc.
            Je cherche actuellement une{" "}
            <span className="font-medium">école d'ingénieur ou équivalent bac+3</span> en technologies de l'information pour la santé ou informatique pour la santé.
        </p>
        <p className="mb-3">
            <span className="italic">Dans mon temps libre</span>, j'aime faire de la randonnée, 
            m'intéresser à la géopolitique, la finance et passer du temps avec mes proches. J'aime aussi{" "}
            <span className="font-medium">apprendre de nouvelles choses car tout m'interesse ( en ce moment je me documente sur l'impression 3D )</span>. Je participe également en tant que bénévole pour l'association{" "}
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
