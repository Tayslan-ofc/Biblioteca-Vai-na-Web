import s from "./modules/mainWantDonate.module.scss";
import axios from "axios";
import { useState } from "react";

export default function WantDonate() {
  /* estados */
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setImage_URL] = useState("");

  const captureTitle = (e) => setTitle(e.target.value);
  const captureAuthor = (e) => setAuthor(e.target.value);
  const captureCategory = (e) => setCategory(e.target.value);
  const captureImage_URL = (e) => setImage_URL(e.target.value);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-livros-t3-9u2p.onrender.com/doar",
        {
          titulo: title,
          autor: author,
          categoria: category,
          image_url,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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

          <input
            onChange={captureTitle}
            type="text"
            name="title"
            placeholder="Title"
            required
          />
          <input
            onChange={captureCategory}
            type="text"
            name="category"
            placeholder="Category"
            required
          />
          <input
            onChange={captureAuthor}
            type="text"
            name="author"
            placeholder="Author"
            required
          />
          <input
            onChange={captureImage_URL}
            type="url"
            name="linkImage"
            placeholder="Link of image"
            required
          />
          <button onClick={submitData} type="submit">Send</button>
        </form>
      </section>
    </section>
  );
}
