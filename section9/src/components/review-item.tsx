import style from "@/components/review-item.module.css";
import { ReviewData } from "@/types";
import ReviewItemDeleteButton from "./review-item-delete";
export function ReviewItem({
  author,
  bookId,
  content,
  createdAt,
  id,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
        </div>
      </div>
    </div>
  );
}
