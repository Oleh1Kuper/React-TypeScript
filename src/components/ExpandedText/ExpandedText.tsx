import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
  children: string;
};

export const ExpandedText: React.FC<Props> = ({ children }) => {
  const [isExpended, setIsExpended] = useState(false);
  const limit = 300;

  if (!children) {
    return null;
  }

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  return (
    <Text>
      {isExpended ? children : `${children.slice(0, limit)}...`}
      <Button
        size="xs"
        fontSize="bold"
        ml={1}
        onClick={() => setIsExpended(!isExpended)}
        children={isExpended ? 'Show less' : 'Show more'}
        colorScheme="yellow"
      />
    </Text>
  );
};
