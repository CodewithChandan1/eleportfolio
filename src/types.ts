export type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Package = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Offer = {
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
};