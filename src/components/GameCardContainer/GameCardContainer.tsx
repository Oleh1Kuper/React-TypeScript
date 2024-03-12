import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const GameCardContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      transition="transform 0.3s"
      _hover={{
        transform: 'scale(1.05)',
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
