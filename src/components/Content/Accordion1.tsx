import { useState } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const FaqWithAccordion = () => {
    const Accordion = ({
      text,
      description,
    }: {
      text: string;
      description: string;
    }) => {
      const [isShow, setIsShow] = useState<boolean>(false);
   
      const toggleAccordion = () => {
        setIsShow(!isShow);
      };
      return (
        <Box
          mb="20px"
          sx={(theme) => ({
            border: `3px solid ${theme.palette.common.white}`,
            borderRadius: "10px",
            px: "20px",
            py: "20px",
          })}
        >
          <Typography>{text}</Typography>
          {isShow && (
            <Divider
              sx={{ height: "3px", my: "20px", backgroundColor: "common.white" }}
            />
          )}
          {isShow && <Typography fontWeight="700">{description}</Typography>}
          <Box display="flex" justifyContent="center" mt="8px">
            <IconButton onClick={toggleAccordion} sx={{color: "common.white"}}>
              {isShow ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </Box>
      );
    };
    return (
        <Container maxWidth="xl">
          <Box
            sx={(theme) => ({
              background: `${theme.palette.background.transparent}`,
              borderRadius: "10px",
              px: { xs: "20px", md: "100px" },
              py: { xs: "40px", md: "100px" },
            })}
          >
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.?"
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <Accordion
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
          </Box>
        </Container>
    );
  };
export default FaqWithAccordion;