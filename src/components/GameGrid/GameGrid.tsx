import React from 'react';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameCard } from '../GameCard/GameCard';
import { GameCardSkeleton } from '../GameCardSkeleton/GameCardSkeleton';
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import { useGames } from '../../hooks/useGames';
import setSkeletonQuantity from '../../services/setSkeletonQuantity';

export const GameGrid: React.FC = () => {
  const {
    data,
    error,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useGames();
  const skeletons = setSkeletonQuantity(8);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          p="10px"
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={6}
        >
          {isLoading
          && skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
