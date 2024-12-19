export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}