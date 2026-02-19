"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { TDhikr } from "@/definitions";

export const fetchAzkarByType = async (typeName: string): Promise<TDhikr[]> => {
  try {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.rpc("fetch_adhkar_by_type", {
      type_name: typeName,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      throw new Error("No data returned from the query");
    }
    return data as TDhikr[];
  } catch (error) {
    console.error(`Error fetching ${typeName} azkar:`, error);
    throw error;
  }
};
