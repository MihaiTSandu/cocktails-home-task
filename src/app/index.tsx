import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import SearchByDrink from "./pages/SearchByDrink";
import SearchByIngredient from "./pages/SearchByIngredient";
import { GlobalStyle } from "./styles/global-styles";
import { themes } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <BrowserRouter>
        <StyledNav>
          <StyledLink>
            {" "}
            <StyledRoute to="/">Search By Drink</StyledRoute>
          </StyledLink>

          <StyledLink>
            {" "}
            <StyledRoute to="/ingredients">Search By Ingredient</StyledRoute>
          </StyledLink>
        </StyledNav>
        <Routes>
          <Route path="/" element={<SearchByDrink />} />
          <Route path="/ingredients" element={<SearchByIngredient />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  height: 6.25rem;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledRoute = styled(Link)`
  color: black;
  text-decoration: none;
`;
