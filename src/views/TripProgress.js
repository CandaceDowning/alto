//will contain driver information
import React from "react";
import styled from "styled-components";
import { PageTag } from '../styles/typography'
import { Container, Row, Column } from '../styles/layout';
import mission from '../data/mission.json';
import Button from '../components/Button';
import TimeAndDestination from '../components/TimeAndDestination';



export default function TripProgress() {
  return (
    <Container padding="0" minHeight="100vh"> 
      <MapWrapper id="MapWrapper">
        <TopOverlay/>
          <Map clas="map"src={require('../images/Map_overview.png')} alt="Trip Map"/>
        <BottomOverlay/>
        <LocateIcon src={require('../images/Map_icon.png')} alt="Locate Icon"/>
      </MapWrapper>
      <Container>
        <Row>
          <PageTag>
            YOUR Trip
          </PageTag>          
        </Row>
        <Row>
          <TimeAndDestination/>
        </Row>
        <Row margin="30px 0 30px">
          <Column width="100%" borderTop="true" align="flex-start">
            <DetailTitle>Current Vibe</DetailTitle>
            <Detail>{mission.vibe.name}</Detail>
          </Column>
        </Row>   
      </Container>
        <Button
          copy="Change Vehicle Vibe"
        />
    </Container>
  );
}

const MapWrapper = styled.div`
  margin: 0;
  position: relative;
  overflow: hidden;
  height: 400px;
  width: 100%;
  @media screen and (min-width: 767.98px){
    margin: 100px auto 0;
    width: 600px;
    height: 400px;
  }
`;

const Map = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .1s;
  @media screen and (min-width: 767.98px){
    width: 100%;
    height: auto;
    margin: auto;
  }
`;

const TopOverlay = styled.div`
  position: absolute;
  z-index: 50;
  top: -30px;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgb(247,243,239);
  background: linear-gradient(180deg, rgba(247,243,239,1) 0%, rgba(255,255,255,0) 99%);
`;

const BottomOverlay = styled.div`
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgb(247,243,239);
  background: linear-gradient(0deg, rgba(247,243,239,1) 0%, rgba(255,255,255,0) 99%);
`;

const LocateIcon = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 0;
  right: 20px;
  z-index: 99;
`;

const DetailTitle = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray4};
  margin: 10px 0 0;
  line-height: 1em;
  font-size: 16px;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Detail = styled.p`
  font-family: ${props => props.theme.fonts.groteskRegular};
  color: ${props => props.theme.colors.warmGray4};
  margin: 10px 0;
  line-height: 1em;
  font-size: 16px;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
  @media screen and (min-width: 500px){
    margin-bottom: 100px;   
  }
  @media screen and (max-width: 400px){
    margin-bottom: 50px;   
  }
`;