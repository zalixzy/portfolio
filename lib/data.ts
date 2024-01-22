import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AquaglisseImg from "@/public/aquaglisse.png";
import AvenirImg from "@/public/avenir.png";
import wpfImg from "@/public/wpf.jpg";
import CatalogueRandonneeGoImg from "@/public/CatalogueRandonneeGo.jpg";

export const links = [
  {
    name: "Accueil",
    hash: "#Accueil",
  },
  {
    name: "A propos",
    hash: "#A propos",
  },
  {
    name: "Projets",
    hash: "#Projets",
  },
  {
    name: "Compétences",
    hash: "#Compétences",
  },
  {
    name: "Experience",
    hash: "#Experience",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
] as const;

export const experiencesData = [
  {
    title:"BAC S option SVT",
    location:"Lycée Alphonse Daudet, Nîmes",
    description:"J'ai obtenu mon baccalaureat scientifique en 2016",
    icon: React.createElement(LuGraduationCap),
    date:"2016",
  },
  {
    title:"BTS SIO Cybersécurité",
    location:"Lycée CCI Gard, Nîmes",
    description:"Au cours de cette formation j'ai pu apprendre de nombreuses bases essentielles en programmation, couplées à des connaissances approfondies dans les matières générales. ",
    // icon: React.createElement(CgWorkAlt)
    icon: React.createElement(LuGraduationCap),
    date:"2022 - 2024",
  },
  {
    title: "A venir",
    location: "A venir",
    description:
      "A venir",
    // icon: React.createElement(FaReact)
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Aquaglisse",
    description:
      "J'ai pu travailler au cours de mon stage sur un site web construit en React, Next.js, Tailwind et y ajouter des modules",
    tags: ["React", "Next.js", "Tailwind", "Netlify"],
    imageUrl: AquaglisseImg,
  },
  {
    title: "WpfFromage/Meteo",
    description:
      "Deux applications WPF, Un modèle PAC permettant de rechercher un fromage depuis un JSON, le second pour afficher les prévisions météos à partir d'une consommation d'API",
    tags: ["EntityFramework", "C#", "Modèle PAC", "API"],
    imageUrl: wpfImg,
  },
  {
    title: "Symfony",
    description:
     "A venir",
    tags: ["PHP", "Symfony","Docker"],
    imageUrl: AvenirImg,
  },
  {
  title: "API REST Catalogue Randonnee",
    description:
      "Un projet utilisant Golang associé à MySQL proposant une API REST avec un catalogue de randonnées et leurs informations en JSON ",
    tags: ["GO", "Postman", "MySQL", "GORM"],
    imageUrl: CatalogueRandonneeGoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "API",
  "MySQL",
  "Docker",
  "PHP",
  "Symfony",
  "C#",
  "EntityFramework",
  "Framer Motion",
  "Resend",
  "Postman",
  "GO",
] as const;