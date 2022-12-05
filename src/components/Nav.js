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
                <DesktopLinkWrapper>
                    <LinkText to="/trip-summary">
                        Trip Summary
                    </LinkText>
                    <LinkText to="/driver">
                        Driver
                    </LinkText>
                    <LinkText to="/vehicle">
                        Vehicle
                    </LinkText>
                    <LinkText to="/trip-progress">
                        Trip Progress
                    </LinkText>
                    <LinkText disabled="true" to="/">
                        Style Guide
                    </LinkText> 
                </DesktopLinkWrapper>
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
    @media screen and (min-width: 992px){
        & ${Container} {
            max-width: 700px; 
        }
        & ${Column} {
            align-items: flex-start;
            width: 20%;
        }
    }
`;

const Title = styled.p`
    font-family: ${props => props.theme.fonts.optRegular};
    text-align: center;
    letter-spacing: .2em;
    font-size: 30px;
    @media screen and (max-width: 768px){
        font-size: 22px;
      }
`;

const DesktopLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
   
    @media screen and (max-width: 991.98px){
        display: none
    }
`;

const MobileLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35%;
    right: 0;
    @media screen and (min-width: 992.98px){
        display: none
    }
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

const LinkText = styled(LinkItem)`
    font-family: ${props => props.theme.fonts.optMedium};
    color: ${props => props.theme.colors.gray3};
    font-size: 18px;
    text-decoration: none;
    margin: 0 10px;
    &.active {
        color: ${props => props.theme.colors.sienna};
    }
`;