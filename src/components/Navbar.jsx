import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/europe">Europe</Link>
          </li>

          <li>
            <Link href="/favs">Favs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
