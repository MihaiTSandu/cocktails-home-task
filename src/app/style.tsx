import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  height: 6.25rem;
`;

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledRoute = styled(Link)`
  color: black;
  text-decoration: none;
`;
