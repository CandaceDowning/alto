import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.align ? props.align : 'center'};
    position: relative;
    width: 100%;
    margin: ${props => props.margin ? props.margin : '0'};
`;

// width
export const Column = styled.div`
    width: ${props => props.width ? props.width : 'auto'};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.align ? props.align : 'center'};
    border-top: ${props => props.borderTop ? '1px solid ' + props.theme.colors.gray1 : 'none'};
    margin: ${props => props.margin ? props.margin : '0 10px 0 0'};
`;

export const Break = styled.hr`
  width: ${props => props.width ? props.width : "50%"};
  border: none;
  border-top: 1px solid ${props => props.theme.colors.gray1};
  margin: ${props => props.margin ? props.margin : "20px auto 20px 0 "};

`;