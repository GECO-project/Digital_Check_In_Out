"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Start");
  }, [router]);

  return <></>;
}
