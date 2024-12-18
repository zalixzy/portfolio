"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';


const About: React.FC = () => {
  const [showImage, setShowImage] = useState(false);

  const handleMouseOver = () => {
    setShowImage(true);
  };

  const handleMouseOut = () => {
    setShowImage(false);
  };


  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="A propos"
    >
      <SectionHeading>A propos de moi</SectionHeading>
      
      <p className="mb-3 opacity-100 ">
        Je recherche actuellement un{" "}
        <span className="font-medium">stage de fin d'année à l'étranger ou une alternance m'accompagnant pour la période 2025-2027</span> en la qualité d'ingénieur biomédical hospitalier, ingénieur d'application ou chef de projet
      </p>
      {showImage && (
          <div className="absolute right-[0%] top-[15%]">
            <img src="riz.gif" alt="riz" className="w-[25rem] h-[20rem]" />
          </div>
        )}
      <p className="mb-3 relative">
        <span className="italic">Dans mon temps libre</span>, j'aime faire de la randonnée,
        m'intéresser à la géopolitique, la finance et passer du temps avec mes proches. J'aime aussi{" "}
        <a href="https://www.youtube.com/watch?v=FxfTaQOJHsA" target="_blank" className="font-medium  text-blue-400 hover:text-gray-800">apprendre de nouvelles choses car tout m'interesse</a>
        <a href="./riz.gif" target="_blank" className="font-medium text-blue-800 hover:text-gray-800 " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> ( en ce moment je me documente sur l'impression 3D et le traitement d'image avec Matlab )</a>.
        Je participe également en tant que bénévole pour l'association{" "}
        <a href="https://www.lesblousesroses.asso.fr/fr/" target="_blank" className="font-medium">les Blouses Roses de Nîmes.</a> Enfin, je cherche chaque jour à devenir une meilleure
        version de moi-même et donner du sourire autour de moi.
      </p>
      <p className="mb-3">
        Je compte tout mettre en œuvre pour à terme devenir <span className="font-medium">Ingénieur d'application
          , Ingénieur Biomédical ou Ingénieur en imagerie médicale</span>.
      </p>

     
    </motion.section>
  );
};

export default About;