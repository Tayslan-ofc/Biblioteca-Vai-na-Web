import img1 from "../../assets/img/imgCentral.png";
import img2 from "../../assets/img/community.png";
import img3 from "../../assets/img/reading.png";
import img4 from "../../assets/img/transform.png";
import img5 from "../../assets/img/balance.png";

import s from "./modules/mainHome.module.scss";

export default function Home() {
  return (
    <main>
      <section className={s.startHome}>
        <section className={s.containerText}>
          <h2>Come be part of the largest donation network</h2>
        </section>
        <img className={s.startImg} src={img1} alt="Person holding a book" />
      </section>
      <section className={s.container}>
        <section>
          <h2>Why should i donate?</h2>
        </section>
        <section className={s.containerCards}>
          <article className={s.card}>
            <img src={img2} alt="Community" />
            <p>
              It offers books to those who do not have access, helping to reduce
              social exclusion.
            </p>
          </article>
          <article className={s.card}>
            <img src={img3} alt="Reading" />
            <p>It encourages the habit of reading and continuous learning. </p>
          </article>
          <article className={s.card}>
            <img src={img4} alt="Transform" />
            <p>
              Provides knowledge and inspiration, enabling individuals to
              transform their lives.
            </p>
          </article>
          <article className={s.card}>
            <img src={img5} alt="Balance" />
            <p>
              Ensures that everyone, regardless of their condition, has learning
              opportunities.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
