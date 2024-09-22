type Restaurant = {
  name: string;
  img: string;
  star: number;
  totalReview: number;
  prices: {
    min: number;
    max: number;
  };
  location: string;
};

export type { Restaurant };
