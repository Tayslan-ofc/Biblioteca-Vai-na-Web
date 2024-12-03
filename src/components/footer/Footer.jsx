import s from "./footer.module.scss";
import "boxicons/css/boxicons.min.css";
import "boxicons";

export default function Footer() {
  return (
    <footer>
      <section className={s.containerFooter}>
        <section className={s.number}>
          <p>4002-8922</p>
        </section>
        <section className={s.containerIcons}>
          <a href="#">
            <box-icon type="logo" name="facebook-circle" color="#fff" ></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="twitter" color="#fff" ></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="youtube" color="#fff" ></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="linkedin-square" color="#fff" ></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="instagram" color="#fff" ></box-icon>
          </a>
        </section>
      </section>

      <section className={s.endFooter}>
        <p>Layout developed by Vai Na Web for educational purposes - 2024</p>
      </section>
    </footer>
  );
}
