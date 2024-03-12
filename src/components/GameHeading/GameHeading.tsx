import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useGenre } from '../../hooks/useGenre';
import useGameQueryStore from '../../store/useGameQueryStore';

export const GameHeading: React.FC = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const platform = useGenre(platformId);

  return (
    <Heading fontSize="5xl" as="h1" marginY={5}>
      {`${platform?.name || ''} ${genre?.name || ''} Games`}
    </Heading>
  );
};
