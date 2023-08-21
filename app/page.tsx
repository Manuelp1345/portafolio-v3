"use client";
import NextLink from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { languageConfig, siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Typed from "typed.js";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
import { Language } from "@/config/language/languageSlice";

export default function Home() {
  const { value: language }: { value: Language } = useSelector(
    (state: RootState) => state.language
  );
  const isLanguage =
    language === Language.Spanish ? Language.Spanish : Language.English;

  const [typed, setTyped] = useState<Typed | null>();
  const [typed2, setTyped2] = useState<Typed | null>();

  const animationTyping = useCallback(() => {
    if (typed === null) {
      const typedOne = new Typed("#typed", {
        strings: [languageConfig[isLanguage].Tittle],
        typeSpeed: 40,
        backSpeed: 0,
        fadeOut: true,
        cursorChar: "_",
        onComplete: (self) => {
          self.cursor.remove();
        },
      });
      const typedTwo = new Typed("#typed2", {
        strings: [
          "| React.js | Node.js | TypeScript | Next.js | Shopify | Stripe |",
        ],
        typeSpeed: 20,
        backSpeed: 0,
        fadeOut: true,
        cursorChar: "_",
        startDelay: 1000,
        onComplete: (self) => {
          self.cursor.remove();
        },
      });

      setTyped2(typedTwo);
      setTyped(typedOne);
    }
  }, [isLanguage, typed]);

  const resetTyped = () => {
    typed?.destroy();
    typed2?.destroy();
    setTyped(null);
    setTyped2(null);
    if (document.getElementById("typed2")) {
      const typedTwoElement = document.getElementById("typed2") as HTMLElement;
      typedTwoElement.innerHTML = "";
    }
  };

  useEffect(animationTyping, [language, animationTyping]);

  useEffect(resetTyped, [language, resetTyped]);

  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-0 m-0 ">
        <div className="inline-block text-center justify-center h-64">
          <h1 className={title()}>Manuel Puente&nbsp;</h1> <br />
          <h1 className={title()}>
            <span id="typed"></span>
          </h1>
          <h2>
            <span className={subtitle()} id="typed2"></span>
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              className: "border-white hover:bg-default",
            })}
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon />
            LinkedIn
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              className: "border-white hover:bg-default",
            })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
