import * as React from 'react';
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import { CarouselProps } from 'react-multi-carousel';
import Carousell from './Carousel';
import { Box, Container, Typography } from '@mui/material';


export default function Content() {
  
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          noWrap
          fontFamily='Arvo'
          fontWeight={700}
          sx={(theme) => ({
            background: 'linear-gradient(135deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontSize: { xs: '70px', md: '90px'},
          })}
        >
          Wiener
        </Typography>
        <Typography
          variant="h5"
          noWrap
          fontFamily='Arvo'
          fontWeight={700}
          color="text.primary"
          sx={(theme) => ({
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Carousell/>
      </Container>
    </Box>
  );
}