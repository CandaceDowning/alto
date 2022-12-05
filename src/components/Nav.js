//bubble navigation at top right of all views
import React from "react";
import styled from "styled-components";
import { Container, Row, Column } from '../styles/layout'
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
    <NavWrapper id="NavWrapper">
        <Container id="NavContainer">
            <Row align="flex-start" justify="center" id="NavRow">
                <Column justify="center" width="100%">
                    <Title>ALTO</Title>
                </Column>
                <MobileLinkWrapper>
                    <LinkBubble to="/trip-summary">
                        
                    </LinkBubble>
                    <LinkBubble to="/driver">
                        
                    </LinkBubble>
                    <LinkBubble to="/vehicle">
                        
                    </LinkBubble>
                    <LinkBubble to="/trip-progress">
                        
                    </LinkBubble>
                    <LinkBubble disabled="true" to="/">
                        
                    </LinkBubble>     
                </MobileLinkWrapper>

            </Row>


        </Container>




    </NavWrapper>
  );
}



const NavWrapper = styled.div`
    background-color: ${props => props.theme.colors.transparent};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    z-index: 999;
`;

const Title = styled.p`
    font-family: ${props => props.theme.fonts.optRegular};
    text-align: center;
    letter-spacing: .2em;
    

    font-size: 22px;

`;


// const LinkWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

const MobileLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35%;
    right: 0;
`;

const LinkItem = ({ className, children, to, onClick, key }) => (
    <NavLink className={className} to={to} onClick={onClick} key={key}>
      {children}
    </NavLink>
  );

const LinkBubble = styled(LinkItem)`
    width: 5px;
    height 5px;
    margin: 5px 0;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.gray1};
    background-color: ${props => props.disabled ? props.theme.colors.transparent : props.theme.colors.gray1};
    transition: all .2s;
    z-index: 1000;
    &.active {
        background-color: ${props => props.theme.colors.gray3};
        border-color: ${props => props.theme.colors.gray3};
    }
`;