import React from 'react';
import {
  Card, CardBody, HStack, Heading, Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/game';
import { PlatformIconList } from '../PlatformIconList/PlatformIconList';
import { CriticScore } from '../CriticScore/CriticScore';
import cropImageUrl from '../../services/imageUrl';
import { Emoji } from '../Emoji/Emoji';

type Props = {
  game: Game;
};

export const GameCard: React.FC<Props> = ({ game }) => {
  const platforms = game.parent_platforms.map((p) => p.platform);

  return (
    <Card>
      <Image src={cropImageUrl(game.background_image)} alt="Game image" />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList platforms={platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
