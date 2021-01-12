import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const Modal = (props) => (
  <div>
      <Backdrop show={props.showModal} clicked={props.closeModal} />
    <SModal
      style={{
        transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.showModal ? "1" : "0",
      }}
    >
      {props.children}
    </SModal>
  </div>
);

const SModal = styled.div`
  ${({ theme }) => `
        position: fixed;
        z-index: 200;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 3%;
        left: 15%;
        top 10%;
        box-sizing: border-box;
        transition: all 0.5s ease-out;

        @media ${theme.media["tablet"]} {
            width: 500px;
            left: calc(50% - 250px);
        }

    `}
`;

export default Modal;
