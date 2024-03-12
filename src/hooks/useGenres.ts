import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Genre } from '../types/genre';
import APIClient from '../services/apiClient';
import genres from '../data/genres';

const apiClient = new APIClient<Genre>('/genres');

export const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres,
});
