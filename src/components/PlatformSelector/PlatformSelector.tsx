import React from 'react';
import {
  Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { usePlatforms } from '../../hooks/usePlatforms';
import getSelectedItem from '../../services/getSelectedItem';
import useGameQuery from '../../store/useGameQueryStore';

export const PlatformSelector: React.FC = () => {
  const { data, isLoading, error } = usePlatforms();
  const setPlatformId = useGameQuery(state => state.setPlatformId);
  const platformId = useGameQuery(state => state.gameQuery.platformId);
  const platform = getSelectedItem(data?.results, platformId);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton
        isLoading={isLoading}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
