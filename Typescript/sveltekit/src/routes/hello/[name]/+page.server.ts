import type { PageServerLoad } from "./$types";

// Runs on the server before the page renders; the result becomes the page's `data`.
export const load: PageServerLoad = ({ params }) => ({ name: params.name });
