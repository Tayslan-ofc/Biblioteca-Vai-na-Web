import book from "../../assets/img/book.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import s from "./modules/mainDonatedBooks.module.scss";

export default function DonatedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-livros-t3-9u2p.onrender.com/livros")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h3>Donated Books</h3>
      <section className={s.container}>
        {/*   <section className={s.containerCards}>
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
      </section> */}

        {books.map((book) => (
          <section className={s.containerCards}>
            <section className={s.cards}>
              <article className={s.card}>
                <span className={s.bookImg}>
                  <img src={book.image_url} alt="Book" />
                </span>
                <span className={s.bookInfo}>
                  <strong>
                    <h3>{book.titulo}</h3>
                  </strong>
                  <p>{book.autor}</p>
                  <p>{book.categoria}</p>
                </span>
              </article>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}
