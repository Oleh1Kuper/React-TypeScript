import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  term: string;
  children: React.ReactNode | React.ReactNode[];
};

export const DefinitionItem: React.FC<Props> = ({ children, term }) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" color="gray.600" fontSize="md">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
