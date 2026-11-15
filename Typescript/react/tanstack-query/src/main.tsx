import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

const client = new QueryClient();

function Joke() {
  const { data, isPending, error } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json() as Promise<{ title: string }>,
  });
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <p>Fetched (and cached) title: {data.title}</p>;
}

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}><h1>Hello, TanStack Query</h1><Joke /></QueryClientProvider>,
);
