"use server";
import { TDhikr } from "@/definitions";
import { createSupabaseClient } from "@/lib/supabase/client";
// FETCH MORNING AZKAR
export const fetchMorningAzkar = async () => {
	try {
		const supabase = createSupabaseClient();

		const { data, error } = await supabase.rpc("fetch_adhkar_by_type", {
			type_name: "morning",
		});

		if (error) {
			throw new Error(error.message);
		}

		if (!data) {
			throw new Error("No data returned from the query");
		}
		return data as TDhikr[];
	} catch (error) {
		console.error("Error fetching morning azkar:", error);
		throw error;
	}
};

// FETCH EVENING AZKAR
export const fetchEveningAzkar = async () => {
	try {
		const supabase = createSupabaseClient();

		const { data, error } = await supabase.rpc("fetch_adhkar_by_type", {
			type_name: "evening",
		});

		if (error) {
			throw new Error(error.message);
		}

		if (!data) {
			throw new Error("No data returned from the query");
		}
		return data as TDhikr[];
	} catch (error) {
		console.error("Error fetching evening azkar:", error);
		throw error;
	}
};

// FETCH PRAYER AZKAR
export const fetchPrayerAzkar = async () => {
	try {
		const supabase = createSupabaseClient();

		const { data, error } = await supabase.rpc("fetch_adhkar_by_type", {
			type_name: "prayer",
		});

		if (error) {
			throw new Error(error.message);
		}

		if (!data) {
			throw new Error("No data returned from the query");
		}
		return data as TDhikr[];
	} catch (error) {
		console.error("Error fetching prayer azkar:", error);
		throw error;
	}
};

// FETCH SLEEPING AZKAR
export const fetchSleepingAzkar = async () => {
	try {
		const supabase = createSupabaseClient();

		const { data, error } = await supabase.rpc("fetch_adhkar_by_type", {
			type_name: "sleeping",
		});

		if (error) {
			throw new Error(error.message);
		}

		if (!data) {
			throw new Error("No data returned from the query");
		}
		return data as TDhikr[];
	} catch (error) {
		console.error("Error fetching sleeping azkar:", error);
		throw error;
	}
};
