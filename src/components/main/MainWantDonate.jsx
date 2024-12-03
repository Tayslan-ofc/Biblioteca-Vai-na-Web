import s from "./modules/mainWantDonate.module.scss";

export default function WantDonate() {
  return (
    <section className={s.container}>
      <section className={s.textContent}>
        <h3 className={s.title}>
          Please fill out the form with your information and the Book
          information.
        </h3>
      </section>
      <section className={s.formContainer}>
        <form action="">
          <section className={s.bookInformation}>
            <box-icon name="book-open" color="#005695" size="2rem"></box-icon>
            <h3>Book Information</h3>
          </section>

          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="category" placeholder="Category" required />
          <input type="text" name="author" placeholder="Author" required />
          <input
            type="url"
            name="linkImage"
            placeholder="Link of image"
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </section>
  );
}
