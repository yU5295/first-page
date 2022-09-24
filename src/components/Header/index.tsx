import * as React from 'react';
import TopHeader from './TopHeader'
import AppBar from './AppBar';
import Content from './Content';
import ResponsiveAppBar from './AppBar1';

export default function Header() {
  return (
    <React.Fragment>
      <TopHeader />
      {/* <AppBar /> */}
      <ResponsiveAppBar />
      <Content />
    </React.Fragment>
  );
}
