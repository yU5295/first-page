import * as React from 'react';
import styled from "styled-components";
import Header from "../components/Header"
import TopContent from '../components/Content/TopContent';
import BottomContent from '../components/Content/BottomContent';
import Footer from '../components/Footer';


export default function Faq() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  `;
  return (
    <React.Fragment>
      <Header />
      <TopContent />
      <BottomContent />
      <Footer />
    </React.Fragment>
  );
}
