export interface Feature {
  title: string;
  icon: string;
}

export interface Subject {
  name: string;
  image: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}
