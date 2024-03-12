import React from 'react';
import { useTrailers } from '../../hooks/useTrailers';

type Props = {
  id: number;
};

export const GameTrailer: React.FC<Props> = ({ id }) => {
  const { data, isLoading, error } = useTrailers(id);

  if (error) {
    return error.message;
  }

  if (isLoading) {
    return null;
  }

  const first = data?.results[0];

  return (
    <>
      <video
        src={first?.data[480]}
        poster={first?.preview}
        controls
      />
    </>
  );
};
