import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>this country does not exist bro! </h1>
      <Link href="/">volver</Link>
    </div>
  );
}
