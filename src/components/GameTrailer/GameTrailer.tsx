import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { useTrailers } from '../../hooks/useTrailers';

type Props = {
  id: number;
};

export const GameTrailer: React.FC<Props> = ({ id }) => {
  const { data, isLoading, error } = useTrailers(id);

  if (error) {
    return error.message;
  }

  const first = data?.results[0];

  return (
    <>
      {isLoading ? <Spinner /> : (
        <video
          src={first?.data[480]}
          poster={first?.preview}
          controls
        />
      )}
    </>
  );
};
