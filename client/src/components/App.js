import React,{useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import Header from './Header';
import MainContent from './MainContent';

const Container=styled.div`
  display:flex;
  min-height:100vh;
  flex-direction:column;
`;
export default () => {
  const [Auth,setAuth]=useState(false);
  const successAuth=()=>{
    setAuth(!Auth);
  }
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
          <Container>
            <Header Auth={Auth} successAuth={successAuth} />
            <MainContent Auth={Auth}/>
          </Container>
      </>
    </ThemeProvider>
  );
};