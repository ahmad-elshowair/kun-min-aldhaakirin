const configs = {
	supabaseAnonKey: String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
	supabaseUrl: String(process.env.NEXT_PUBLIC_SUPABASE_URL),
	getAudioUrl: (type: string, filename: string) =>
		`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/kun-min-aldhaakirin/audios/${type}/${filename}`,
};
export default configs;
