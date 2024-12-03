import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import WantDonate from "../../pages/wantDonate/WantDonate";
import DonatedBooks from "../../pages/donatedBooks/DonatedBooks";
import s from "./header.module.scss";
import "boxicons";

import LogoBook from "../../assets/img/logo-book.png";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.containerLogo}>
          <img src={LogoBook} alt="logo-book" />
          <h1>Books Vai na Web</h1>
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/" className={s.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/wantDonate" className={s.link}>
                Want Donate
              </Link>
            </li>
            <li>
              <Link to="/donatedBooks" className={s.link}>
                Donated Books
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.containerSearch}>
          <label htmlFor="search">
            <input type="text" placeholder="Search"  autoComplete="off" id="search" />
            <box-icon
              color="#fff"   
              name="search"
            ></box-icon>
          </label>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wantDonate" element={<WantDonate />} />
        <Route path="/donatedBooks" element={<DonatedBooks />} />
      </Routes>
    </BrowserRouter>
  );
}
