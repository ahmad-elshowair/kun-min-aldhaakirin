import configs from "@/configs";
import { createBrowserClient } from "@supabase/ssr";
export const createSupabaseClient = () => {
	return createBrowserClient(configs.supabaseUrl, configs.supabaseAnonKey);
};
