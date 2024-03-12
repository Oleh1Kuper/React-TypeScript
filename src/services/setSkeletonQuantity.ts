const setSkeletonQuantity = (n: number) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

export default setSkeletonQuantity;
