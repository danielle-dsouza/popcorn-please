import React from "react";
import styled from "styled-components";
import Text from "./Texts/Text";
import Button from "./Button";
import { ADD_NOM, NOM_ERR } from "../store/actions/actionsTypes";
import { connect } from "react-redux";

class ResultCard extends React.Component {
  handleClick = () => {
    this.props.dispatch({
      type: ADD_NOM,
      payload: { title: this.props.title, year: this.props.year, poster: this.props.poster },
    });
  };

  render() {
    return (
      <CardWrapper>
        {/* <ImgWrapper>{this.props.poster}</ImgWrapper> */}
        <ImgWrapper><img alt="Movie Poster" src={this.props.poster} /></ImgWrapper>
        <InfoDiv>
          <Text bold style={{ textTransform: "uppercase" }}>
            {this.props.title}
          </Text>
          <Text>{this.props.year}</Text>
          <Text>{this.props.plot}</Text>
          <Button disabled={this.props.disabled} onClick={this.handleClick}>Nominate</Button>
          <Button onClick={this.props.clicked}>Learn More</Button>
        </InfoDiv>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  ${({ theme }) => `
    border: 1px solid grey;
    padding: 2%;
    display: flex;
    flex-direction: row;

    @media ${theme.media["tablet"]} {
        
    }
  
    @media ${theme.media["desktop"]} {

    }
    `}
`;

const ImgWrapper = styled.div`
  ${({ theme }) => `
  float: left;
  margin-right: 4%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 150px;
  }

  @media ${theme.media["tablet"]} {
    img {
      width: 150px;
    }
  }

  @media ${theme.media["desktop"]} {
    img {
      width: 125px;
    }
  }
  `}
`;

const InfoDiv = styled.div`
  float: right;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export default connect()(ResultCard);
