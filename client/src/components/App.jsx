import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "../themes";
import ThemeToggler from "./ThemeToggler.jsx";
import useDarkTheme from "../hooks/useDarkTheme";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Home from "../routes/Home.jsx";
import Text from "../routes/Text.jsx";

const Header = styled.header`
box-sixing: border-box;
background: #3a6ea5;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0;
padding: 0 20px;
position: sticky;
top: 0;
height: 10vh;
`

const AppContainer = styled.div`
margin: 0 auto;
max-width: 1000px;
height: 90vh;
padding: 0 20px;
`

const App = () => {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header>
          <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>jojoGPT</Link></h1>
          <nav>
            <Link to="/text" style={{ textDecoration: 'none', color: 'inherit' }}>Text</Link>
          </nav>
          <ThemeToggler themeToggler={themeToggler} />
        </Header>
        <div>
          <AppContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="text" element={<Text />} />
            </Routes>
          </AppContainer>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;