import React from "react";
import { Box, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { Language } from "@/config/language/languageSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
import { languageConfig, skillsObject } from "@/config/site";
import { Card, CardBody, CardHeader, Image, Progress } from "@nextui-org/react";

export const AboutMe = () => {
  const { value: language }: { value: Language } = useSelector(
    (state: RootState) => state.language
  );
  const isLanguage =
    language === Language.Spanish ? Language.Spanish : Language.English;
  return (
    <Box
      id="About"
      sx={{
        color: "white",
        p: 5,
        pb: 20,
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          {languageConfig[isLanguage].aboutMe}
        </Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "90%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {languageConfig[isLanguage].aboutMeDescription}
          </Typography>
          <br />
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {languageConfig[isLanguage].aboutMeDescription2}
          </Typography>

          {/* Button go To Contact */}
          <Box
            sx={{
              mt: 6,
            }}
          ></Box>
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: "5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
            variant="h4"
          >
            {languageConfig[isLanguage].skills}
          </Typography>
          <br />
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {languageConfig[isLanguage].skillsDescription}
          </Typography>
          <br />
          <div className="flex flex-wrap justify-center gap-4 items-center w-full">
            {languageConfig[isLanguage].skillList.map((skill: string, i) => (
              <Card key={i} className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{skill}</h4>
                  <Progress
                    color="success"
                    aria-label="Loading..."
                    value={skillsObject[skill].progress}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-white w-full flex justify-center items-center">
                  <div className="w-80 flex justify-center">
                    {skillsObject[skill].svg && skillsObject[skill].svg}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};
