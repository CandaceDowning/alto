//will contain both views of the summary, and the map
import React from "react";
import styled from "styled-components";
import { Row } from '../styles/layout'
import mission from '../data/mission.json'
import moment from 'moment'

export default function TimeAndDestination() {

  return (
    <div>
        <Row align='flex-end'>
            <Time>{moment(mission.trip.estimated_arrival).format('h:mm')}</Time><AmPm>{moment(mission.trip.estimated_arrival).format('A')}</AmPm>
        </Row>
        <Row>
          <Details>{mission.trip.dropoff_location.name}</Details>
        </Row>
    </div>
    
  );
}

const Time = styled.h1`
    font-family: ${props => props.theme.fonts.groteskLight};
    color: ${props => props.theme.colors.warmGray4};
    margin: 0;
    line-height: 1em;
    font-size: 80px;
    @media screen and (max-width: 768px){
      font-size: 72px;
    }
`;

const AmPm = styled.h1`
    font-family: ${props => props.theme.fonts.groteskLight};
    color: ${props => props.theme.colors.warmGray4};
    margin: 0 0 0 10px;
    line-height: 1em;
    font-size: 60px
    @media screen and (max-width: 768px){
      font-size: 30px;
    }
`;

const Details = styled.p`
    font-family: ${props => props.theme.fonts.groteskRegular};
    color: ${props => props.theme.colors.warmGray4};
    margin: 10px 0 30px;
    line-height: 1em;
    font-size: 24px;
    @media screen and (max-width: 768px){
      font-size: 14px;
    }
`;
