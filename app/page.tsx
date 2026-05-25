import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: instruments, error } = await supabase
    .from("instruments")
    .select("*");

  if (error) {
    return (
      <main style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Supabase error</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>VaultShare</h1>
      <p>Connected to Supabase.</p>

      <h2>Instruments from database:</h2>
      <ul>
        {instruments?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
