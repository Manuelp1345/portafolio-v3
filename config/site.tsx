import {
  ElectronSvg,
  ExpressSvg,
  GitSvg,
  GithubIcon,
  GithubSvg,
  JavascriptSvg,
  MaterialUiSvg,
  MongoSvg,
  NextSvg,
  NodeSvg,
  PostgresSvg,
  ReactSvg,
  ShopifySvg,
  StripeSvg,
  TypescriptSvg,
} from "@/components/icons";
import { IconSvgProps } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Manuel Puente",
  description: "Full Stack JavaScript Developer",
  links: {
    github: "https://github.com/Manuelp1345",
    linkedin: "https://www.linkedin.com/in/manuel-puente-148091142/",
  },
};

export type ListMySkills = (typeof listMySkills)[number];

export interface SkillsObject {
  [key: ListMySkills]: {
    svg: React.ReactNode;
    progress: number;
  };
}

export const skillsObject: SkillsObject = {
  "React.js": {
    svg: <ReactSvg />,
    progress: 60,
  },
  "Next.js": {
    svg: <NextSvg />,
    progress: 50,
  },
  "Electron.js": {
    svg: <ElectronSvg />,
    progress: 40,
  },
  "Node.js": {
    svg: <NodeSvg />,
    progress: 65,
  },
  Express: {
    svg: <ExpressSvg />,
    progress: 60,
  },
  MongoDB: {
    svg: <MongoSvg />,
    progress: 40,
  },
  PostgreSQL: {
    svg: <PostgresSvg />,
    progress: 50,
  },
  TypeScript: {
    svg: <TypescriptSvg />,
    progress: 50,
  },
  JavaScript: {
    svg: <JavascriptSvg />,
    progress: 85,
  },
  Shopify: {
    svg: <ShopifySvg />,
    progress: 80,
  },
  "Material UI": {
    svg: <MaterialUiSvg />,
    progress: 80,
  },
  Git: {
    svg: <GitSvg />,
    progress: 80,
  },
  GitHub: {
    svg: <GithubSvg />,
    progress: 80,
  },
  Stripe: {
    svg: <StripeSvg />,
    progress: 60,
  },
};

const listMySkills = [
  "React.js",
  "Next.js",
  "Electron.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "Shopify",
  "Material UI",
  "Git",
  "GitHub",
  "Stripe",
];

export const languageConfig = {
  spanish: {
    btnLanguage: "Ingles",
    btnLanguage2: "Español",
    navItems: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Sobre Mi",
        href: "#About",
      },
      {
        label: "Portafolios",
        href: "#Projects",
      },
      {
        label: "Contacto",
        href: "#Contact",
      },
    ],
    Tittle: "Desarrollador JavaScript Full Stack",
    Subtitlie:
      "| React.js | Node.js | TypeScript | Next.js | Shopify | Stripe |",
    aboutMe: "Sobre Mi",
    aboutMeDescription:
      "Soy un Desarrollador Full Stack con experiencia en la creación de aplicaciones web con React, Next.js y Node.js 🚀 Mi mayor fortaleza se encuentra en el backend, donde sobresalgo en la creación de sólidas API RESTful. Sin embargo, también tengo una gran destreza en el desarrollo frontend con React y Next.js. Me enorgullece diseñar interfaces fluidas y amigables con el usuario que contribuyen al éxito general del producto. Echa un vistazo a algunos de mis impresionantes proyectos en la sección de Proyectos.",
    aboutMeDescription2:
      "Estoy abierto a oportunidades laborales en las que pueda aportar, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.",
    skills: "Habilidades",
    skillsDescription: "Tengo experiencia trabajando con lo siguiente.",
    skillList: listMySkills,
    portfolio: "Portafolios",
    portfolioDescription:
      "Aquí encontrarás algunos de los proyectos personales y de clientes que he creado.",
    contact: "Contacto",
    contactDescription:
      "No dudes en contactarme mediante el formulario que se encuentra a continuación, y me pondré en contacto contigo lo antes posible.",
    contactFieldName: "Nombre",
    contactFieldEmail: "Correo Electrónico",
    contactFieldMessage: "Mensaje",
    contactYupName: "Por favor ingrese su nombre",
    contactYupEmail: "Por favor ingrese un correo electrónico válido",
    contactYupEmail2: "Por favor ingrese un correo electrónico",
    contactYupMessage: "Por favor ingrese un mensaje",
    contactButton: "Enviar",
    contactMessageSuccess: "Mensaje enviado con éxito",
    contactMessageError: "Error al enviar el mensaje",
  },
  english: {
    btnLanguage: "English",
    btnLanguage2: "Spanish",
    navItems: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Me",
        href: "#About",
      },
      {
        label: "Portfolio",
        href: "#Projects",
      },
      {
        label: "Contact",
        href: "#Contact",
      },
    ],
    Tittle: "Full Stack JavaScript Developer",
    Subtitlie:
      "| React.js | Node.js | TypeScript | Next.js | Shopify | Stripe |",
    aboutMe: "About Me",
    aboutMeDescription:
      "Hey there! I'm a Full Stack Developer with expertise in building web apps with React, Next.js, and Node.js 🚀 My strong suit lies in the backend where I excel at creating robust RESTful APIs. However, I'm equally adept at frontend development with React and Next.js. I take pride in crafting seamless and user-friendly interfaces that contribute to the overall success of the product. Check out some of my impressive work in the Projects section.",
    aboutMeDescription2:
      "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
    skills: "Skills",
    skillsDescription: "I have experience working with the following.",
    skillList: listMySkills,
    portfolio: "Portfolio",
    portfolioDescription:
      "Here you will find some of the personal and clients projects that I created.",
    contact: "Contact",
    contactDescription:
      "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",
    contactFieldName: "Name",
    contactFieldEmail: "Email",
    contactFieldMessage: "Message",
    contactYupName: "Please enter your name",
    contactYupEmail: "Please enter a valid email address",
    contactYupEmail2: "Please enter an email address",
    contactYupMessage: "Please enter a message",
    contactButton: "Send",
    contactMessageSuccess: "Message sent successfully",
    contactMessageError: "Error sending message",
  },
};
