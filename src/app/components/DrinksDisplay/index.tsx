import React from "react";

export interface drinksDisplayProps {
  elements: Array<any> | any;
  onClick: any;
}

const DrinksDisplay = ({ elements = [], onClick }: drinksDisplayProps) => {
  return (
    <ul>
      {elements.map((el: any) => (
        <li data-key={el[1]} onClick={onClick}>
          {el[0]}
        </li>
      ))}
    </ul>
  );
};

export default DrinksDisplay;
