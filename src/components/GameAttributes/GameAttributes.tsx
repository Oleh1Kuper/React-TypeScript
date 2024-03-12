import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../../types/game';
import { CriticScore } from '../CriticScore/CriticScore';
import { DefinitionItem } from '../DefinitionItem/DefinitionItem';

type Props = {
  game?: Game;
};

export const GameAttributes: React.FC<Props> = ({ game }) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game?.metacritic || 0} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game?.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
