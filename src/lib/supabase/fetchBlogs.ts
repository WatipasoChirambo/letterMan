import { supabase } from '../../supabase/supabase';
import type { IBlogs } from '../../types/types'; 

const getUsers = async (): Promise<IBlogs[]> => {
  const { data, error } = await supabase.from('blogs').select('*');
  
  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }
  
  return data;
};

let blogs: IBlogs[] = [];
getUsers().then((data) => {
    blogs = data;
});
