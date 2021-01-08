import React from "react";
import styled from "styled-components";
import Text from "./Texts/Text";
import Button from "./Button";
import { DEL_NOM, NOM_ERR } from "../store/actions/actionsTypes";
import { connect } from "react-redux";

class NomCard extends React.Component {
  handleClick = () => {
    this.props.dispatch({
      type: DEL_NOM,
      payload: { title: this.props.title, year: this.props.year, poster: this.props.poster },
    });
  };

  render() {
    return (
      <CardWrapper>
        <ImgWrapper><img src={this.props.poster} /></ImgWrapper>
        <InfoDiv>
          <Text bold style={{ textTransform: "uppercase" }}>
            {this.props.title}
          </Text>
          <Text>{this.props.year}</Text>
          <Button isInverted onClick={this.handleClick}>Remove</Button>
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
    `}
`;

const ImgWrapper = styled.div`
  ${({ theme }) => `
  float: left;
  width: 150px;
  margin-right: 4%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 100px;
  }

  @media ${theme.media["tablet"]} {
    img {
      width: 100px;
    }
  }

  @media ${theme.media["desktop"]} {
    margin-right: 2%;

    img {
      width: 100px;
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

export default connect()(NomCard);
