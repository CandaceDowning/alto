import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 72px;
    font-family: ${props => props.theme.fonts.groteskLight};
    margin: 0;
    line-height: 1em;
`;

export const H2 = styled.h2`
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.optRegular};
    margin: 0;
    line-height: 1em;


    font-size: 40px;


`;


export const PageTag = styled.p`
    font-family: ${props => props.theme.fonts.groteskRegular};
    font-size: 12px;
    color: ${props => props.theme.colors.sienna};
    letter-spacing: .1em;
    margin-top: 30px
`;














// all fonts declared as ptags for rendering in the style guide to assist development

export const POptBlack = styled.p`
    font-family: ${props => props.theme.fonts.optBlack};
`;

export const POptBlackItalic = styled.p`
    font-family: ${props => props.theme.fonts.optBlackItalic};
`;

export const POptBold = styled.p`
    font-family: ${props => props.theme.fonts.optBold};
`;

export const POptBoldItalic = styled.p`
    font-family: ${props => props.theme.fonts.optBoldItalic};
`;

export const POptDemiBoldItalic = styled.p`
    font-family: ${props => props.theme.fonts.optDemiBoldItalic};
`;

export const POptExtraBlack = styled.p`
    font-family: ${props => props.theme.fonts.optExtraBlack};
`;

export const POptItalic = styled.p`
    font-family: ${props => props.theme.fonts.optItalic};
`;

export const POptMedium = styled.p`
    font-family: ${props => props.theme.fonts.optMedium};
`;

export const POptMediumItalic = styled.p`
    font-family: ${props => props.theme.fonts.optMediumItalic};
`;

export const POptXBlackItalic = styled.p`
    font-family: ${props => props.theme.fonts.optXBlackItalic};
`;

export const POptRegular = styled.p`
    font-family: ${props => props.theme.fonts.optRegular};
`;



export const PGroteskBoldItalic = styled.p`
    font-family: ${props => props.theme.fonts.groteskBoldItalic};
`;

export const PGroteskLight = styled.p`
    font-family: ${props => props.theme.fonts.groteskLight};
`;

export const PGroteskLightItalic = styled.p`
    font-family: ${props => props.theme.fonts.groteskLightItalic};
`;

export const PGroteskRegular = styled.p`
    font-family: ${props => props.theme.fonts.groteskRegular};
`;

export const PGroteskRegularItalic = styled.p`
    font-family: ${props => props.theme.fonts.groteskRegularItalic};
`;

export const PGroteskScreen = styled.p`
    font-family: ${props => props.theme.fonts.groteskScreen};
`;