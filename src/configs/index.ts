const configs = {
	supabaseAnonKey: String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
	supabaseUrl: String(process.env.NEXT_PUBLIC_SUPABASE_URL),
	supabaseServiceRoleKey: String(
		process.env.SUPABASE_SERVICE_ROLE_KEY,
	),
};
export default configs;
