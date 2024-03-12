import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../types/game';
import APIClient, { FetchResponse } from '../services/apiClient';
import useGameQueryStore from '../store/useGameQueryStore';

const apiClient = new APIClient<Game>('/games');

export const useGames = () => {
  const { gameQuery } = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ['games', gameQuery],
    initialPageParam: 1,
    staleTime: ms('24h'),
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genreId,
          search: gameQuery.searchQuery,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
