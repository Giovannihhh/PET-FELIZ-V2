export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}