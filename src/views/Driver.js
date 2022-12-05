//will contain driver information
import React from "react";
import styled from "styled-components";
import { H1, PageTag } from '../styles/typography'
import { Container, Row, Break } from '../styles/layout';
import mission from '../data/mission.json'
import Button from '../components/Button';


export default function Driver() {
  return (
    <Container padding="0" minHeight="100vh">
      <DriverPhotoWrapper>
        <img src={mission.driver.image} alt="Driver Portrait."/>
      </DriverPhotoWrapper>
      <Container>
        <Row>
          <PageTag>
            YOUR DRIVER
          </PageTag>          
        </Row>
        <Row>
          <H1>
            {mission.driver.name}
          </H1>
        </Row>
        <Break margin="30px 0 5px"/>
        <Row margin= "0 0 55px">
          <Bio>
            {mission.driver.bio}
          </Bio>
        </Row>
      </Container>
        <Button
          copy="Contact Driver"
        />
    </Container>
  );
}

const DriverPhotoWrapper = styled.div`
  margin: 0;
  position: relative;
  overflow: hidden;
  height: 400px;
  width: 100%;
  img {
    height: 600px;
    width: auto;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -5%);
    transition: all .1s;
  }
`;

const Bio = styled.p`
  font-family: ${props => props.theme.fonts.groteskLight};
  color: ${props => props.theme.colors.warmGray3};
  margin: 5px 0;
  line-height: 1.2em;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  @media screen and (min-width: 500px){
    margin-bottom: 100px;   
  }
  @media screen and (max-width: 400px){
    margin-bottom: 0px;   
  }
`;
