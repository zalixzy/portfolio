import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    hash: "#projets",
  },
  {
    name: "Compétences",
    hash: "#Compétences",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BAC S option SVT",
    location: "Lycée Alphonse Daudet, Nîmes",
    description:
      "J'ai obtenu mon baccalaureat scientifique en 2016",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "BTS SIO Cybersécurité",
    location: "Lycée CCI Gard, Nîmes",
    description:
      "Au cours de cette formation j'ai pu apprendre de nombreuses bases essentielles en programmation, couplées à des connaissances approfondies dans les matières générales. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Aquaglisse",
    description:
      "J'ai pu travailler au cours de mon stage sur un site web construit en React, Next.js, Tailwind et y ajouter des modules",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Portfollio",
    description:
      "Afin d'approfondir mes connaissances je me suis lancé sur un site web personnel en React, Next.js, Tailwind et hébergé.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Symfony",
    description:
      "Un projet suivit pas à pas afin de maîtriser pleinement le framework symfony et docker.",
    tags: ["PHP", "Docker", "SQL", "Symfony", ""],
    imageUrl: wordanalyticsImg,
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
  "PostgreSQL",
  "MySQL",
  "Docker",
  "PHP",
  "Symfony",
  "C#",
  "EntityFramework",
  "Framer Motion",
] as const;