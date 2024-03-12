import React from 'react';
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import cropImageUrl from '../../services/imageUrl';
import { useGenres } from '../../hooks/useGenres';
import { GenreSkeleton } from '../GenreSkeleton/GenreSkeleton';
import scrollToTop from '../../services/scrollToTop';
import useGameQueryStore from '../../store/useGameQueryStore';

export const GenresList: React.FC = () => {
  const { data, isLoading, error } = useGenres();
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  const handleClick = (genreId: number) => () => {
    scrollToTop();
    setGenreId(genreId);
  };

  if (error) {
    return null;
  }

  return (
    <>
      {isLoading && <GenreSkeleton />}
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack gap="10px">
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={cropImageUrl(genre?.image_background)}
              />
              <Button
                fontSize="large"
                variant="link"
                transition="all 0.3s"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === genreId ? 'bold' : 'normal'}
                onClick={handleClick(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
