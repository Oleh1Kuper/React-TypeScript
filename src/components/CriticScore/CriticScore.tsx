import React from 'react';
import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};

export const CriticScore: React.FC<Props> = ({ score }) => {
  const setColorScore = (score: number) => {
    switch (true) {
      case score >= 75:
        return 'green';

      case score >= 60:
        return 'yellow';

      default:
        return '';
    }
  };

  return (
    <Badge
      colorScheme={setColorScore(score)}
      fontSize="14px"
      px={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};
