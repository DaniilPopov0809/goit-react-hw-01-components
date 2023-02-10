import styled from '@emotion/styled';

export const Container = styled.div`
  width: 250px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
  background-color: f2f3f4;
  border: 1px solid ${props => props.theme.colors.grey};

  color: ${props => props.theme.colors.darkgrey};

  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;

  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 10px;
  background-color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;

  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;

  color: ${props => props.theme.colors.middlegrey};
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.middlegrey};
`;

export const Stats = styled.div`
  display: flex;

  padding: 0;

  list-style: none;
  border-top: 1px solid ${props => props.theme.colors.grey};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc((100% / 3));
  padding: 20px 0;

  font-size: 14px;

  background-color: ${props => props.theme.colors.lightgrey};

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.grey};
`;

export const Label = styled.span`
  display: block;

  color: ${props => props.theme.colors.middlegrey};
`;

export const Quantity = styled.span`
  display: block;

  font-weight: 700;
`;
