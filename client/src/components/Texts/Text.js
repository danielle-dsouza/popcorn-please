import styled from "styled-components";

const Text = ({ children, ...props }) => {
  return <SText {...props}>{children}</SText>;
};

const SText = styled.h3`
  ${({ theme, ...props }) => `
    font-family: ${theme.font[props.font] || theme.font.default}};
    font-size: ${props.size || '1rem' };
    text-align: ${props.align || 'left' };
    color: ${theme.color[props.color] || theme.color.primary };
    margin: 0;
    padding: 0;
    font-weight: ${props.bold ? 'bold' : 'normal'}
    `}
`;

export default Text;
