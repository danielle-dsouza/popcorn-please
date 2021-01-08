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
      payload: { title: this.props.title, year: this.props.year },
    });
  };

  render() {
    return (
      <CardWrapper>
        <ImgWrapper>IMG</ImgWrapper>
        <InfoDiv>
          <Text bold style={{ textTransform: "uppercase" }}>
            {this.props.title}
          </Text>
          <Text>{this.props.year}</Text>
          <Text>{this.props.plot}</Text>
          <Button onClick={this.handleClick}>Nominate</Button>
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
  float: left;
  width: 150px;
  background-color: green;
  margin-right: 4%;
`;

const InfoDiv = styled.div`
  float: right;
  width: 100%;
`;

export default connect()(ResultCard);