import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Page {id}</h1>;
}
