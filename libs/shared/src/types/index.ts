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

export type VanModels = VanModel[];

export interface ReviewModel {
  rating: number;
  user: string;
  date: string;
  text: string;
}

export type ReviewModels = ReviewModel[];

export type OneOrMany<Type> = Type | Type[];

export type OrNull<Type> = Type | null;

export type OrUndefined<Type> = Type | undefined;
