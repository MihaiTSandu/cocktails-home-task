import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SearchByDrink from "./pages/SearchByDrink";
import SearchByIngredient from "./pages/SearchByIngredient";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <BrowserRouter>
      <StyledNav>
        <div>
          {" "}
          <Link to="/" style={linkStyle}>
            Search By Drink
          </Link>
        </div>

        <div>
          {" "}
          <Link to="/ingredients" style={linkStyle}>
            Search By Ingredient
          </Link>
        </div>
      </StyledNav>
      <Routes>
        <Route path="/" element={<SearchByDrink />} />
        <Route path="/ingredients" element={<SearchByIngredient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const StyledNav = styled.div`
  align-items: center;
  display: flex;
  gap: 45%;
  height: 6.25rem;
  justify-content: center;
`;
