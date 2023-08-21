import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "react-material-ui-carousel";
import { Language } from "@/config/language/languageSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
import { languageConfig } from "@/config/site";

const items = [
  {
    image: "img/cd.png",
    title: "Certidigital ",
    text: "Web platform built with PHP, Bootstrap 5, CSS, and HTML for SolTech Group. The platform aims to allow Colombians to perform an income certification from the comfort of their homes, featuring digital signature and QR code.",
    textSpanish:
      "Plataforma web construida con PHP, Bootstrap 5, CSS y HTML para SolTech Group. La plataforma tiene como objetivo permitir a los colombianos realizar una certificación de ingresos desde la comodidad de sus hogares, con firma digital y código QR.",
    btnGit: "",
    btnLive: "https://www.certidigital.com.co/index.php",
  },
  {
    image: "img/pivot.webp",
    title: "Pivot MKT (Shopify App)",
    text: "App for integrating Shopify with the Pivot platform, developed using Next.js and Material-UI.",
    textSpanish:
      "App para integrar Shopify con la plataforma Pivot, desarrollada usando Next.js y Material-UI.",
    btnGit: "",
    btnLive: "",
  },
  {
    image: "img/sm.jpg",
    title: "Santos Manjares",
    text: "Meat restaurant in Argentina, the project was developed using HTML, CSS, and JavaScript. The project was developed together with my teammate Santiago Mederos, working through Github.",
    textSpanish:
      "Restaurante de carne en Argentina, el proyecto fue desarrollado usando HTML, CSS y JavaScript. El proyecto fue desarrollado junto a mi compañero Santiago Mederos, trabajando a través de Github.",
    btnGit: "https://github.com/Manuelp1345/Santos-Manjares",
    btnLive: "https://santos-manjares.vercel.app/",
  },
  {
    image: "img/stg.jpg",
    title: "SolTech Group",
    text: "Project for a Colombian technology solutions company, the project was developed using HTML, CSS, JavaScript, and Bootstrap 4.",
    textSpanish:
      "Proyecto para una empresa colombiana de soluciones tecnológicas, el proyecto fue desarrollado usando HTML, CSS, JavaScript y Bootstrap 4.",
    btnGit: "",
    btnLive: "",
  },
  {
    image: "img/stn.png",
    title: "SolTech Group (Re-Design)",
    text: "Project for a Colombian technology solutions company, the project was developed using React.js, TypeScript, Material-UI, and Styled-Components.",
    textSpanish:
      "Proyecto para una empresa colombiana de soluciones tecnológicas, el proyecto fue desarrollado usando React.js, TypeScript, Material-UI y Styled-Components.",
    btnGit: "",
    btnLive: "https://www.soltechgroup.net/",
  },
  {
    image: "img/pt.png",
    title: "Play-Trading",
    text: "Play Trading is a sports trading platform, the project was developed using React.js, TypeScript, Material-UI, Styled-Components, and Firebase.",
    textSpanish:
      "Play Trading es una plataforma de trading deportivo, el proyecto fue desarrollado usando React.js, TypeScript, Material-UI, Styled-Components y Firebase.",
    btnGit: "",
    btnLive: "https://play-trading.com/",
  },
  {
    image: "img/sistema.jpg",
    title: "U.E José Enrique Arias",
    text: "Automated grading system, the project was developed using PHP, HTML, CSS, MariaDB, JavaScript, and Bootstrap 5.",
    textSpanish:
      "Sistema de calificaciones automatizado, el proyecto fue desarrollado usando PHP, HTML, CSS, MariaDB, JavaScript y Bootstrap 5.",
    btnGit: "https://github.com/Manuelp1345/SIstema-Jose-Enrique-Arias",
    btnLive: "",
  },
  {
    image: "img/sistema2.png",
    title: "U.E José Enrique Arias v2",
    text: "Automated grading system, the project was developed using Electron.js, React.js, TypeScript, Material-UI, Styled-Components, MariaDB, and TypeORM.",
    textSpanish:
      "Sistema de calificaciones automatizado, el proyecto fue desarrollado usando Electron.js, React.js, TypeScript, Material-UI, Styled-Components, MariaDB y TypeORM.",
    btnGit: "https://github.com/Manuelp1345/Sistema-de-notas-v2",
    btnLive: "",
  },
];

export const Projects = () => {
  const { value: language }: { value: Language } = useSelector(
    (state: RootState) => state.language
  );
  const isLanguage =
    language === Language.Spanish ? Language.Spanish : Language.English;
  return (
    <Box
      id="Projects"
      sx={{
        p: 5,
        width: "100%",
      }}
      className="bg-none"
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          {languageConfig[isLanguage].portfolio}
        </Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {languageConfig[isLanguage].portfolioDescription}
        </Typography>

        <Carousel
          sx={{
            borderRadius: "1rem",
            overflow: "hidden",
            width: "100%",
            display: { xs: "none", sm: "none", md: "block" },
          }}
          animation="slide"
          autoPlay={true}
          cycleNavigation
          fullHeightHover={false}
          navButtonsAlwaysVisible
          indicators={true}
          height={"400px"}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                px: {
                  xs: "0px",
                  sm: "0px",
                  md: "15px",
                  lg: "35px",
                },
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 6,
                gap: {
                  xs: "0px",
                  sm: "0px",
                  md: "7px",
                  lg: "20px",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  width: { xs: "300px", sm: "300px", md: "400px", lg: "500px" },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textSize: {
                      xs: "1rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                    height: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "4rem",
                      lg: "2rem",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                      md: "0.8rem",
                      lg: "2rem",
                    },
                    height: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "6rem",
                      lg: "2rem",
                    },
                    px: {
                      xs: "0px",
                      sm: "10px",
                      md: "30px",
                      lg: "35px",
                    },
                  }}
                >
                  {language === Language.Spanish ? item.textSpanish : item.text}
                </Typography>
                <br />
                <br />

                <Box>
                  {item.btnGit && (
                    <Button onClick={() => window.open(item.btnGit)}>
                      <GitHubIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "white",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      />
                    </Button>
                  )}
                  {item.btnLive && (
                    <Button onClick={() => window.open(item.btnLive)}>
                      <SearchIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "white",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      />
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 6,
                gap: "100px",
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  width: "350px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="h6">
                  {language === Language.Spanish ? item.textSpanish : item.text}
                </Typography>
                <Box>
                  {item.btnGit && (
                    <Button onClick={() => window.open(item.btnGit)}>
                      <GitHubIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "white",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      />
                    </Button>
                  )}
                  {item.btnLive && (
                    <Button onClick={() => window.open(item.btnLive)}>
                      <SearchIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "white",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      />
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
