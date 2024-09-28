type Restaurant = {
  name: string;
  description: string;
  img: string;
  star: number;
  totalReview: number;
  prices: {
    min: number;
    max: number;
  };
  location: string;
  longlat: {
    lng: number;
    lat: number;
  };
};

export type { Restaurant };
