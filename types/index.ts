export interface Pool {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  total_amount: number;
  raised_amount: number;
  slots_total: number;
  slots_filled: number;
  location: string;
  category: string;
  status: 'active' | 'completed' | 'cancelled';
  creator_id?: string;
  is_verified?: boolean;
  created_at?: string;
}

export interface User {
  id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  is_seller?: boolean;
}
