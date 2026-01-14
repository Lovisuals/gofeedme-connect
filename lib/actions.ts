'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}

// Fetch Active Pools (For Main Grid)
export async function getActivePools() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('pools')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Supabase Error:", error.message);
    return [];
  }
  return data;
}

// Fetch Completed Pools (For Trust History)
export async function getCompletedPools() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('pools')
    .select('*')
    .eq('status', 'completed')
    .limit(4) // Show only the last 4 successes
    .order('created_at', { ascending: false });
  
  if (error) return [];
  return data;
}

export async function getPool(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('pools')
    .select('*, profiles(*)')
    .eq('id', id)
    .single();
    
  if (error) return null;
  return data;
}

export async function createPool(formData: FormData) {
  const supabase = createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  const creator_id = session?.user.id; 

  if (!creator_id) {
     return { error: "Please sign in to create a pool" };
  }

  const title = formData.get('title') as string;
  const amount = Number(formData.get('amount'));
  const slots = Number(formData.get('slots'));
  const category = formData.get('category') as string;
  
  // Default placeholder if upload fails (MVP)
  const image_url = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800';

  const { data, error } = await supabase
    .from('pools')
    .insert({
      title,
      total_amount: amount,
      slots_total: slots,
      category,
      image_url,
      location: 'Lagos Hub (Pending)',
      creator_id,
      status: 'active'
    })
    .select()
    .single();

  if (error) return { error: error.message };

  revalidatePath('/');
  redirect(`/pools/${data.id}`);
}
