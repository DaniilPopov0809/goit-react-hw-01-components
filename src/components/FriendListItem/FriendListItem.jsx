import {
  Item,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      {isOnline ? (
        <StatusOnline></StatusOnline>
      ) : (
        <StatusOffline></StatusOffline>
      )}

      <Avatar src={avatar} alt="User avatar" width={48} />
      <Name>{name}</Name>
    </Item>
  );
};
