import * as React from 'react';
import styled from "styled-components";

export default function TopHeader() {
  const NextVote = styled.div`
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    background: linear-gradient(92.84deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%);
    text-align: center;
  `;

  return (
    <NextVote>NEXT VOTE: 01.13.22</NextVote>
  );
}