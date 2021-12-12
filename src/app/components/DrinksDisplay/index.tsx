import React from "react";
import styled from "styled-components";

export interface drinksDisplayProps {
  elements: Array<any> | any;
  onClick: any;
}

const DrinksDisplay = ({ elements = [], onClick }: drinksDisplayProps) => {
  return (
    <DrinkDiv>
      {elements.map((el: any) => (
        <DrinkSpan data-key={el[1]} onClick={onClick}>
          {el[0]}
        </DrinkSpan>
      ))}
    </DrinkDiv>
  );
};

export default DrinksDisplay;

const DrinkSpan = styled.span`
  border-radius: 1rem;
  width: 14%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.primary};
  }
`;

const DrinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
