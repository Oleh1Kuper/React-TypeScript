import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { NavBar } from '../../components/NavBar/NavBar';

export const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Box padding="10px">
        <Outlet />
      </Box>
    </>
  );
};
