import React from 'react';
import { Image } from '@chakra-ui/react';
import bullsEye from '../../assets/Emojis/bulls-eye.webp';
import meh from '../../assets/Emojis/meh.webp';
import thumbs from '../../assets/Emojis/thumbs-up.webp';

type Props = {
  rating: number;
};

export const Emoji: React.FC<Props> = ({ rating }) => {
  if (rating < 3) {
    return null;
  }

  const getSuitableEmoji = (rating: number) => {
    switch (true) {
      case rating > 4:
        return bullsEye;

      case rating > 3:
        return thumbs;

      default:
        return meh;
    }
  };

  const emoji = getSuitableEmoji(rating);

  return (
    <Image
      src={emoji}
      mt={1}
      boxSize={emoji === bullsEye ? '35px' : '25px'}
      alt="Rating emoji"
    />
  );
};
