//will contain both views of the summary, and the map
import React from "react";
import styled from "styled-components";
import { H2 } from '../styles/typography';
import { Container, Row, Column, Break } from '../styles/layout';
import TimeAndDestination from '../components/TimeAndDestination';
import Button from '../components/Button';
import mission from '../data/mission.json'



export default function TripSummary() {

  return (
    <Container minHeight="100vh">
      <Row>
        <TitleWrapper>
          <H2>Your Trip</H2>
        </TitleWrapper>
      </Row>
      <TimeAndDestination/>
      <Row>
        <Column width="33%" borderTop="true" align="flex-start">
          <DetailTitle>Estimated Fare:</DetailTitle>
          <Detail>${mission.trip.estimated_fare_min/100} - ${mission.trip.estimated_fare_max/100}</Detail>
        </Column>
        <Column width="33%" borderTop="true" align="flex-start">
          <DetailTitle>Passengers:</DetailTitle>
          <Detail>{mission.trip.passengers_min} - {mission.trip.passengers_max}</Detail>
        </Column>
        <Column width="33%" borderTop="true" align="flex-start">
          <DetailTitle>Payment:</DetailTitle>
          <Detail>{mission.trip.payment}</Detail>
        </Column>
      </Row>   
      <Row direction="column" align="flex-start" margin="50px 0 10px">
          <PickupAddress>{mission.trip.pickup_location.street_line1}</PickupAddress>
          <PickupAddress>{mission.trip.pickup_location.city}, {mission.trip.pickup_location.state} {mission.trip.pickup_location.zipcode}</PickupAddress>
      </Row>
      <Break width="30%"/>
      <Row direction="column" align="flex-start" >
        <DropoffAddress>{mission.trip.dropoff_location.name}</DropoffAddress>
        <DropoffAddress>{mission.trip.dropoff_location.street_line1}</DropoffAddress>
        <DropoffAddress>{mission.trip.dropoff_location.city}, {mission.trip.dropoff_location.state} {mission.trip.dropoff_location.zipcode}</DropoffAddress>
      </Row>
      <Row>
        <Notes>
          {mission.trip.notes} 
        </Notes>
      </Row>
      <Button
        copy='Cancel Trip'
      />
    </Container>
  );
}


const TitleWrapper = styled.div`
  margin: 130px 0 50px;
`;

const DetailTitle = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray3};
  margin: 10px 0 0;
  line-height: 1em;
  font-size: 16px;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Detail = styled.p`
  font-family: ${props => props.theme.fonts.groteskRegular};
  color: ${props => props.theme.colors.warmGray3};
  margin: 10px 0;
  line-height: 1em;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }

`;

const PickupAddress = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray3};
  margin: 0;
  line-height: 1.2em;
  text-align: left;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
`;

const DropoffAddress = styled.p`
  font-family: ${props => props.theme.fonts.groteskRegular};
  color: ${props => props.theme.colors.warmGray3};
  margin: 0;
  line-height: 1.2em;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
`;


const Notes = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray3};
  margin: 20px 0;
  line-height: 1.2em;
  max-width: 70%;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  @media screen and (min-width: 500px){
    margin-bottom: 100px;   
  }
  @media screen and (max-width: 400px){
    margin-bottom: 75px;   
  }
`;
