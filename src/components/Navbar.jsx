import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/europe">Europe</Link>
          </li>
          <li>America</li>

          <li>Africa</li>
        </ul>
      </nav>
    </div>
  );
}
