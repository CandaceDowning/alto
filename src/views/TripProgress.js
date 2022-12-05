//will contain driver information
import React from "react";
import styled from "styled-components";
import { H1, PageTag } from '../styles/typography'
import { Container, Row, Column, Break } from '../styles/layout';
import mission from '../data/mission.json'
import Button from '../components/Button';


export default function TripProgress() {
  return (
    <div>
      <MapWrapper>
        <img src={mission.vehicle.image} alt="Driver Portrait."/>
      </MapWrapper>

      <Container>
        <Row>
          <PageTag>
            YOUR VEHICLE
          </PageTag>          
        </Row>
        <Row>
          <H1>
            {mission.vehicle.license}
          </H1>
        </Row>


        <Row margin="30px 0 85px">
          <Column width="50%" borderTop="true" align="flex-start">
            <DetailTitle>Make / Model</DetailTitle>
            <Detail>{mission.vehicle.make}</Detail>
          </Column>
          <Column width="50%" borderTop="true" align="flex-start">
            <DetailTitle>Color</DetailTitle>
            <Detail>{mission.vehicle.color}</Detail>
          </Column>

        </Row>   

        <Button/>

      </Container>


    </div>
  );
}

const MapWrapper = styled.div`
  margin: 0;
  position: relative;
  overflow: hidden;
  height: 400px;
  width: 100%;

  img {
    height: 150px;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: all .1s;

  }
`;


const DetailTitle = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray4};
  margin: 10px 0 0;
  line-height: 1em;


  font-size: 12px;
`;


const Detail = styled.p`
  font-family: ${props => props.theme.fonts.groteskRegular};
  color: ${props => props.theme.colors.warmGray4};
  margin: 10px 0;
  line-height: 1em;


  font-size: 12px;
`;