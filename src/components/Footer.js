// footer with two logos, destination, eta, or en route if on the map view of the trip
import React from "react";
import styled from "styled-components";
import { Container, Row, Column } from '../styles/layout'
import mission from '../data/mission.json'
import moment from 'moment'

export default function Footer() {

  return (
    <FooterWrapper>
        <Container>
            <Row>
                <Column margin="0" width="25%">
                    <FooterIcon src={require('../images/Profile_icon.png')} alt="Profile icon."/>
                </Column>
                <Column margin="0" width="50%">
                    <Destination>
                        {mission.trip.dropoff_location.name.substring(0, mission.trip.dropoff_location.name.indexOf('-')) }
                    </Destination>
                    <Eta>
                        ETA: {moment(mission.trip.estimated_arrival).format('h:mm A')}
                    </Eta>
                </Column>
                <Column margin="0" width="25%">
                    <FooterIcon src={require('../images/Vibes_icon.png')} alt="Vibes icon."/>
                </Column>
            </Row>
            <Progress/>
        </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
    background-color: ${props => props.theme.colors.transparent};
    border-top: 1px solid ${props => props.theme.colors.gray1};
    border-bottom: 1px solid ${props => props.theme.colors.gray1};
    padding: 10px 0;
    position: sticky;
    bottom: 0;
    left: 0;
    height: 60px;
    background-color: ${props => props.theme.colors.background};
`;

const FooterIcon = styled.img`
    width: 35px;
    height: 35px;
`;

const Destination = styled.p`
  font-family: ${props => props.theme.fonts.groteskRegular};
  color: ${props => props.theme.colors.warmGray3};
  margin: 0;
  line-height: 1.2em;
  letter-spacing: .1em;
  font-size: 14px;
`;

const Eta = styled.p`
    font-family: ${props => props.theme.fonts.groteskLight};
    color: ${props => props.theme.colors.warmGray3};
    margin: 0;
    line-height: 1.2em;
    text-align: left;
    font-size: 14px;
`;

const Progress = styled.div`
    width: 40%;
    height: 5px;
    background-color: ${props => props.theme.colors.black};
    margin: 15px auto;
    border-radius: 5px
`;
