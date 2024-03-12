import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient';
import { Trailer } from '../types/trailer';

export const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ['trailer', id],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};
