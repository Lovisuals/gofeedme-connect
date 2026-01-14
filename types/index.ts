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
  deadline?: string;
  status: 'active' | 'completed' | 'failed';
  category?: string;
  creator_name?: string;
  is_verified?: boolean;
}

export interface Contribution {
  id: string;
  amount: number;
  user_id: string;
  pool_id: string;
  redemption_code?: string;
  status: 'escrow' | 'released';
  created_at: string;
}
