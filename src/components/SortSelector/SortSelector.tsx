import React from 'react';
import {
  Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../../store/useGameQueryStore';

export const SortSelector: React.FC = () => {
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-added', label: 'Date added' },
    { value: '-created', label: 'Date created' },
    { value: '-updated', label: 'Data updated' },
    { value: '-released', label: 'Release data' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)
    ?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${currentSortOrder || 'Relevance'}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
