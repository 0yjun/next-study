import style from "@/pages/index.module.css";
import SearchableLayout from "@/pages/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>INDEX</h1>
      <h2 className={style.h2}>h2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
