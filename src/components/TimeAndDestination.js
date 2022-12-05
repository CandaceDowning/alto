//will contain both views of the summary, and the map
import React from "react";
import styled from "styled-components";
import { H1, H2 } from '../styles/typography'
import { Container, Row, Column } from '../styles/layout'


export default function TimeAndDestination() {

  return (
    <div>
        <Row align='flex-end'>
            <Time>5:39</Time><AmPm>PM</AmPm>
        </Row>
        <Row>
          <Details>Estimated arrival at DFW Int'l Airport - Terminal E</Details>
        </Row>
    </div>
    
  );
}



const Time = styled.h1`
    font-family: ${props => props.theme.fonts.groteskLight};
    color: ${props => props.theme.colors.warmGray4};
    margin: 0;
    line-height: 1em;

    font-size: 72px;
`;

const AmPm = styled.h1`
    font-family: ${props => props.theme.fonts.groteskLight};
    color: ${props => props.theme.colors.warmGray4};
    margin: 0 0 0 10px;
    line-height: 1em;


    font-size: 30px;
`;

const Details = styled.p`
    font-family: ${props => props.theme.fonts.groteskRegular};
    color: ${props => props.theme.colors.warmGray4};
    margin: 10px 0 30px;
    line-height: 1em;


    font-size: 14px;
`;
