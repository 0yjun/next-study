import Link from "next/link";
import style from "@/pages/components/global-layout.module.css";
import React, { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>onebite books</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>made by jun</footer>
    </div>
  );
}
