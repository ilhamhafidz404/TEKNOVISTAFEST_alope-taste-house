type Chef = {
  name: string;
  specialist: string;
  location: string;
  photo: string;
  experience: number;
  at: string;
};

type ChefExperienceCardProps = {
  experience: number;
};

type ChefLocationCardProps = {
  location: string;
  img: string;
};

export type { Chef, ChefExperienceCardProps, ChefLocationCardProps };
