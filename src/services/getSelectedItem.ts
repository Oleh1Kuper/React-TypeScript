import { Genre } from '../types/genre';
import { Platform } from '../types/platform';

const getSelectedItem = (data: Platform[] | Genre[], id?: number) => {
  return data?.find((d) => d.id === id);
};

export default getSelectedItem;
