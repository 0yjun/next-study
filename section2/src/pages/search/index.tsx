import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { test } = router.query;
  console.log(test);
  return <h1>search{test}</h1>;
}
