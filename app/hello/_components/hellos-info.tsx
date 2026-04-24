"use client";
import { hellosOptions } from "@/lib/query/options/hellos";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function HellosInfo() {
	const { data: hellos } = useSuspenseQuery(hellosOptions);

	return (
		<div>
			{hellos.length === 0 && (
				<h3 className="text-2xl font-bold">No hellos found.</h3>
			)}

			{hellos.length > 1 && (
				<ul className="list-disc">
					{hellos.map((h) => (
						<li key={h.id}>{h.content}</li>
					))}
				</ul>
			)}
		</div>
	);
}
