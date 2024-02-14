import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import AquaglisseImg from "@/public/aquaglisse.png";
import AvenirImg from "@/public/avenir.png";
import wpfImg from "@/public/wpf.jpg";
import Imprim3dIMG from "@/public/imprimante3d.jpg";
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
    title:"Baccalauréat Scientifique",
    location:"Lycée Alphonse Daudet, Nîmes",
    description:"Spécialité Science de la Vie et de la Terre",
    icon: React.createElement(LuGraduationCap),
    date:"2016",
  },
  {
    title:"BTS SIO Cybersécurité",
    location:"Lycée CCI Gard, Nîmes",
    description:"Spécialité Solutions Logicielles et Applications Metiers avec option Mathématiques approfondies.",
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
    date: "2024 - présent",
  },
] as const;

export const projectsData = [
  {
    title: "Aquaglisse",
    description:
      "J'ai pu travailler au cours de mon stage sur un site web construit en React, Next.js, Tailwind et y ajouter des modules",
    tags: ["React", "Next.js", "Tailwind", "Netlify"],
    imageUrl: AquaglisseImg,
    redirect: "https://aquaglisse.fr"
  },
  {
    title: "Imprim3D",
    description:
      "Un CMS ( partie admin ) permettant de gérer le contenu affiché sur un site marchand ( partie utilisateur ) et effectuer des paiements sécurisés",
    tags: ["React", "Typescript", "Prisma", "Stripe", "Shadcn-ui", "Clerck", "Cloudinary"],
    imageUrl: Imprim3dIMG,
    redirect: "https://imprimante3d-magasin.vercel.app/"
  },
  {
    title: "WpfFromage/Meteo",
    description:
      "Deux applications WPF, Un modèle PAC permettant de rechercher un fromage depuis un JSON, le second pour afficher les prévisions météos à partir d'une consommation d'API",
    tags: ["EntityFramework", "C#", "Modèle PAC", "API"],
    imageUrl: wpfImg,
    redirect: "fusion_wpf.png"
  },
  // {
  //   title: "Symfony",
  //   description:
  //    "A venir",
  //   tags: ["PHP", "Symfony","Docker"],
  //   imageUrl: AvenirImg,
  //   redirect: ""
  // },
  {
  title: "API REST Catalogue Randonnee",
    description:
      "Un projet utilisant Golang associé à MySQL proposant une API REST avec un catalogue de randonnées et leurs informations en JSON ",
    tags: ["GO", "Postman", "MySQL", "GORM"],
    imageUrl: CatalogueRandonneeGoImg,
    redirect: "CatalogueRandonneeGo.jpg"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Github",
  "Tailwind",
  "MySQL",
  "PHP",
  "Symfony",
  "C#",
  "Matlab",
  "Prisma",
  "EntityFramework",
  "Postman",
  "Shadcn-ui",
] as const;