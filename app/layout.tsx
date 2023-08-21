import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Box, Typography } from "@mui/material";
import { Button } from "@nextui-org/button";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "h-full bg-black-500 font-sans antialiased scroll-smooth",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col bg-gradient-to-br from-purple-800 from-0% via-blue-500 via-50% to-black to-100% scroll-smooth">
            <Navbar />
            <main className="scroll-smooth">{children}</main>
            <footer className="w-full flex items-center justify-center py-3 flex-wrap">
              <div className="w-full h-px bg-white mt-4" />
              {/* Copyrigth */}
              <p className="text-center mt-2 font-bold w-full ">
                © Copyright 2023. Made by
                <Link
                  as={NextLink}
                  className={buttonStyles({
                    variant: "light",
                    className: "font-bold mx-1 p-0",
                  })}
                  href="#"
                >
                  Manuel Puente
                </Link>
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
