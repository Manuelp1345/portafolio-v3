import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { object, string } from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Language } from "@/config/language/languageSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
import { languageConfig } from "@/config/site";
import { Button, Input, Textarea } from "@nextui-org/react";

const initialValues = {
  email: "",
  name: "",
  message: "",
};

export const Contact = () => {
  const { value: language }: { value: Language } = useSelector(
    (state: RootState) => state.language
  );
  const isLanguage =
    language === Language.Spanish ? Language.Spanish : Language.English;
  const [open, setOpen] = React.useState(false);
  const [responseState, setResponseState] = React.useState({
    success: false,
    message: "",
  });

  const validationSchema = object({
    email: string()
      .email(languageConfig[isLanguage].contactYupEmail)
      .required(languageConfig[isLanguage].contactYupEmail2),
    name: string().required(languageConfig[isLanguage].contactYupName),
    message: string().required(languageConfig[isLanguage].contactYupMessage),
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      const { name, email, message } = values;
      let response;
      try {
        response = await axios.post("https://api-nest-nu.vercel.app/contact", {
          name,
          email,
          message,
        });
      } catch (error: any) {
        console.error("error", error.message);
        setResponseState({
          success: false,
          message: "Something went wrong, please try again later",
        });
        setOpen(true);
        return;
      }
      if (response.data.ok) {
        setResponseState({
          success: true,
          message: "Message Sent!",
        });
        formik.resetForm();
      }
      setOpen(true);
      formik.setSubmitting(false);
    },
  });

  return (
    <Box
      id="Contact"
      sx={{
        p: 5,
      }}
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
          {languageConfig[isLanguage].contact}
        </Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {languageConfig[isLanguage].contactDescription}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              borderRadius: "5px",
              borderColor: "white",
              border: "1px solid",
              overflow: "hidden",
              width: { xs: "100%", sm: "50%" },
              boxShadow: "rgba(100,100,111,.2) 0 7px 29px 0",
              p: 5,
              mt: 5,

              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: 4,
              }}
            >
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="email"
                  id="name"
                  name="name"
                  label={languageConfig[isLanguage].contactFieldName}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  validationState={
                    formik.touched.name && formik.errors.name
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="text"
                  id="email"
                  name="email"
                  label={languageConfig[isLanguage].contactFieldEmail}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  validationState={
                    formik.touched.email && formik.errors.email
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={formik.touched.email && formik.errors.email}
                />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Textarea
                  id="message"
                  name="message"
                  label={languageConfig[isLanguage].contactFieldMessage}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  validationState={
                    formik.touched.message && formik.errors.message
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={formik.touched.message && formik.errors.message}
                  labelPlacement="inside"
                  className="w-full"
                />
              </div>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  width: "100%",
                }}
              >
                <Button
                  type="submit"
                  isLoading={formik.isSubmitting}
                  radius="lg"
                  className="w-full bg-transparent border-white text-white border hover:bg-default  transition-all ease-in-out"
                >
                  {languageConfig[isLanguage].contactButton}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity={responseState.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {responseState.success
            ? languageConfig[isLanguage].contactMessageSuccess
            : languageConfig[isLanguage].contactMessageError}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};
