import styled from "styled-components";
import Text from "./Texts/Text";

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <AboutDiv>
          <Text color="accent" font="header" size="1.7rem" bold>
            Popcorn Please
          </Text>
          <Text color="background">
            <i>Popcorn Please</i> gives you the power of an Oscar judge! Search
            for movies, learn about movies, rave about movies, and choose the
            movies you think should be nominated for an award!
          </Text>
          <Text color="background">
            <i>
              Did we mention we <strong>love movies</strong>?
            </i>
          </Text>
        </AboutDiv>
        <LinkDiv>
          <Text color="background" bold>
            LEARN MORE
          </Text>
          <SLink target="_blank" href="https://github.com/danielle-dsouza/popcorn-please">
            <Text color="accent">Git Repo</Text>
          </SLink>
          <hr />
          <Text color="background">
            Hey! I'm <strong>Danielle</strong> and I love code. Lots of it! If
            you're interested in my <SLink style={{color: '#FFD369'}} target="_blank" href="https://github.com/danielle-dsouza">work</SLink>, let's{" "}
            <SLink style={{color: '#FFD369'}} target="_blank" href="https://www.linkedin.com/in/daniellejdsouza/">get it touch!</SLink>
          </Text>
        </LinkDiv>
      </Wrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.primary};
    color: ${theme.color.background};
    padding: 7% 5%;

    @media ${theme.media["tablet"]} {
      padding: 8% 10%;
    }

    @media ${theme.media["desktop"]} {
      padding: 5% 10%;
    }
  `}
`;

const Wrapper = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.primary};
    color: ${theme.color.background};

    @media ${theme.media["tablet"]} {
        display: flex;
        justify-content: space-between;
      }
  
      @media ${theme.media["desktop"]} {
        display: flex;
        justify-content: space-between;
      }
  `}
`;

const AboutDiv = styled.div`
  ${({ theme }) => `
    @media ${theme.media["tablet"]} {
        width: 65%;
    }
  
    @media ${theme.media["desktop"]} {
      width: 60%;
    }
    `}
`;

const LinkDiv = styled.div`
  ${({ theme }) => `


    @media ${theme.media["mobile"]} {
        padding-top: 5%;
    }

    @media ${theme.media["tablet"]} {
        width: 20%;
    }
  
    @media ${theme.media["desktop"]} {
      width: 20%;
    }
    `}
`;

const SLink = styled.a`
  text-decoration: none;
  padding-top: 2%;
`;

export default Footer;
