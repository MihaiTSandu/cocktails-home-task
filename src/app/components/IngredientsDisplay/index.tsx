import React from "react";
import styled from "styled-components";

const IngredientsDisplay = (elements = [], onClick: any) => {
  return (
    <StyledDiv>
      {elements.map((el: any) => (
        <StyledSpan>{el}</StyledSpan>
      ))}
    </StyledDiv>
  );
};

export default IngredientsDisplay;

const StyledDiv = styled.div``;

const StyledSpan = styled.span``;
