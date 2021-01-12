import React from "react";
import styled from "styled-components";

const banner = () => {
  return <SDiv>You have selected 5 movies!!!</SDiv>;
};

const SDiv = styled.div`
  ${({ theme }) => `
        position: fixed;
        z-index: 150;
        background-color: ${theme.color.accent};
        font-family: ${theme.font.header};
        font-size: 1.2rem;
        width: 100%;
        color: black;
        top: 0;
        left: 0;
        text-align: center;
        padding: 7px 0;
        transition: all 0.5s ease-out;
    `}
`;

export default banner;
