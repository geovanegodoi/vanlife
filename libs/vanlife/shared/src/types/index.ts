export type VanType = 'Simple' | 'Luxury' | 'Rugged';
export interface VanModel {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: VanType;
  visibility: string;
}

export interface ReviewModel {
  rating: number;
  user: string;
  date: string;
  text: string;
}
