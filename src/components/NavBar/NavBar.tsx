import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { ColorModeSwitch } from '../ColorModeSwitch/ColorModeSwitch';
import { SearchInput } from '../SearchInput/SearchInput';

export const NavBar: React.FC = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" alt="Logo" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
