import book from "../../assets/img/book.png";
import s from "./modules/mainDonatedBooks.module.scss";

export default function DonatedBooks() {
  return (
    <section className={s.container}>
      <section className={s.textContent}>
        <h3>Donated Books</h3>
      </section>

      <section className={s.containerCards}>
        <section className={s.cards}>
          <article className={s.card}>
            <span className={s.bookImg}>
              <img src={book} alt="Book" />
            </span>
            <span className={s.bookInfo}>
              <strong>
                <h3>The Protagonist</h3>
              </strong>
              <p>Susane Andrade</p>
              <p>Fiction</p>
            </span>
          </article>
        </section>
      </section>
    </section>
  );
}
