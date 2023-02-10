import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;


export const TableHeader = styled.tr`padding: 10px 0;
background-color: ${props => props.theme.colors.aqua};
color: ${props => props.theme.colors.white};`;
  



  
