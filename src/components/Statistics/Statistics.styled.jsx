import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  width: 100%;
  padding: 20px 0;

  background-color: ${props => props.theme.colors.white};

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.darkgrey};

  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  list-style: none;
`;

export const Item = styled.li`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 16px;
`;
