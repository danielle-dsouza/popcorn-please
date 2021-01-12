import React from "react";
import styled from 'styled-components';
import Heading from "./Texts/Heading";
import Text from "./Texts/Text";

const Detail = (props) => {
  console.log(props.movie);

  const movieDetails = Object.keys(props.movie).map((key) => {
    return (
      <Text key={key}><StyledSpan style={{fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>{key}: </StyledSpan>{props.movie[key]}</Text>
    );
  });

  return (
    <div>
      <Heading>{props.title}</Heading>
      <div>{movieDetails}</div>
    </div>
  );
};

const StyledSpan = styled.span`

`;

export default Detail;
