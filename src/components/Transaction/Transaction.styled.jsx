import styled from '@emotion/styled';

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
  background-color: ${props => props.theme.colors.white};

  &:nth-of-type(even) {
  background-color: ${props => props.theme.colors.lightgrey};`;

export const TableCell = styled.td`
  padding: 10px 0;
  width: calc(100% / 3);

  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  color: ${props => props.theme.colors.middlegrey};
`;
