import { Text, Heading, Box } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding="10px">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error'}
        </Text>
      </Box>
    </>
  );
};
