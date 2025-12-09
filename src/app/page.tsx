import { useUsername } from "@/hooks/useUsername";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";

export default function Home() {

  const { username} = useUsername()

  const {} = useMutation({
    mutationFn: () => {
      return client.get()
    }
  })
  return (
   <main>
    hi
   </main>
  );
}
