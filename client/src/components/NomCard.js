import styled from "styled-components";
import Text from "./Texts/Text";
import Button from "./Button";

const NomCard = () => {
  return (
    <CardWrapper>
      <ImgWrapper>IMG</ImgWrapper>
      <InfoDiv>
        <Text bold style={{ "textTransform": "uppercase" }}>
          Title
        </Text>
        <Text>Year</Text>
        <Button isInverted>Remove</Button>
      </InfoDiv>
    </CardWrapper>
  );
};

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

export default NomCard;
