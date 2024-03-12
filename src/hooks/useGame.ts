import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ms from 'ms';
import APIClient from '../services/apiClient';
import { Game } from '../types/game';

const apiClient = new APIClient<Game>('/games');

export const useGame = () => {
  const params = useParams();

  return useQuery({
    queryKey: ['gameDetails', params.slug],
    queryFn: () => apiClient.getSingle(params.slug!),
    staleTime: ms('24h'),
  });
};
