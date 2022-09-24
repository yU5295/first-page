import * as React from 'react';
import styled from 'styled-components';
import { Box, Paper, Container, Typography } from '@mui/material';

export default function TopContent() {
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

    const TopContentWrapper = styled.div`
        background: linear-gradient(92.79deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
    `;
    const SubContent = styled.div`
        width: 70%;
        margin-top: 15px;
        margin-bottom: 10px;
        background: #231D24;
        border-radius: 10px;
        color: #FFFFFF;
    `;
    const SubContentWrapper = styled.div`
        padding: 50px;
    `;
    const SubContentHeader = styled.div`
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        text-align: center;
    `;
    const SubContentParagraph = styled.div`
        margin-top: 20px;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-align: left;
    `;

    return(
        <Box
            sx={{
                background: 'linear-gradient(135deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%)',
                pt: 2,
                pb: 2,
            }}
        >
            <Container maxWidth="lg">
               {items.map((item) => {
                    return(
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: 1,
                                background: '#231D24',
                                borderRadius: '10px',
                                padding: { xs: 1, md: 2},

                            }}
                        >
                            <Typography
                                variant="h1"
                                noWrap
                                sx={{
                                    mr: 2,
                                    fontFamily: 'Arvo',
                                    fontSize: '25px',
                                    color: 'inherit',
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'Arvo',
                                    fontSize: '20px',
                                    color: 'inherit',
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    );
                })} 
            </Container>
            
            {/* {items.map(({id, item}: any) => <li key={id}>{item.title}</li>)} */}
        </Box>
    );
}