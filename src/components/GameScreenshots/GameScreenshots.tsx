import React from 'react';
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../../hooks/useScreenshots';

type Props = {
  id: number;
};

export const GameScreenshots: React.FC<Props> = ({ id }) => {
  const { data, isLoading, error } = useScreenshots(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return error.message;
  }

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  );
};
