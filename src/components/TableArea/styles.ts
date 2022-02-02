import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #F8F8FF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
    
`;


//criar um type especifico para a prop width
export const TableHeadColumn = styled.th<{ width?: number }>`
//largura se tiver props colocar a width se nao tiver colocar auto
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;