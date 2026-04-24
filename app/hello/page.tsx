import prisma from "@/lib/prisma";

export default async function HelloPage() {
	const hellos = await prisma.hello.findMany({
		orderBy: { createdAt: "desc" },
	});

	return (
		<main>
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
		</main>
	);
}
