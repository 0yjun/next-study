import SearchableLayout from "@/pages/components/searchable-layout";
import { ReactNode } from "react";
import style from "@/pages/index.module.css";
import books from "@/mock/books.json";
import BookItem from "./components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h2>지금 추천하는 도서</h2>
        {books.map((books) => (
          <BookItem key={books.id} {...books} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((books) => (
          <BookItem key={books.id} {...books} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
