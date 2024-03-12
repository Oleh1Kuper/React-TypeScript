import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Platform } from '../types/platform';
import APIClient from '../services/apiClient';
import platforms from '../data/platforms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: platforms,
});
