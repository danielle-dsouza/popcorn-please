import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import NomCard from "./components/NomCard";

import Heading from "./components/Texts/Heading";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const result = this.props.search;
    const nomList = this.props.nominations.map((nom) => {
      return <NomCard key={nom.title} title={nom.title} year={nom.year} />;
    });

    return (
      <Background>
        <Layout>
          <Navbar />
          <SearchBar />
          <Container>
            <ResultsDiv>
              <Heading>Search Results</Heading>
              {result.title !== "" ? (
                <ResultCard
                  title={result.title}
                  year={result.year}
                  plot={result.plot}
                />
              ) : (
                <div>TODO</div>
              )}
            </ResultsDiv>
            <NomsDiv>
              <Hr />
              <Heading>Your Picks</Heading>
              { nomList }
            </NomsDiv>
          </Container>
        </Layout>
        <Footer />
      </Background>
    );
  }
}

const Background = styled.div`
  ${({ theme }) => `
  background-color: ${theme.color.background};
  min-height: 100vh;
  `}
`;

const Layout = styled.div`
  ${({ theme }) => `
    padding: 7% 5%;

    @media ${theme.media["tablet"]} {
      padding: 8% 10%;
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
