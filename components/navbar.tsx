"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import { languageConfig, siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { GithubIcon, DiscordIcon } from "@/components/icons";
import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Language, changeLanguage } from "../config/language/languageSlice";
import { RootState } from "@/config/store";
import TranslateIcon from "@mui/icons-material/Translate";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Navbar = () => {
  const { value: language } = useSelector((state: RootState) => state.language);
  const [IsScrollTop, setIsScrollTop] = useState(true);

  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["español"])
  );
  const setLanguage = useDispatch();

  const selectedValue = useMemo(() => {
    const values = Array.from(selectedKeys).join(", ").replaceAll("_", " ");

    setLanguage(changeLanguage(values));

    let displayValue = "";
    switch (values) {
      case languageConfig.english.btnLanguage:
        displayValue = languageConfig.spanish.btnLanguage;
        break;
      case languageConfig.english.btnLanguage2:
        displayValue = languageConfig.spanish.btnLanguage2;
        break;
      case languageConfig.spanish.btnLanguage:
        displayValue = languageConfig.english.btnLanguage;
        break;
      case languageConfig.spanish.btnLanguage2:
        displayValue = languageConfig.english.btnLanguage2;
        break;
      default:
        displayValue = language === Language.Spanish ? "Español" : "English";
    }

    return displayValue;
  }, [selectedKeys, setLanguage, language]);

  const handleLanguageChange = (keys: Selection) => {
    setSelectedKeys(keys);
    return;
  };

  const handleScroll = () => {
    if (window.window.scrollY > 0) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NextUINavbar
      shouldHideOnScroll
      className={`md:bg-transparent backdrop-filter-none hover:bg-default transition-all ease-in-out ${
        !IsScrollTop && "sm:bg-opacity-80 sm:bg-default "
      }`}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent
        className={`basis-1/5 sm:basis-full transition-all ease-in-out ${
          !IsScrollTop && "md:bg-opacity-80 md:bg-default rounded-b-lg"
        }`}
        justify="start"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2 sm:mx-2 md:mx-10 lg:mx-5 ">
          {languageConfig[
            language === Language.Spanish ? Language.Spanish : Language.English
          ].navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({
                    className:
                      "border-b-2 border-transparent hover:border-b-2 hover:border-current transition-all ease-in-out text-white",
                  }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className={`hidden sm:flex basis-1/5 sm:basis-full sm:mx-2 md:mx-10 lg:mx-5  transition-all ease-in-out ${
          !IsScrollTop && "bg-opacity-80 bg-default rounded-b-lg"
        }`}
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Github">
            <LinkedInIcon className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-white" />
          </Link>
        </NavbarItem>
        <NavbarItem className="pr-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize border-gray-300 text-white"
              >
                <TranslateIcon /> {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection actions"
              variant="bordered"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={handleLanguageChange}
            >
              {language === Language.Spanish ? (
                <DropdownItem key="español">Español</DropdownItem>
              ) : (
                <DropdownItem key="spanish">Spanish</DropdownItem>
              )}
              {language === Language.Spanish ? (
                <DropdownItem key="ingles">Ingles</DropdownItem>
              ) : (
                <DropdownItem key="english">English</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Github">
          <LinkedInIcon className="text-white" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-white" />
        </Link>

        <NavbarMenuToggle id="menuMobile" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col justify-center items-center gap-2">
          {languageConfig[
            language === Language.Spanish ? Language.Spanish : Language.English
          ].navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-white"
                href={item.href}
                size="lg"
                onClick={() => {
                  console.log("click");
                  if (document.getElementById("menuMobile")) {
                    const menuMobile = document.getElementById(
                      "menuMobile"
                    ) as HTMLElement;
                    menuMobile.click();
                  }
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize border-gray-300 text-white"
                >
                  <TranslateIcon /> {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection actions"
                variant="bordered"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={handleLanguageChange}
              >
                {language === Language.Spanish ? (
                  <DropdownItem key="español">Español</DropdownItem>
                ) : (
                  <DropdownItem key="spanish">Spanish</DropdownItem>
                )}
                {language === Language.Spanish ? (
                  <DropdownItem key="ingles">Ingles</DropdownItem>
                ) : (
                  <DropdownItem key="english">English</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
