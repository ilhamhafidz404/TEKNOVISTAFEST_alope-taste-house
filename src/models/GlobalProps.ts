type TestimoniProps = {
  name: string;
  text: string;
};

type MenuCategoryProps = {
  name: string;
  description: string;
  price: number;
};

type HeaderProps = {
  title: string;
  description: string;
  img: string[];
  currentImg: string;
};

export type { TestimoniProps, MenuCategoryProps, HeaderProps };
