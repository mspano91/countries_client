import React from "react";
import Link from "next/link";
import style from "@/components/Navbar/navBar.module.css";

export default function Navbar() {
  return (
    <div className={style.nav}>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/europe">Europe</Link>
          </li>

          <li>
            <Link href="/favs">My trips</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
