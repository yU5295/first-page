import * as React from 'react';
import styled from "styled-components";

export default function AppBar() {
  const Logo = styled.h1`
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 900;
		font-size: 25px;
		line-height: 82.88%;
		color: #FFFFFF;
		width: 20%;
		background: linear-gradient(135deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%);
		border-radius: 5px;
		padding-top: 32px;
		padding-bottom: 32px;
  `;
  const Wrapper = styled.div`
		background: #231D24;
		padding: 10px;
  `;
  const Container = styled.div`
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center
  `;
	const WalletWraaper = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
  `;
	const MidLetter = styled.div`
		font-family: 'Arvo';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		color: ${props => props.color};
		margin: 1px;
  `;

	const GradientButton = styled.button`
	background: 
	linear-gradient(#231D24, #231D24) padding-box,
	linear-gradient(60deg, #DB1DFB, #21BEE2) border-box;
	color: #FFFFFF;
	padding: 5px 20px;
	border: 1px solid transparent;
	border-radius: 40px;
	display: inline-block;
	font-size: 18px;
	`;
	const GradientLetter = styled.div`
		font-family: 'Arvo';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		background: linear-gradient(93.66deg, #DB1DFB -59.64%, #816AEF 48.28%, #21BEE2 160.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		border: 1px solid linear-gradient(93.66deg, #DB1DFB -59.64%, #816AEF 48.28%, #21BEE2 160.8%);
	`;

	const Navbar = styled.div`
		margin-left: 20px;
		display: flex;
		justify-content: space-around;
	`;
	const Link = styled.a`
        color: #FFFFFF;
        margin-right: 20px;
    `;

	const AppbarWrapper = styled.div`
		display: flex;
		align-items: center;
	`;
  return (
    <Wrapper>
			<Container>
				<AppbarWrapper>
					<Logo>LOGO</Logo> 
				  	<Navbar>
						<Link>Organizations</Link>
						<Link>Members</Link>
						<Link>Wiener winers</Link>
						<Link>How to/FAQ</Link>
					</Navbar>
				</AppbarWrapper>
				<div>
					<MidLetter color='#FFFFFF'>Collect Now</MidLetter>
					<GradientButton><GradientLetter>13 532$</GradientLetter></GradientButton>
					<MidLetter color='#FFFFFF'>Next Payment</MidLetter>
					<GradientLetter>14.12.2021</GradientLetter>
				</div>
			</Container>			
    </Wrapper>
  );
}