import { queryOptions } from "@tanstack/react-query";
import { hellosKeys } from "../keys/hellos";

export const hellosOptions = queryOptions({
	queryKey: hellosKeys.all,
	queryFn: async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`, {
			cache: "no-store",
		});

		return res.json();
	},
	staleTime: 1000 * 60 * 5, // Cache for 5 minutes
});
