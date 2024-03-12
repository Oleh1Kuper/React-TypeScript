import {
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import setSkeletonQuantity from '../../services/setSkeletonQuantity';

export const GenreSkeleton = () => {
  const skeletons = setSkeletonQuantity(19);

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem paddingY="5px" key={skeleton}>
          <HStack>
            <Skeleton borderRadius={8} boxSize="32px" />
            <SkeletonText width="100px" height="25px" noOfLines={2} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
