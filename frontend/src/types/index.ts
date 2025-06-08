// src/types/index.ts
export interface PortfolioItem {
  id: string;
  imageUrl: string;
  title?: string;
}

export interface Professional {
  id: string;
  name: string;
  brandName?: string;
  phone: string;
  category: string;
  isVerified: boolean;
  profilePictureUrl: string;
  bio?: string;
  // stats: { ... }, // <-- DELETE THIS ENTIRE LINE
  portfolio?: PortfolioItem[];
  instagramUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}
export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  token: string;
}
