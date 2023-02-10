import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;

  padding: 5px 10px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StatusOnline = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.green};
`;

export const StatusOffline = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.red};
`;

export const Avatar = styled.img`
  border-radius: 5px;
  margin-right: 10px;
`;

export const Name = styled.p`
  padding: 0 5px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.darkgrey};
`;
