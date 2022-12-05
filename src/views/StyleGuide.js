//will contain driver information
import React from "react";
import styled from "styled-components";
import { Container} from '../styles/layout'
import { 
    H1,
    POptBlack,
    POptBlackItalic,
    POptBold,
    POptBoldItalic,
    POptDemiBoldItalic,
    POptExtraBlack,
    POptItalic,
    POptMedium,
    POptMediumItalic,
    POptXBlackItalic,
    POptRegular,
    PGroteskBoldItalic,
    PGroteskLight,
    PGroteskLightItalic,
    PGroteskRegular,
    PGroteskRegularItalic,
    PGroteskScreen

} from '../styles/typography'

export default function StyleGuide() {

  return (
    <StyleGuideWrapper>
        <Container>
            <H1>Styles</H1>
            <ColorsWrapper>
                <Color bgColor="background" color="black">
                    background
                </Color>
                <Color bgColor="black" color="white">
                    black
                </Color>
                <Color bgColor="gray3" color="white">
                    gray3
                </Color>
                <Color bgColor="gray2" color="white">
                    gray2
                </Color>
                <Color bgColor="gray1" color="black">
                    gray1
                </Color>
                <Color bgColor="white" color="black">
                    white
                </Color>
                <Color bgColor="warmGray4" color="white">
                    warmGray4
                </Color>
                <Color bgColor="warmGray3" color="white">
                    warmGray3
                </Color>
                <Color bgColor="warmGray2" color="black">
                    warmGray2
                </Color>
                <Color bgColor="warmGray1" color="black">
                    warmGray1
                </Color>
                <Color bgColor="sienna" color="black">
                    sienna
                </Color>
                <Color bgColor="transparent" color="black">
                    transparent
                </Color>
            </ColorsWrapper>

            <POptBlack>OptBlack</POptBlack>
            <POptBlack>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptBlack>

            <POptBold>OptBold</POptBold>
            <POptBold>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptBold>

            <POptExtraBlack>OptExtraBlack</POptExtraBlack>
            <POptExtraBlack>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptExtraBlack>
            
            <POptMedium>OptMedium</POptMedium>
            <POptMedium>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptMedium>

            <POptRegular>OptRegular</POptRegular>
            <POptRegular>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptRegular>

            <PGroteskLight>GroteskLight</PGroteskLight>
            <PGroteskLight>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskLight>

            <PGroteskRegular>GroteskRegular</PGroteskRegular>
            <PGroteskRegular>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskRegular>

            <PGroteskScreen>GroteskScreen</PGroteskScreen>
            <PGroteskScreen>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskScreen>

            <POptBlackItalic>OptBlackItalic</POptBlackItalic>
            <POptBlackItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptBlackItalic>

            <POptBoldItalic>OptBoldItalic</POptBoldItalic>
            <POptBoldItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptBoldItalic>

            <POptItalic>OptItalic</POptItalic>
            <POptItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptItalic>

            <POptDemiBoldItalic>OptDemiBoldItalic</POptDemiBoldItalic>
            <POptDemiBoldItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptDemiBoldItalic>

            <POptMediumItalic>OptMediumItalic</POptMediumItalic>
            <POptMediumItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptMediumItalic>

            <POptXBlackItalic>OptXBlackItalic</POptXBlackItalic>
            <POptXBlackItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</POptXBlackItalic>

            <PGroteskBoldItalic>GroteskBoldItalic</PGroteskBoldItalic>
            <PGroteskBoldItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskBoldItalic>

            <PGroteskLightItalic>GroteskLightItalic</PGroteskLightItalic>
            <PGroteskLightItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskLightItalic>

            <PGroteskRegularItalic>GroteskRegularItalic</PGroteskRegularItalic>
            <PGroteskRegularItalic>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890</PGroteskRegularItalic>

        </Container>
                
    </StyleGuideWrapper>
    
  );
}

const StyleGuideWrapper = styled.div`
    padding: 100px 0 50px;
`;

const ColorsWrapper = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Color = styled.div`
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 2px solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors[props.bgColor]};
    color: ${props => props.theme.colors[props.color]};
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;