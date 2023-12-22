import React from 'react';

import { Flex } from '../../Shared.style';
import { useAppSelector } from '../../store/store';

export const Profile = () => {
  const user = useAppSelector((state) => state.store.user);

  return (
    <Flex style={{ flexDirection: 'column' }}>
      <h1>{user?.fullName}</h1>
    </Flex>
  );
};
