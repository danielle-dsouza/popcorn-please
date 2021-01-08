import styled from 'styled-components';
import Heading from './Texts/Heading';

const Navbar = () => {
  return (
    <NavWrapper>
      <Brand>
        <span>Popcorn</span> Please
      </Brand>
      <Heading>Who really deserves an Oscar?</Heading>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.background};
    padding-bottom: 8%;

    @media ${theme.media["tablet"]} {
      padding-bottom: 5%;
    }
  @media ${theme.media["desktop"]} {
    padding-bottom: 3%;
  }
    `}
`;

const Brand = styled.h1`
  ${({ theme }) => `
    font-family: ${theme.font.brand};
    font-size: 3.5rem;
    text-align: center;
    margin: 0;
    padding: 0;

    @media ${theme.media["tablet"]} {
        text-align: left;
    }
    
    @media ${theme.media["desktop"]} {
        text-align: left;
    }
    `}
`;

export default Navbar;
