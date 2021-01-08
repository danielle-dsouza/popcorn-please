import styled from 'styled-components';

const Heading = ({children}) => {
    return (
        <SHeading>{ children }</SHeading>
    )
}

const SHeading = styled.h3`
  ${({ theme }) => `
    font-family: ${theme.font.header};
    font-size: 2rem;
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

export default Heading;