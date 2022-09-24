import * as React from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { IoLogoDiscord, IoLogoTwitter } from 'react-icons/io5'
import CustomizedAccordions from './Accordion';
import FaqWithAccordion from './Accordion1';
import { Box, Container, Typography, Button } from '@mui/material';

export default function BottomContent() {
    const items = [
        {
            title: 'Wieners Club',
            description: 'Wieners Club is a collection of 3,010 unique wiener dog NFT collectibles.We are a vibrant community made out of wiener dog lovers, NFT enthusiast and members who want to actively support their favorite non profit, animal related organization!',
        },
        {
            title: 'Our Mission',
            description: 'We are proud to be the first NFT project that is giving 51% of the royalties to non profit organizations.\
                            As with all NFTs, every time an NFT ansfers hands, 5% of the sale amount goes back to the creator as royalties.\
                            We are giving most of those royalties back to organizations who help animals selected and voted for by our members).\
                            The royalties collected in each donation period are shown on the top right corner of the website.\
                            Donation periods and voting dates will vary and are also shown on the top right corner.',
        },
        {
            title: 'Community',
            description: 'Our community is made out of members (anyone who holds at least one Wieners Club NFT in their wallet) and guests.\
                            Only members can refer, recommend and vote for their favorite organization to receive a larger portion of the royalties we are donating.\
                            Both members and gusts connect at our Discord server where we announce all of the exciting things to come, host competitions with some amazing prizes and where the community can provide feedback the help us make this ecosystem even better. \
                            Join our Discord. Follow us on Twitter.',
        },
        {
            title: 'Help To Earn',
            description: 'On top of the 51% we are giving to non profit organizations, we are also giving 19% back to facilitating members.\
                            This gives our members a real opportunity to not only actively support their favorite organizations but also earn handsomely.\
                            Members get reward points for 3 main activities: Referring an organization, Recommend an organization and Voting for an organization.\
                            Reward points are are the redeemed into SOL tokens and paid to members’ wallets. Learn more.',
        },
        {
            title: 'The Tech Side',
            description: 'The Wieners Club NFT collections is placed on the Solana blockchain, where transactions are super safe, fast & cheap.\
                            Our collection is currently listed on Alpha.art, Magic Eden and Digital Eyes.\
                            To purchase your first Wieners Club NFT you will need some SOL tokens in a wallet that supports the Solana blockchain,.\
                            SOL is the token (coin) used for all transactions on the Solana blockchain, you can buy it on any large exchange (Binance, Coinbase, Kraken etc).\
                            The most popular and trusted Solana-friendly wallets are Phantom , Sollet and Solflare.',
        },
    ];

    const BottomContentWrapper = styled.div`
        background: #231D24;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 100px;
    `;
    
    const BottomContentHeader = styled.div`
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        text-align: center;
        color: #707AED;
        margin: 20px;
    `; 
    const JoinButton = styled.button`
        padding: 26px;
        background: #816AEF;
        border-radius: 10px;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 99.9%;
        text-align: center;
        color: #FFFFFF;
        border: none;
        margin: 10px;
    `;
    const FaqWrapper = styled.div`
        margin-top: 120px;
        width: 80%;
        background: linear-gradient(121.62deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%);
        border-radius: 10px;
        padding: 100px 0 100px 0;
    `;

    const FaqHeaer = styled.h1`
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 100%;
        text-align: center;
        color: #FFFFFF;
    `;
    const FaqButton = styled.button`
        background: rgba(255, 255, 255, 0.2);
        border: 3px solid #FFFFFF;
        box-shadow: inset 0px -5px 15px rgba(35, 29, 36, 0.1), inset 0px 5px 15px rgba(35, 29, 36, 0.1);
        border-radius: 10px;
        font-family: 'Arvo';Join
        line-height: 99.9%;
        text-align: center;
        color: #FFFFFF;
        padding: 15px 50px 15px 50px;
        margin: 10px;
    `;
    const FaqButton1 = styled(FaqButton)`
        color: #707AED;;
        background: #FFFFFF;
    `;
    
    const AccordionWrapper = styled.div`
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
    `;

    return(
        <Box
            sx={{
                pt: 2,
                pb: 2,
            }}
        >
            <Container maxWidth="xl" sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography
                    variant="h1"
                    color={'#707AED'}
                    noWrap
                    sx={{
                        mr: 2,
                        fontFamily: 'Arvo',
                        fontSize: { xs: '15px', md: '30px'},
                        color: 'inherit',
                    }}
                >
                    Want to be the first to know all the news?
                </Typography>
                <Box>
                    <Button 
                        variant="contained"
                        sx={{
                            backgroundColor:'secondary.light',
                            width: { xs: '150px', md: '400px' },
                            fontSize: { xs: '10px', md: '30px' },
                            margin: 1,
                        }}
                    >
                        Join Our Discord 
                        <IoLogoDiscord />
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{
                            backgroundColor:'secondary.light',
                            width: { xs: '150px', md: '400px' },
                            fontSize: { xs: '10px', md: '30px' },
                            margin: 1,
                        }}
                    >
                        Join Our Twitter 
                        <IoLogoTwitter />
                    </Button>
                </Box>
                <Box
                    sx={{
                        background: 'linear-gradient(121.62deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%)',
                        mt: 1,
                        borderRadius: '10px',


                    }}
                >
                    <FaqWithAccordion />
                </Box>
            </Container>
            
            {/* {items.map(({id, item}: any) => <li key={id}>{item.title}</li>)} */}
        </Box>
    );
}