import { usePlatforms } from './usePlatforms';

export const usePlatform = (id?: number) => {
  const {
    data: { results: platform },
  } = usePlatforms();

  return platform.find((platform) => platform.id === id);
};
