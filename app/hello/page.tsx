import { Suspense } from "react";
import HellosInfo from "./_components/hellos-info";

export default async function HelloPage() {
	return (
		<main>
			<Suspense
				fallback={
					<h3 className="text-2xl font-bold">
						Hello info is loading...
					</h3>
				}
			>
				<HellosInfo />
			</Suspense>
		</main>
	);
}
