import React from 'react';
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaAndroid,
  FaApple,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../../types/platform';

type Props = {
  platforms: Platform[];
};

export const PlatformIconList: React.FC<Props> = ({ platforms }) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={icons[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};
