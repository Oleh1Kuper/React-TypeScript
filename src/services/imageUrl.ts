import noImage from '../assets/no-image-placeholder.webp';

const cropImageUrl = (url: string) => {
  if (!url) {
    return noImage;
  }

  const params = 'crop/600/400/';
  const separator = '/media/';
  const [start, end] = url.split(separator);

  return `${start}${separator}${params}${end}`;
};

export default cropImageUrl;
