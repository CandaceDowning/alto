// one button with diff text depending on the view. Cancel trip, contact driver, identify vehicle, change vehicle vibe

import React from "react";
import styled from "styled-components";



export default function Button () {

  return (
    <div>
        <StyledButton>
            Cancel Trip
        </StyledButton>
    </div>
  );
}

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    letter-spacing: 0.1rem;
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border: 1px solid ${props => props.theme.colors.gray1};
    color: ${props => props.theme.colors.gray1};
    background-color: ${props => props.theme.colors.transparent};
    font-family: ${props => props.theme.fonts.groteskRegular};
    text-transform: uppercase;
    transition: all .2s;
    margin: 30px auto;
    &:hover {
        background-color: ${props => props.theme.colors.sienna};
        border-color: ${props => props.theme.colors.sienna};
        color: ${props => props.theme.colors.white};
        transition: all .2s;
    }
    &:active {
        background-color: ${props => props.disabled ? props.theme.colors.black : props.theme.colors.sienna};
        transition: all .2s;
    }

`;
