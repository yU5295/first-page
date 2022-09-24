import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import styled from 'styled-components';


const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const CarouselWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Img = styled.img`
    margin: 20px;
`;


export default function Carousell() {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];

    return (
        <CarouselWrapper>
            <Carousel>
                {items.map((item, i) => (
                    <ImgWrapper>
                        <Img src='assets/imgs/back1.png'></Img>
                        <Img src='assets/imgs/back2.png'></Img>
                        <Img src='assets/imgs/back3.png'></Img>
                        <Img src='assets/imgs/back4.png'></Img>
                    </ImgWrapper>
                ))}
            </Carousel>
        </CarouselWrapper>
        
    );
}
