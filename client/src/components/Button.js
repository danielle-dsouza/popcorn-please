import styled from "styled-components";

const Button = ({children, ...props}) => {
  return (
    <SButton {...props}>{children}</SButton>
  );
};

const SButton = styled.button`
    ${({ theme, ...props }) => `
        color: ${props.isInverted ? `${theme.color.primary}` : `${theme.color.background}`};
        font-size: 1.3rem;
        border: 1px solid ${props.isInverted ? 'grey' : `${theme.color.primary}`};
        width: 100%;
        font-family: ${theme.font.header};
        text-decoration: none;
        cursor: pointer;
        padding: 0.5rem 1.25rem;
        margin-top: 2%;
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
        background-color: ${props.isInverted ? `${theme.color.background}` : `${theme.color.primary}`};
        &:focus,
        &:active,
        &:hover {
            background-color: ${props.isInverted ? '#ebebeb' : null};
            color: ${props.isInverted ? null : `${theme.color.accent}`};
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `};
`;

export default Button;
