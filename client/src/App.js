import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import NomCard from "./components/NomCard";
import Instructions from "./components/Instructions";

import Heading from "./components/Texts/Heading";
import Text from "./components/Texts/Text";
import lgImg from "./assets/bg-desktop.svg";
import smImg from "./assets/bg-tablet.svg";

import { connect } from "react-redux";

import Modal from "./components/Modal/Modal";
import Detail from "./components/Detail";

import Banner from "./components/Banner";

class App extends React.Component {
  state = {
    show: false,
  };

  render() {
    const result = this.props.search;
    // const { title, poster, ...details } = result;
    const noms = this.props.nominations;
    const nomLength = noms.length;
    let isDisabled;
    let titles = [];

    noms.map((nom) => {
      console.log(nom.title);
      titles = [...titles, nom.title];
      return null;
    });

    if (nomLength === 5 || nomLength > 5) {
      isDisabled = true;
    } else if (titles.includes(result.title)) {
      isDisabled = true;
    } else {
      isDisabled = false;
    }

    const nomList = noms.map((nom) => {
      return (
        <NomCard
          key={nom.title}
          title={nom.title}
          year={nom.year}
          poster={nom.poster}
        />
      );
    });

    const handleShow = () => {
      this.setState({
        show: true,
      });
    };

    const handleCloseModal = () => {
      this.setState({
        show: false,
      });
    };

    return (
      <Background>
        { nomLength === 5 ? <Banner showBanner={this.state.showBanner} /> : null}
        <Modal showModal={this.state.show} closeModal={handleCloseModal}>
          <Detail movie={result} />
        </Modal>
        <Layout lgImg={lgImg} smImg={smImg}>
          <Navbar />
          <SearchBar />
          <Container>
            <ResultsDiv>
              <Heading>Search Results</Heading>
              {result.title !== "" ? (
                <div>
                  <ResultCard
                    title={result.title}
                    year={result.year}
                    plot={result.plot}
                    poster={result.poster}
                    disabled={isDisabled}
                    clicked={handleShow}
                  />
                </div>
              ) : (
                <Instructions />
              )}
            </ResultsDiv>
            <NomsDiv>
              <Hr />
              <Heading>Your Picks</Heading>
              {nomLength > 0 ? (
                nomList
              ) : (
                <Text>Lookin' a little empty here!</Text>
              )}
            </NomsDiv>
          </Container>
        </Layout>
        <Footer />
      </Background>
    );
  }
}

const Background = styled.div`
  min-height: 100vh;
`;

const Layout = styled.div`
  ${({ theme, lgImg, smImg }) => `
    padding: 7% 5%;
    background-image: url(${lgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media ${theme.media["tablet"]} {
      padding: 8% 10%;
      background-image: url(${smImg});
    }

    @media ${theme.media["desktop"]} {
      padding: 5% 10%;
    }
  `}
`;

const Container = styled.div`
  ${({ theme }) => `

    @media ${theme.media["tablet"]} {
      display: flex;
      flex-direction: row;
    }

    @media ${theme.media["desktop"]} {
      display: flex;
      flex-direction: row;
    }
  `}
`;

const ResultsDiv = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin: 7% 0;

    @media ${theme.media["tablet"]} {
      float: left;
      width: 60%;
    }

    @media ${theme.media["desktop"]} {
      margin: 3% 0;
      float: left;
      width: 65%;
    }
  `}
`;

const NomsDiv = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin: 7% 0;

    @media ${theme.media["tablet"]} {
      float: right;
      width: 35%;
      margin-left: 35px;
    }

    @media ${theme.media["desktop"]} {
      margin: 3% 0;
      float: right;
      width: 33%;
      margin-left: 35px;
    }
  `}
`;

const Hr = styled.hr`
  ${({ theme }) => `
      border-bottom: 5px solid ${theme.color.accent};
    `}
`;

const mapStateToProps = (state) => {
  return {
    search: state.search,
    nominations: state.nominations,
  };
};

export default connect(mapStateToProps)(App);
