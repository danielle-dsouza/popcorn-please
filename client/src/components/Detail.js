import React from "react";
import styled from "styled-components";
import Heading from "./Texts/Heading";
import Text from "./Texts/Text";

const Detail = (props) => {
  const {
    title,
    year,
    plot,
    actors,
    writer,
    director,
    rating,
    boxOffice,
    awards,
    rated,
    genre,
  } = props.movie;

  const starInfo = { director, writer, actors };
  const statInfo = { boxOffice, awards };

  const movieStars = Object.keys(starInfo).map((key) => {
    return (
      <Text key={key}>
        <StyledSpan
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "black",
          }}
        >
          {key}:{" "}
        </StyledSpan>
        {props.movie[key]}
      </Text>
    );
  });

  const movieStats = Object.keys(statInfo).map((key) => {
    return (
      <Text key={key}>
        <StyledSpan
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "black",
          }}
        >
          {key}:{" "}
        </StyledSpan>
        {props.movie[key]}
      </Text>
    );
  });

  return (
    <div>
      <Heading>
        {title} ({year})
      </Heading>
      <Text size="1.2rem">
        <strong>IMDB Score: </strong>
        {rating}
      </Text>
      <Text size="1.2rem">
        <strong>Rating: </strong>
        {rated}
      </Text>

      { genre != "" ? <Text font="header" size="1.7rem" style={{ marginTop: "2%" }}>Do you love {genre}...</Text> : null }

      <Text>{plot}</Text>

      <Text font="header" size="1.7rem" style={{ marginTop: "2%" }}>
        Meet the Stars !
      </Text>
      <div>{movieStars}</div>

      <Text font="header" size="1.7rem" style={{ marginTop: "2%" }}>
        How Did {props.movie.title} Stack Up?
      </Text>
      <div>{movieStats}</div>
    </div>
  );
};

const StyledSpan = styled.span`
  ${({ theme }) => `
    color: ${theme.color.accent};
    font-weight: bold;
  `}
`;

export default Detail;
