import { redirect } from "next/navigation";

export default function HomePage() {
  const userId = "76d6eb8d-5c2e-49f7-b798-d69700dda4c3"; // change this to another userId as desired

  redirect(`/welcome/${userId}`);
}
