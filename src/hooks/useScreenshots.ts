import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient';
import { Screenshot } from '../types/screenshot';

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', id],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useScreenshots;
