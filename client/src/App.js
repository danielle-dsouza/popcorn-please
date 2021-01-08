import styled from "styled-components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import NomCard from "./components/NomCard";

import Heading from "./components/Texts/Heading";

const App = () => {
  return (
    <Background>
      <Layout>
        <Navbar />
        <SearchBar />
        <Container>
          <ResultsDiv>
            <Heading>Search Results</Heading>
            <ResultCard />
          </ResultsDiv>
          <NomsDiv>
            <Hr />
            <Heading>Your Picks</Heading>
            <NomCard />
          </NomsDiv>
        </Container>
      </Layout>
      <Footer />
    </Background>
  );
};

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
    ${({theme}) => `
      border-bottom: 5px solid ${theme.color.accent};
    `}
`;

export default App;
