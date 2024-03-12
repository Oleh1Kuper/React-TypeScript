import {
  Grid, Show, GridItem, HStack, Box,
} from '@chakra-ui/react';
import { GameGrid } from '../../components/GameGrid/GameGrid';
import { GameHeading } from '../../components/GameHeading/GameHeading';
import { GenresList } from '../../components/GenresList/GenresList';
import {
  PlatformSelector,
} from '../../components/PlatformSelector/PlatformSelector';
import { SortSelector } from '../../components/SortSelector/SortSelector';

export const HomePge = () => {
  return (
    <Grid
      templateAreas={{
        base: '"main"',
        lg: '"aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box pl="10px">
          <GameHeading />
          <HStack spacing={5} mb={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
