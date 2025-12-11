import { LucideIcon } from 'lucide-react';

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  color: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}