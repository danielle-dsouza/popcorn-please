import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchBox placeholder="Search" />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
    ${({theme}) => `
    margin: 0 2%;
    display: flex;
    align-items: center;
    
    @media ${theme.media["tablet"]} {
        margin: 0;
    }

    @media ${theme.media["desktop"]} {
        margin: 0;
    }
    `}
`;

const SearchBox = styled.input`
    ${({ theme }) => `
    width: 90%;
    background-color: ${theme.color.background};
    border: 3px solid ${theme.color.primary};
    font-family: ${theme.font.default};
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 50px;
    padding: 15px;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.15);

    @media ${theme.media["tablet"]} {
        width: 100%;
        height: 40px;
    }

    @media ${theme.media["desktop"]} {
        width: 100%;
        height: 30px;
        font-size: 1/3rem;
    }
    `}
`;

export default SearchBar;
