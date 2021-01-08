import React from "react";
import styled from "styled-components";
import Text from "./Texts/Text";

const Instructions = () => {
  return (
    <InfoWrapper>
      <Text>No search results! Let's change that!</Text>
      <SText>
        Input a <strong>movie title</strong> into the search bar above and we'll return the best
        match. Choose up to 5 movies you would nominate for an award!
      </SText>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  ${({ theme }) => `

    @media ${theme.media["tablet"]} {
        
    }
  
    @media ${theme.media["desktop"]} {

    }
    `}
`;

const SText = styled(Text)`
    margin-top: 2%;
`;

export default Instructions;
