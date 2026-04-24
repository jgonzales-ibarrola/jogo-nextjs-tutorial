import prisma from "@/lib/prisma";

export async function fetchHellos() {
	const hellos = await prisma.hello.findMany({});

	return hellos;
}
