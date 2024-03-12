import React from 'react';
import {
  Grid, GridItem, Heading, Spinner,
} from '@chakra-ui/react';
import { useGame } from '../../hooks/useGame';
import { ExpandedText } from '../../components/ExpandedText/ExpandedText';
import { GameAttributes } from '../../components/GameAttributes/GameAttributes';
import { GameTrailer } from '../../components/GameTrailer/GameTrailer';
import {
  GameScreenshots,
} from '../../components/GameScreenshots/GameScreenshots';

export const GameDetailPage: React.FC = () => {
  const { data: game, error, isLoading } = useGame();

  if (error || !game) {
    return error?.message;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 1fr',
      }}
      gap={5}
    >
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandedText>{game.description_raw}</ExpandedText>
      </GridItem>
      <GridItem>
        <GameAttributes game={game} />
        <GameTrailer id={game.id} />
        <GameScreenshots id={game.id} />
      </GridItem>
    </Grid>
  );
};
